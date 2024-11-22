import React from "react";
import useLoginController from "./login-controller";

const Login = () => {
  const { onLoginUser, onUpdateUserEmail, onUpdateUserPassword } =
    useLoginController();

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          onChange={(e) => onUpdateUserEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={(e) => onUpdateUserPassword(e.target.value)}
        />

        <div className="text-center md:text-center">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            onClick={onLoginUser}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
