import { useState } from "react";
import axios from "axios";
import styles from "../css/signup.module.css";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =  async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                username,
                password,
            });
            console.log(response.data);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="bg-blue-300 p-8 rounded-3xl shadow-lg w-96 sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 mb-5 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            placeholder="Enter your email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <div className={styles.genderage}>
                            <div className={styles.textInput}>
                                <label className="w-fit block text-gray-700 mb-2">Gender:</label>
                                <select 
                                    name="gender" 
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-fit px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                                >
                                        <option value="none" selected disabled hidden>Select</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.textInput}>
                                <label className="w-fit block text-gray-600 mb-2">Age</label>
                                <input
                                    type="text"
                                    className="w-1/2 px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e)=>setAge(e.target.value)}
                                />
                            </div>
                            
                        </div>

                        <label className="block text-gray-700 mb-2">Password:</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 mb-5 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
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
                </form>
            </div>
        </>
    )
};

export default SignUp;