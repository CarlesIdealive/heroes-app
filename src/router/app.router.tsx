import { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router"

// import { AdminLayout } from "@/admin/layouts/AdminLayout"
// import { AdminPage } from "@/admin/pages/AdminPage"
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout"
import { HeroPage } from "@/heroes/pages/hero/HeroPage"
import { HomePage } from "@/heroes/pages/home/HomePage"
// import { SearchPage } from "@/heroes/pages/search/SearchPage"


const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })))
const AdminLayout = lazy(() => import('@/admin/layouts/AdminLayout'));
const AdminPage = lazy( () => import('@/admin/pages/AdminPage'));    

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "heroes/:idSlug",
                element: <HeroPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            }
        
        ],
    }


])