// import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "./userSlice";
import { login } from "../services/apirequests";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleUserdata(e) {
    e.preventDefault();

    setStatus(true);
    const user = {
      email: email,
      password: password,
    };

    const res = await login(user);
    dispatch(setUser(res.user));
    setStatus(false);
    if (res.status === "success") navigate("/events");
  }

  return (
    <div>
      <div className={`h-[633px]  flex  justify-center w-full`}>
        <form
          className="mt-28 h-[418px] pl-12 pt-10 gap-4 flex flex-col  w-[578px] border-b-zinc-600 bg-white shadow-xl rounded-2xl"
          onSubmit={handleUserdata}
        >
          <h1 className="uppercase font-semibold   bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl mb-5">
            log into your account
          </h1>
          <ul className="flex flex-col gap-6 text-base text-stone-500">
            <li className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md text-lg"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md text-lg"
              />
            </li>

            <li>
              {" "}
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full">
                {status === "loading" ? "...Login" : "Login"}
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Login;
