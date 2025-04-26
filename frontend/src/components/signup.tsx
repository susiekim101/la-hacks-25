import { useState } from "react";
import axios from "axios";
import styles from "../css/signup.module.css";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');

    return (
        <>
            <div className="bg-blue-300 p-8 rounded-3xl shadow-lg w-96 sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">Sign Up</h2>

                <form>
                    <div>
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            placeholder="Enter your email"
                            value={username}
                        />
                        <label className="block text-gray-700 mb-2">Gender:</label>
                        <select name="gender" className="w-1/2 px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400">
                            <option value="none" selected disabled hidden>Select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignUp;