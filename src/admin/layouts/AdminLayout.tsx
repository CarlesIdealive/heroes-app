import { Outlet } from "react-router"



export const AdminLayout = () => {
  return (
    <div className="bg-blue-400">
        <h1>Admin Layout</h1>
        <Outlet />            
    </div>
    )
}


export default AdminLayout