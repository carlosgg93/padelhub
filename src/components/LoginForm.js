import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../store/userSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const user = { email, password };
    dispatch(loginUserAsync(user));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <form id="loginForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline invalid:focus:ring-red-400 peer"
            id="email"
            type="email"
            placeholder="Email"
            onChange={() => {
              setEmail(document.getElementById('email').value);
            }}
          />
          <p className="text-red-500 text-xs italic hidden peer-invalid:block">Please put a valid email.</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={() => {
              setPassword(document.getElementById('password').value);
            }}
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(ev) => {
              handleSubmit(ev);
            }}
          >
            Log In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
