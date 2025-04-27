import { useState } from "react";
import styles from "../css/verification.module.css"
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Verification = () => {
    const [ code, setCode ] = useState('');
    const location = useLocation();
    const initialEmail = location.state?.email || '';
    const [ email, setEmail ] = useState(initialEmail);  

    const handleVerify = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/verification', {
                email,
                code,
            });
            alert(response.data.message);
            // navigate('/nextpage');
        } catch (err: any) {
            if(err.response && err.response.status === 400) {
                alert(err.response.data.error);
            } else {
                console.error(err);
                alert("Unexpected error");
            }
        }
    };

    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.title}>Confirm Identity</div>
                <form onSubmit={handleVerify} className={styles.verifyContainer}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 my-2">Email:</label>
                        <input
                            id="email"
                            type="text"
                            className="w-xl px-4 py-2 mb-5 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            value={ email }
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your .edu email"
                        />

                        <label htmlFor="code" className="block text-gray-700 mb-2">Verification Code:</label>
                        <input
                            id="code"
                            type="text"
                            className="w-1/3 px-4 py-2 rounded-full bg-blue-100 ring-2-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                            value={ code }
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="6-digit code"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={styles.verifyButton}
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Verification;