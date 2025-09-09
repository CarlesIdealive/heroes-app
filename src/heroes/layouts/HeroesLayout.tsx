import { Link, Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-red-100">
      <ul>
      <li>
          <Link to="/">Homeeeee</Link>
        </li>
        <li>
          <Link to="/heroes/1">Hero 1</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <div className="mt-10">

        <Outlet />
      </div>

    </div>
  )
}
