import Head from "next/head";
// import styles from "@/styles/Signup.module.css";
import Image from "next/image";
import apple from '../public/apple.png';
import google from '../public/google.png';
import { useRouter } from "next/router";

import { useSession, signIn, signOut, getSession } from "next-auth/react" //detect user is present or not
import { useEffect, useState } from "react";

export default function Signin({session}) {
    const router = useRouter()
  
  console.log(session);

  return (
    <div className="signup flex h-screen overflow-hidden">
      <div className="name">
        <h1>Board.</h1>
      </div>
      <div className="authenticate h-screen ">
        <div className="content">
          <h2>Sign up</h2>
          <span className="span-tag">Create your account</span>
          <div className="social">
            <div>
              <a>
                <button className="hover:bg-blue-500 hover:text-white" onClick={()=>signIn()}>
                <Image src={google} alt="google" />
                <span>Sign up with Google</span>
                </button>
                </a>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white" >
                <Image src={apple} alt="apple" />
                <span>Sign up with Apple</span>
              </button>
            </div>
          </div>
          <div className="form">
            <form>
              <div>
                <label htmlFor="">Full name</label>
                <input type="text" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <label htmlFor="">Confirm password</label>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button className="sign-up-btn">Sign up</button>
            </form>
          </div>
          <p className="login-link">
            Already have an account? <a href="" onClick={router.push('/')}>Login here</a>
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
