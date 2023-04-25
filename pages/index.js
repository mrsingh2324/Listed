import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import apple from "../public/apple.png";
import google from "../public/google.png";
import { useRouter } from "next/router";

import { useSession, signIn, signOut, getSession } from "next-auth/react"; //detect user is present or not
import { useEffect, useState } from "react";

export default function Home({ session }) {
  const router = useRouter();

  console.log(session);

  return (
    <div className="home">
      <div className="name">
        <h1>Board.</h1>
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
          <h2>Sign in</h2>
          <span className="span-tag">Sign in to your account</span>
          <div className="social">
            <div>
              <a>
                <button
                  className="hover:bg-blue-500 hover:text-white"
                  onClick={() => signIn()}
                >
                  <Image src={google} alt="google" />
                  <span>Sign in with Google</span>
                </button>
              </a>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white">
                <Image src={apple} alt="apple" />
                <span>Sign in with Apple</span>
              </button>
            </div>
          </div>
          <div className="form">
            <form>
              <div>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <a href="" className="forget-pass">
                Forgot password?
              </a>
              <button className="sign-in-btn">Sign in</button>
            </form>
          </div>
          <p className="register-link">
            Don't have an account?{" "}
            <a onClick={() => router.push("/signup")}>Register here</a>
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
