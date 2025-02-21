import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                login(data.token);
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("❌ Login failed. Try again.");
        }
    };

    return (
        <div style={styles.container}>
            {/* ✅ CSS Animation */}
            <style>
                {`
                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes snowflakeAnimation {
                    0% { transform: translateY(-100vh) translateX(0); opacity: 1; }
                    100% { transform: translateY(100vh) translateX(-50vw); opacity: 0; }
                }
                
                .snowflake {
                    position: absolute;
                    width: 15px;  /* ลูกหิมะใหญ่ขึ้น */
                    height: 15px;
                    background-color: white;
                    border-radius: 50%;
                    opacity: 0.8;
                    animation: snowflakeAnimation 10s linear infinite;
                    filter: blur(1px);
                }
                `}
            </style>
    
            {/* ✅ หิมะตก */}
            {[...Array(20)].map((_, i) => (  // เพิ่มจำนวนหิมะเป็น 20 ลูก
                <div key={i} className="snowflake" style={{
                    top: `${Math.random() * 100}vh`,
                    left: `${Math.random() * 100}vw`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`,  // ให้หิมะตกช้าบ้างเร็วบ้าง
                }}></div>
            ))}
    
            <motion.div 
                style={styles.loginBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={styles.title}>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div style={styles.inputContainer}>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                            style={styles.input}
                        />
                    </div>
                    <motion.button 
                        type="submit"
                        style={styles.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95, backgroundColor: "#6c48d3" }}
                    >
                        Sign In
                    </motion.button>
                </form>
                <p style={styles.signupText}>
                    New here? <a href="/register" style={styles.link}>Sign up now</a>
                </p>
            </motion.div>
        </div>
    );
    
};

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(-45deg, #e0f7ff, #b3e0ff, #80cfff, #4da6ff, #1a8cff)", // ❄️ ไล่โทนสีฟ้า-ขาว
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    loginBox: {
        position: "relative",
        background: "rgba(255, 255, 255, 0.7)", // ❄️ กล่องโปร่งแสงเหมือนไอเย็น
        padding: "3rem",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(173, 216, 230, 0.5)", // ❄️ เงาสีน้ำแข็ง
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        backdropFilter: "blur(15px)", // ❄️ เอฟเฟกต์เบลอแบบน้ำแข็ง
    },
    title: {
        color: "#003366", // ❄️ สีฟ้าน้ำเงินเข้ม
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        textShadow: "0px 0px 10px rgba(0, 51, 102, 0.3)", // ❄️ ข้อความมีไอเย็นเล็กน้อย
    },
    input: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "rgba(240, 248, 255, 0.8)", // ❄️ สีฟ้าจางใส
        color: "#003366", // ❄️ ตัวหนังสือสีเข้ม
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.3s",
    },
    button: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#66b3ff", // ❄️ สีฟ้าสดใส
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 10px rgba(102, 179, 255, 0.5)", // ❄️ เงาสีฟ้าน้ำแข็ง
    },
    signupText: {
        color: "#003366", // ❄️ สีฟ้าเข้ม
        marginTop: "1rem",
        fontSize: "0.9rem",
    },
    link: {
        color: "#1a8cff", // ❄️ ฟ้าอ่อนสดใส
        textDecoration: "none",
        fontWeight: "bold",
        transition: "color 0.3s",
    },
};


export default Login;
