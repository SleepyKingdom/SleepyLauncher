import React from 'react';

type Props = { onLogin: () => void };

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      await window.api.loginWithMicrosoft();
      onLogin();
    } catch (e) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">SleepyLauncher</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleLogin}
      >
        Mit Microsoft anmelden
      </button>
    </div>
  );
};

export default LoginPage;
