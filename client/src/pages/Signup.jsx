// import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../services/apirequests";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "./userSlice";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirm, setConfirmPassword] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmitData(e) {
    e.preventDefault();
    setActive(true);
    const user = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: PasswordConfirm,
      photo: "default.jpg",
    };
    console.log(user);
    const res = await signup(user);
    dispatch(setUser(res.user));
    setActive(false);
    if (res.status === "success") navigate("/events");
  }

  return (
    <div>
      <div className={`bg-cover bg-center w-full flex justify-center`}>
        <form
          className="mt-4 h-[618px] pl-12 pt-10 gap-1 flex flex-col  w-[578px] border-b-zinc-600 bg-white shadow-xl rounded-2xl"
          onSubmit={handleSubmitData}
        >
          <h1 className="uppercase font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl mb-5">
            sign into your account
          </h1>
          <ul className="flex flex-col gap-6 text-base text-stone-500">
            <li className="flex flex-col gap-2">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label>ConfirmPassword</label>
              <input
                type="text"
                id="confirmpassword"
                value={PasswordConfirm}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md"
              />
            </li>

            <li>
              {" "}
              <button className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full">
                {active === true ? "Signing in" : "Sign up"}
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Signup;
