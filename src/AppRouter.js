import Home from "@pages/Home";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function AppRouter() {
	const appRoutes = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
	]);

	return (
		<RouterProvider router={appRoutes} />
	);
}