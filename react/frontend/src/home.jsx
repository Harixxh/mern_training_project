import React from "react";
import './home.css'
import { GrGithub } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assest/harish.jpg"

function Home(){
    return(
        <>
      <section id="home" style={{ minHeight: '100vh'}}>
            <motion.div 
                className="home"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="heading"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    HARISH
                </motion.h2>
              <div className="nav">
                <motion.a  
                    href="#home"
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >Home</motion.a>
                <motion.a 
                    href="#about"
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >About</motion.a>
                <motion.a 
                    href="#skills"
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >Skills</motion.a>
                <motion.a 
                    href="#projects"
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >Projects</motion.a>
                <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >Contact</motion.a>
              </div>
            </motion.div>

            <div className="box">
                <motion.div 
                    className="box1"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div 
                        className="logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <motion.a 
                            className="lin" 
                            href="https://github.com"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                        > 
                            <GrGithub /> 
                        </motion.a>
                        <motion.a 
                            className="lik" 
                            href="https://leetcode.com"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                        >  
                            <SiLeetcode />  
                        </motion.a>
                        <motion.a 
                            className="link" 
                            href="https://linkedin.com"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                        >   
                            <FaLinkedin /> 
                        </motion.a>
                    </motion.div>
                    <motion.img 
                        className="img" 
                        src={img} 
                        alt="harish"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

                <motion.div 
                    className="box2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.h3 
                        className="subheading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        👋 Hello, I'm Harish
                    </motion.h3>
                    <motion.p 
                        className="para"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        A passionate web developer with expertise in creating dynamic and user-friendly websites. I specialize in front-end development using React.js and have a strong foundation in HTML, CSS, and JavaScript. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
                    </motion.p>
                </motion.div>
            </div>
        </section>

        <section id="about" style={{ minHeight: '100vh', color:'white', padding: '80px 0' }}>
            <motion.h1 
                className="head"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            > 
                ABOUT ME
            </motion.h1>

            <div className="box">
                <motion.div 
                    className="box2"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="para">
                        I am Harish, a dedicated and enthusiastic web developer with a passion for crafting engaging digital experiences. With a solid foundation in front-end technologies such as HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly websites using React.js. My journey in web development has been fueled by a desire to create visually appealing and functional web applications that meet user needs. I thrive in collaborative environments and am always eager to learn new skills and stay updated with the latest industry trends. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and connecting with fellow developers.
                    </p>
                </motion.div>

                <motion.div 
                    className="box1"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.img 
                        className="img" 
                        src={img} 
                        alt="harish"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </section>
        </>
    )
}
export default Home;