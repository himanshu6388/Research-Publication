import React, { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Replace with actual registration logic
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    alert('Registered successfully!');
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      
      <div className="w-full max-w-md  p-8">
        <h2 className="text-2xl font-semibold text mb-6 text-white center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#9e9e9e]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#9e9e9e]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2  cursor-text text-white   bg-[#1D1D1D] rounded  border-none  focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#9e9e9e]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2  cursor-text text-white   bg-[#1D1D1D] rounded  border-none  focus:outline-none"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#9e9e9e]">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2  cursor-text text-white   bg-[#1D1D1D] rounded  border-none  focus:outline-none"
            >
              <option value="" disabled>Select your role</option>
              <option value="Author">Author</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-[100px] py-2 px-6 bg-teal-500 text-black font-semibold rounded hover:bg-teal-700 focus:outline-none"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-teal-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
