import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../pages/userSlice";
import { getUser } from "../pages/userSlice";
import { logout } from "../services/apirequests";

function Header() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleLogout() {
    const res = await logout();
    if (res.status === "success") dispatch(setUser(null));
    navigate("/");
  }
  return (
    <div className="bg-[#6741D9] lg:w-4/5 lg:h-[72px] flex justify-between items-center rounded-md">
      <div className="flex gap-10 items-center">
        <Link to="/">
          <div className="flex gap-3 ml-3">
            <img
              src="./img/logo.png"
              name="event logo"
              alt="event logo"
              className="w-[60px] h-[60px] rounded-full"
            />
            <h1 className="mt-5 text-white">Event System</h1>
          </div>
        </Link>
        <Navigation />
      </div>
      {!user && (
        <div className="lg:mr-12 flex gap-3">
          <Link to="/login">
            <Button text={"Login"} />
          </Link>
          <Link to="/Signup">
            <Button text={"Signup"} />
          </Link>
        </div>
      )}
      {user && (
        <div className="lg:mr-12 flex gap-3 items-center">
          <button
            className="bg-white hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 text-gray-600  rounded text-base"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link to="/profile" className="text-lg flex items-center gap-3">
            <img
              src="https://avatar.iran.liara.run/public"
              className="w-[40px] h-[40px]"
            />
            {user ? user.name : ""}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
