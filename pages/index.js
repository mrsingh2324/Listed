import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import apple from '../public/apple.png';
import google from '../public/google.png';


import { useSession, signIn, signOut, getSession } from "next-auth/react" //detect user is present or not
import { useEffect, useState } from "react";

export default function Home({session}) {
  
  
  
  console.log(session);

  return (
    <div className="home">
      <div className="name">
        <h1>Board.</h1>
      </div>
      <div className="authenticate ">
        <div className="content">
          <h2>Sign in</h2>
          <span className="span-tag">Sign in to your account</span>
          <div className="social">
            <div>
              <a>
                <button className="hover:bg-blue-500 hover:text-white" onClick={()=>signIn()}>
                <Image src={google} alt="google" />
                <span>Sign in with Google</span>
                </button>
                </a>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white" >
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
            Dont't have an account? <a href="">Register here</a>
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


