import React from 'react';

const LoginPage = () => (
  <div className="min-h-screen  flex items-start justify-center">
    <div className="w-full max-w-md mt-32 p-4">
      <h2 className="text-2xl font-semibold text-white mb-6 text-start">Sign In</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-[#9E9E9E] font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-1 text-white bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-[#9E9E9E] font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 mt-1 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-32 py-2 px-4 bg-[#24cfa6] text-black  rounded-md hover:bg-teal-600 transition"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          Don't have an account?{' '}
          <a href="/register" className="text-[#24cfa6] hover:underline mb-4">
            Sign up
          </a>
        </p>

      </div>
    </div>
  </div>
);

export default LoginPage;
