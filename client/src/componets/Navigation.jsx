import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-[#6741D9] lg:text-base lg:font-[500]">
      <ul className="flex gap-7">
        <li className="mx-3">
          <Link
            to="/"
            className="text-center block  rounded py-1 px-1  hover:bg-white hover:text-slate-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className="text-center block   rounded py-1 px-2  hover:bg-white hover:text-slate-700"
          >
            Events
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
