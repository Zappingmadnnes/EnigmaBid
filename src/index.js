import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./routes/LandingPage/LandingPage";
import AuctionsPage from "./routes/AuctionsPage/AuctionsPage";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import ItemPage from "./routes/ItemPage/ItemPage";
import CreatePage from "./routes/CreatePage/CreatePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/auctions",
		element: <AuctionsPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
	{
		path: "/auctions/:auctionId",
		element: <ItemPage />,
	},
	{
		path: "/auctions/create",
		element: <CreatePage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
