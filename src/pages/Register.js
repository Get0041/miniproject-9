import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { fullName, email, password });
      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("❌ Error registering. Please try again.");
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
          width: 15px; /* ลูกหิมะใหญ่ */
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
          animationDuration: `${5 + Math.random() * 5}s`, // หิมะตกช้าเร็วต่างกัน
        }}></div>
      ))}

      <motion.div
        style={styles.registerBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
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
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
);
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(-45deg, rgb(230, 244, 255), rgb(180, 220, 255), rgb(150, 200, 255), rgb(200, 230, 255), rgb(220, 240, 255))", // ❄️ เปลี่ยนเป็นโทนฟ้าขาวแบบหิมะ
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  registerBox: {
    position: "relative",
    background: "rgba(240, 248, 255, 0.8)", // ❄️ กล่องฟ้าอ่อนโปร่งใสเหมือนน้ำแข็ง
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(135, 206, 250, 0.5)", // ❄️ เปลี่ยนเงาเป็นสีฟ้าอ่อนแบบเย็นๆ
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#003366", // ❄️ เปลี่ยนเป็นฟ้าเข้มเย็นๆ
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textShadow: "0px 0px 10px rgba(0, 51, 102, 0.3)", // ❄️ เงาฟ้าอ่อนดูเย็นขึ้น
  },
  inputContainer: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#e0f7ff", // ❄️ ฟ้าขาวแบบหิมะ
    color: "#003366", // ❄️ ฟ้าเข้มอ่านง่าย
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#007acc", // ❄️ ปุ่มฟ้าสดใส
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 122, 204, 0.5)", // ❄️ เงาฟ้าอ่อนสบายตา
  },
};

export default Register;
