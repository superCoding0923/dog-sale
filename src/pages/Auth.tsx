import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(name, email);
    navigate('/search');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[450px]'>
        <h1 className='text-center text-3xl mb-5'>Login</h1>
        <form className='flex flex-wrap flex-col gap-5' onSubmit={handleLogin}>
          <input
            className='p-2 border rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-500'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='p-2 border rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-500'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className='p-3 border rounded-md bg-blue-500 text-white' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;