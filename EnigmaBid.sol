// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract EnigmaBid {
    struct Auction {
        address payable beneficiary;
        uint biddingEnd;
        uint revealEnd;
        bool ended;
        mapping(address => Bid[]) bids;
        address highestBidder;
        uint highestBid;
    }

    struct Bid {
        bytes32 blindedBid;
        uint deposit;
    }

    mapping(uint => Auction) public auctions;
    uint public auctionCount;

    event AuctionCreated(uint auctionId);
    event AuctionEnded(uint auctionId, address winner, uint highestBid);

    modifier onlyBefore(uint _time) {
        require(block.timestamp < _time);
        _;
    }
    modifier onlyAfter(uint _time) {
        require(block.timestamp > _time);
        _;
    }

    function createAuction(
        uint _biddingTime,
        uint _revealTime,
        address payable _beneficiary
    ) public {
        uint auctionId = auctionCount++;
        auctions[auctionId].beneficiary = _beneficiary;
        auctions[auctionId].biddingEnd = block.timestamp + _biddingTime;
        auctions[auctionId].revealEnd =
            block.timestamp +
            _biddingTime +
            _revealTime;
        auctions[auctionId].ended = false;
        auctions[auctionId].highestBidder = address(0);
        auctions[auctionId].highestBid = 0;
        emit AuctionCreated(auctionId);
    }

    function bid(
        uint _auctionId,
        bytes32 _blindedBid
    ) public payable onlyBefore(auctions[_auctionId].biddingEnd) {
        auctions[_auctionId].bids[msg.sender].push(
            Bid({blindedBid: _blindedBid, deposit: msg.value})
        );
    }

    function reveal(
        uint _auctionId,
        uint[] memory _values,
        bool[] memory _fake,
        bytes32[] memory _secret
    )
        public
        onlyAfter(auctions[_auctionId].biddingEnd)
        onlyBefore(auctions[_auctionId].revealEnd)
    {
        Auction storage auction = auctions[_auctionId];
        uint length = auction.bids[msg.sender].length;
        require(_values.length == length);
        require(_fake.length == length);
        require(_secret.length == length);

        uint refund;
        for (uint i = 0; i < length; i++) {
            Bid storage bidToCheck = auction.bids[msg.sender][i];
            (uint value, bool fake, bytes32 secret) = (
                _values[i],
                _fake[i],
                _secret[i]
            );
            if (
                bidToCheck.blindedBid !=
                keccak256(abi.encodePacked(value, fake, secret))
            ) {
                continue;
            }
            refund += bidToCheck.deposit;
            if (
                !fake &&
                bidToCheck.deposit >= value &&
                value > auction.highestBid
            ) {
                if (placeBid(_auctionId, msg.sender, value)) {
                    auction.highestBid = value;
                    auction.highestBidder = msg.sender;
                }
            }
            bidToCheck.blindedBid = bytes32(0);
        }
        payable(msg.sender).transfer(refund);
    }

    function placeBid(
        uint _auctionId,
        address bidder,
        uint value
    ) internal returns (bool success) {
        Auction storage auction = auctions[_auctionId];
        if (value <= auction.highestBid) {
            return false;
        }
        if (auction.highestBidder != address(0)) {
            auction
            .bids[auction.highestBidder][
                auction.bids[auction.highestBidder].length - 1
            ].deposit += auction.highestBid;
        }
        auction.highestBid = value;
        auction.highestBidder = bidder;
        return true;
    }

    function withdraw(uint _auctionId) public {
        Auction storage auction = auctions[_auctionId];
        Bid[] storage bidsToRefund = auction.bids[msg.sender];
        uint length = bidsToRefund.length;
        for (uint i = 0; i < length; i++) {
            Bid storage bidToRefund = bidsToRefund[i];
            if (bidToRefund.blindedBid != bytes32(0)) {
                payable(msg.sender).transfer(bidToRefund.deposit);
            }
        }
    }

    function auctionEnd(
        uint _auctionId
    ) public onlyAfter(auctions[_auctionId].revealEnd) {
        Auction storage auction = auctions[_auctionId];
        require(!auction.ended);
        emit AuctionEnded(
            _auctionId,
            auction.highestBidder,
            auction.highestBid
        );
        auction.ended = true;
        auction.beneficiary.transfer(auction.highestBid);
    }
}
