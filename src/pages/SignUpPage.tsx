import { useState } from "react";

type FormData = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
};

type Errors = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
};

const SignUpPage = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Errors>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordStrength, setPasswordStrength] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name as keyof FormData, value);
    };

    const validateField = (name: keyof FormData, value: string) => {
        let error = '';
        if (name === 'email' && value) {
            error = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email format' : '';
        }
        if (name === 'phoneNumber' && value) {
            error = !/^\d{10}$/.test(value) ? 'Invalid phone number (10 digits required)' : '';
        }
        if (name === 'password' && value) {
            error = value.length < 8 ? 'Password must be at least 8 characters long' : '';
            setPasswordStrength(value.length >= 12 ? 'Strong' : value.length >= 8 ? 'Medium' : 'Weak');
        }
        if (name === 'confirmPassword' && value) {
            error = value !== formData.password ? 'Passwords do not match' : '';
        }
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!Object.values(errors).some(error => error !== '')) {
            console.log(formData);
        } else {
            alert('Please correct the errors before submitting.');
        }
    };

    return (
        <div className="flex items-center justify-center bg-transparent">
            <div className="w-[600px] bg-transparent rounded-xl shadow-2xl overflow-hidden px-8 pt-2 pb-8">
                <h2 className="text-center font-h1 text-4xl font-extrabold text-gray-200 mb-4">
                    Sign Up
                </h2>
                <p className="text-center text-md text-gray-200 mb-4">
                    Create your ... account
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
                                placeholder="Last Name"
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                            >
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                placeholder="First Name"
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                            >
                                First Name
                            </label>
                        </div>
                        <div className="relative flex-1">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                placeholder="Last Name"
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                            />
                            <label
                                htmlFor="lastName"
                                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                            >
                                Last Name
                            </label>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Email Address"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                        >
                            Email Address
                        </label>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            placeholder="Phone Number"
                            pattern="\d{10}"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                        />
                        <label
                            htmlFor="phoneNumber"
                            className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                        >
                            Phone Number
                        </label>
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                    </div>

                    <div className="flex space-x-6">
                        <div className="relative flex-1">
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
                            {formData.password && (
                                <p className={`text-xs mt-1 ${passwordStrength === 'Strong' ? 'text-green-500' :
                                    passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                                    }`}>
                                    Strength: {passwordStrength}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                placeholder="Confirm Password"
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-200 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 text-base"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm"
                            >
                                Confirm Password
                            </label>
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-gray-200 text-lg font-semibold transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center text-gray-300 mt-6 text-sm">
                    Already have an account?
                    <a className="text-purple-300 hover:underline pl-2" href="/login">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;