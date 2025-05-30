import { useState } from "react";
import { login } from '../functions/authService';

type FormData = {
    username: string;
    password: string;
};

type Errors = {
    username: string;
    password: string;
};

const LoginPage = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState<Errors>({
        username: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });  // Clear any existing errors
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setErrors({
                username: formData.username ? '' : 'Username is required',
                password: formData.password ? '' : 'Password is required',
            });
            return;
        }

        try {
            const response = await login(formData.username, formData.password);

            if (response.success) {
                sessionStorage.setItem('authToken', response.token!);
                alert('Login successful!');
            } else {
                alert(response.message || 'Login failed');
            }
        } catch (error) {
            console.error("Error during login submission:", error);
            alert('An error occurred during login. Please try again.');
        }
    };


    return (
        <div className="flex items-center justify-center h-full p-6">
            <div className="flex items-center justify-center bg-transparent">
                <div className="w-[600px] bg-transparent rounded-xl shadow-2xl overflow-hidden p-12">
                    <h2 className="text-center font-h1 text-4xl font-extrabold text-gray-200 mb-6">
                        Login
                    </h2>
                    <p className="text-center text-lg text-gray-200 mb-8">
                        Login to your Account
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Username"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                                />
                                <label
                                    htmlFor="username"
                                    className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                                >
                                    Username
                                </label>
                                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="Password"
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                            >
                                Password
                            </label>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-gray-200 text-lg font-semibold transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center text-gray-300 mt-6 text-sm">
                        Don't have an account?
                        <a className="text-purple-300 hover:underline pl-2" href="/signup">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
