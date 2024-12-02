import React from "react";
import SignupForm from "../ui/SignupForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="flex justify-center md:h-screen">
      <div className="flex flex-col items-center w-full max-w-[400px]">
        <h1 className="my-6 w-full text-center text-2xl">サインアップページ</h1>
        <SignupForm />
        <div className="flex flex-col mt-8 text-center">
          <Link
            href="/login"
            className="bg-blue-500 text-white rounded-lg px-8 py-2 hover:bg-blue-400 focus-visible:outline-offset-2"
          >
            ログインページ
          </Link>
          <Link
            href="/"
            className="bg-green-500 text-white rounded-lg px-8 py-2 mt-2 hover:bg-green-400 focus-visible:outline-offset-2"
          >
            ホーム
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
