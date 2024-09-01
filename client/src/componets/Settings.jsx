import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../pages/userSlice";
import { updateSettings } from "../services/apirequests";

function Settings() {
  const user = useSelector(getUser);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handlePasswordUpdate(e) {
    e.preventDefault();
    const form = {
      passwordCurrent: currentPassword,
      password: newPassword,
      passwordConfirm: confirmPassword,
    };
    const res = await updateSettings(form, "password");
    if (res.status === "success") alert("password updated successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="w-full mt-5 flex justify-center">
      <form
        className="h-1/2  mt-[10px] text-base   w-3/4 border-b-zinc-600 "
        onSubmit={handlePasswordUpdate}
      >
        <h1 className="uppercase font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl mb-7">
          your account settings
        </h1>
        <ul className="flex flex-col gap-6  text-stone-500">
          <li className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              readOnly
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              readOnly
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="cpassword">Current Password</label>
            <input
              type="text"
              id="cpassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="password">New Password</label>
            <input
              type="text"
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="conpassword">Confirm Password</label>
            <input
              type="text"
              id="conpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li>
            {" "}
            <button className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 text-base px-3 py-2 rounded-full">
              SAVE SETTINGS
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Settings;
