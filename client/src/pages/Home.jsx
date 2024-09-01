import "./home.css";
import { Link } from "react-router-dom";
import { getAllEvents } from "../services/apirequests";
import { useLoaderData } from "react-router-dom";
import { setEvents } from "../componets/eventsSlice";
import { useDispatch } from "react-redux";
function Home() {
  return (
    <div className="home-page w-full h-full  bg-center bg-cover place-content-center">
      <section className="text-center flex flex-col gap-5">
        <h1 className="text-4xl text-stone-100 font-semibold">
          Events that Inspire Moments that Last
          <br />
          Let Us Handle the Details While You Enjoy the Moments
        </h1>
        <h2 className="text-xl text-stone-400 font-[500]">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/events" className="cta  block">
          <button className="py-2 px-4 bg-[#ffb545] box-content ">
            {" "}
            Explore events
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
