import { createBrowserRouter } from "react-router-dom";
import UserPage from "./layout/User";
import AdminPage from "./layout/Admin";
export const router = createBrowserRouter([
    { path: "/", element: <UserPage /> },
    { path: "/admin", element: <AdminPage /> }
])