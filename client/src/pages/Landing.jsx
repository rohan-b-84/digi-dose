import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

function Landing() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 px-4 py-6 h-full">
        <div className="text-center md:text-left">
          <h1 className="text-7xl font-bold mb-4 md:block hidden">DIGI DOSE</h1>
          <h2 className="text-4xl mb-8">
            <span className="text-blue-400 font-bold">Stay Informed,</span>
            <br />
            <span className="font-bold">One Digi Dose at a Time!</span>
          </h2>
          <p className="text-lg font-bold mb-3">Choose a Category:</p>
          <div className="space-x-4">
            <Link to='india' className="text-base font-bold border-2 border-blue-400 px-4 rounded-md hover:bg-blue-400 text-blue-400 hover:text-white transition-all">
              India
            </Link>
            <Link to='tech' className="text-base font-bold border-2 border-blue-400 px-4 rounded-md hover:bg-blue-400 text-blue-400 hover:text-white transition-all">
              Technology
            </Link>
            <Link to='sport' className="text-base font-bold border-2 border-blue-400 px-4 rounded-md hover:bg-blue-400 text-blue-400 hover:text-white transition-all">
              Sports
            </Link>
          </div>
        </div>
        <div className="md:flex hidden">
          <a target="_blank" href="https://www.freepik.com/free-vector/news-concept-illustration_5568722.htm#fromView=search&term=news&page=2&position=11&track=ais&regularType=vector">
            <img className="max-w-2xl w-full" src="hero-img.jpg" />
          </a>
        </div>
      </div>
      <Newsletter />
      <p className="md:absolute md:block hidden text-center w-full bottom-4 text-gray-500">
        Image by storyset on Freepik
      </p>
    </>
  );
}

export default Landing;
