import Home from "@pages/Home";
import Login from "@pages/Login";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function AppRouter() {
	const appRoutes = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
		{
			path: "/login",
			element: <Login />
		},
	]);

	return (
		<RouterProvider router={appRoutes} />
	);
}