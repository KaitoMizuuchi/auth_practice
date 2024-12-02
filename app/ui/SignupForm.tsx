"use client";

import React, { useActionState } from "react";
import { useFormState } from "react-dom";
import { signUp } from "../lib/actions";

const SignupForm = () => {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useActionState(signUp, initialState);
  return (
    <form action={dispatch} className="w-full">
      <div className="w-full rounded-lg bg-gray-50 pt-6 pb-4 px-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-md border border-gray-200 pl-2 py-2 outline-2"
            name="email"
            placeholder="メールアドレス"
            required
          />
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <div key={error} className="mt-2">
                <p className="text-red-500">{error}</p>
              </div>
            ))}
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block mb-2 text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-md border border-gray-200 pl-2 py-2 outline-2"
            name="password"
            placeholder="パスワード"
            required
          />
          {state.errors?.password &&
            state.errors.password.map((error: string) => (
              <div key={error} className="mt-2">
                <p className="text-red-500">{error}</p>
              </div>
            ))}
        </div>
        <button className="mt-8 w-full rounded-lg bg-blue-500 text-white h-10 hover:bg-blue-400 focus-visible:outline-offset-2">
          サインアップ
        </button>
        <div className="flex h-8 items-end space-x-1">
          {state.message ? (
            <p className="text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default SignupForm;