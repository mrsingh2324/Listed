import Head from "next/head";
// import styles from "@/styles/Signup.module.css";
import Image from "next/image";
import apple from "../public/apple.png";
import google from "../public/google.png";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Signup({ session }) {
  const router = useRouter();

  console.log(session);

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="name flex items-center justify-center md:w-1/2 basis-[30%]">
        <h1 className="text-5xl font-bold ">Board.</h1>
      </div>
      <div className="authenticate ">
        <div className="content">
          <h1 className="flex justify-center gap-5 items-center mt-2 italic bg-white rounded-lg p-2">
            Got to dashboard without loggin in{" "}
            <button
              className="bg-blue-600 rounded p-1 font-bold "
              onClick={() => router.push("/dashboard")}
            >
              continue
            </button>
          </h1>
          <h2 className="text-3xl font-bold mb-3">Sign up</h2>
          <span className="block text-gray-500 mb-6">Create your account</span>
          <div className="social mb-6">
            <div className="mb-2">
              <a>
                <button
                  className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-blue-500 hover:text-white"
                  onClick={() => signIn()}
                >
                  <Image src={google} alt="google" width={24} height={24} />
                  <span className="ml-2">Sign up with Google</span>
                </button>
              </a>
            </div>
            <div>
              <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-blue-500 hover:text-white">
                <Image src={apple} alt="apple" width={24} height={24} />
                <span className="ml-2">Sign up with Apple</span>
              </button>
            </div>
          </div>
          <div className="form">
            <form>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button className="sign-up-btn block w-full p-2 bg-black rounded text-white font-bold">
                Sign up
              </button>
            </form>
          </div>
          <p className="login-link flex justify-center gap-5 py-3">
            Already have an account?{" "}
            <a onClick={() => router.push("/")}>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
