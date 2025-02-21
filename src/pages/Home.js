import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div style={styles.container}>
      <style>
        {`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes snowAnimation {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
  
        .snowflake {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: snowAnimation 5s linear infinite;
          pointer-events: none;
        }
        `}
      </style>
      {[...Array(30)].map((_, i) => (
        <div key={i} className="snowflake" style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 3}s`, // เปลี่ยนความเร็วการตก
          width: `${Math.random() * 5 + 5}px`, // ขนาดหิมะ
          height: `${Math.random() * 5 + 5}px`, // ขนาดหิมะ
        }}></div>
      ))}
      <motion.div
        style={styles.homeBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>ยินดีต้อนรับ ร้านค้า</h1>
        <p style={styles.subtitle}>คุณจะมองหาสนค้าที่ร้านเรามีพร้อมทุกอย่าง</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" style={styles.button}>เตรียมตัว</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(-45deg, #cceeff, #99ccff, #6699cc, #336699, #003366)",
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeBox: {
    position: "relative",
    background: "rgba(200, 230, 255, 0.8)",
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(173, 216, 230, 0.5)",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#003366",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "0px 0px 10px rgba(0, 51, 102, 0.3)",
  },
  subtitle: {
    color: "#336699",
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#66b3ff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(102, 179, 255, 0.5)",
  },
};


export default Home;
