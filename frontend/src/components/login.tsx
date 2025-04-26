import { useState } from "react";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5173/login', {
                username,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <>
        <div className="bg-blue-300 p-10 rounded-3xl shadow-lg w-80 sm:w-96">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Login</h2>

            <form className="space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2">Username: </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Password:</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 rounded-full bg-blue-100 focus: outline-none focus:ring-2 focus: ring-yellow-400"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-auto bg-blue-400 hover:bg-blue-100 text-gray-700 py-2 rounded-full font-semibold"
                    >
                        Sign In
                    </button>
                </div>
            </form>

        </div>
        </>
    )
}

export default Login