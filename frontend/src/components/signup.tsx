import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../css/signup.module.css";

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState<string | number>('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit =  async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(gender === ""){
            alert("Please complete all fields");
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', {
                email,
                password,
                name,
                gender,
                age,
            });
            console.log(response.data);
            alert("Sign up successful. Redirecting you to login");
            navigate('/login');
        } catch(err: any) {
            if(err.response && err.response.status === 400) {
                alert("This user already exists. Redirecting you to login");
                navigate('/login');
            } else {
                console.log(err);
            }
        }
    };

    return (
        <>
            <div className="bg-blue-300 p-8 rounded-3xl shadow-lg w-96 sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
                        <input 
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 mb-5 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            id="email"
                            type="text"
                            className="w-full px-4 py-2 mb-5 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className={styles.genderage}>
                            <div className={styles.textInput}>
                                <label htmlFor="gender" className="w-fit block text-gray-700 mb-2">Gender:</label>
                                <select 
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-fit px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                                >
                                        <option value="" disabled hidden>Select</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.textInput}>
                                <label htmlFor="age" className="w-fit block text-gray-600 mb-2">Age</label>
                                <input
                                    id="age"
                                    type="text"
                                    className="w-1/2 px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                />
                            </div>
                            
                        </div>

                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <input 
                            id="password"
                            type="password"
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