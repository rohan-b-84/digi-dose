import { IconMail } from "@tabler/icons-react";
import React, { useRef } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function Newsletter() {
  const emailRef = useRef(null);
  function addToSubscription() {
    axios
      .post(`${BACKEND_URL}/subscribe`, {
        email: emailRef.current.value,
      })
      .then((res) => res.data)
      .then((data) => {
        alert(data.message);
        emailRef.current.value = "";
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="text-center md:text-left">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
            Stay up to date with the latest updates and announcements, feel free
            to sign up with your email.
          </p>

          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <IconMail className="text-gray-500" />
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
                ref={emailRef}
              />
            </div>
            <div>
              <button
                onClick={addToSubscription}
                className="py-3 border-blue-400 px-5 w-full text-sm text-center rounded-lg border cursor-pointer bg-blue-400 text-white font-bold border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
            We care about the protection of your data.{" "}
            <a
              href="."
              className="font-medium text-primary-600 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
