import { useState } from "react";
import axios from "axios";
import styles from "../css/login.module.css";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5173/api/auth/login', {
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
        <div className="bg-blue-300 p-8 rounded-3xl shadow-lg w-96 sm:w-96">
            <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">Login</h2>

            <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                    <label className="block text-gray-700 mb-2">Username: </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Password:</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 rounded-full bg-blue-100 focus: outline-none focus:ring-1 focus: ring-yellow-400"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className={styles.loginButton}
                    >
                        Sign In
                    </button>
                </div>

                <p className="text-white text-center">———————— OR ————————</p>
                <a href="/signup" className="block text-white visited:text-white text-center my-0">Sign Up</a>

            </form>

        </div>
        </>
    )
}

export default Login