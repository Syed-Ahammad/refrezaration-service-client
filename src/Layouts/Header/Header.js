import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const link = [
    {name: 'Home', path: '/',id: 1},
    {name: 'Services', path: '/services', id: 2},
    {name: 'Blogs', path: '/blogs', id: 3},
  ]

  return (
    <div className="navbar bg-info text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
           
            {link.map(a=><li key={a.id}><Link  to={a.path}>{a.name}</Link></li> )}
            {user?  <li>
              <Link to={'/login'}>Sign Out</Link>
            </li> :  <li>
              <Link to={'/login'}>Login</Link>
            </li>}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {link.map(a=><li key={a.id} ><Link to={a.path}>{a.name}</Link></li> )}
           {user?  <li>
              <Link to={'/login'}>Sign Out</Link>
            </li> :  <li>
              <Link to={'/login'}>Login</Link>
            </li>}
        </ul>
      </div>
      <div className="navbar-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      </div>
    </div>
  );
};

export default Header;
