import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {Ritovan_profile_picture} from "../assets"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col md:flex-row items-center md:items-start gap-10'>
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className='w-full md:w-1/3'
        >
          <img 
            src={Ritovan_profile_picture} // Replace with your image path
            alt="Profile"
            className='w-[300px] h-[300px] rounded-2xl object-cover mx-auto'
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.1, 0.75)}
          className='w-full md:w-2/3'
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I am a dedicated app and software developer with a solid foundation in computer science, 
            skilled in languages like C, C++, Java, and Kotlin. 
            I am currently expanding my expertise in backend technologies, focusing on 
            Node.js, Express.js, and related frameworks to create scalable and efficient solutions. 
            Known for my quick learning ability and strong collaborative approach, 
            I aim to develop impactful, real-world applications that prioritize user experience and reliability.
          </motion.p>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");