import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full flex items-center justify-center lg:min-h-screen md:min-h-screen py-8">
     {/* BoX */}
     <div className="h-full  flex flex-col gap-6 md:flex-row  lg:flex items-center justify-center shadow-2xl rounded-md ">
       {/* image container */}
       <div className="w-full lg:w-1/2 ">
        <Image src={'/loginBg.png'} alt="login" height={300} width={300} className="w-full  object-cover h-[17.5rem] lg:rounded-l-md "/>
      </div>
      {/* singUp container */}
      <div className="w-full lg:w-1/2 lg:h-full h-1/2 flex flex-col gap-6 text-sm text-center px-4 py-2">
      <h1 className="text-2xl lg:text-4xl font-bold text-center">WELCOME!</h1>
      <p>Login to your account or create a new one using social login.</p>
      <button className="flex gap-4 justify-center px-4 py-2 ring-1 ring-red-400 rounded-md">
        <Image src={'/google.png'} height={20} width={20} alt="google image"/>
        <span>Sign in with google</span>
      </button>

      <button className="flex gap-4 justify-center px-4 py-2 ring-1 ring-red-400 rounded-md w-9rem">
        <Image src={'/facebook.png'} height={22} width={22} alt="facebook logo image"/>
        <span>Sign in with Facebok</span>
      </button>
      <p>Have a Problem? <Link href={'/'} className="underline">Contact us</Link></p>
      </div>
     </div>
    </div>
  );
};

export default LoginPage;
