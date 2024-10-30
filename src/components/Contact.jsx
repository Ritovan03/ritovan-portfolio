import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { leetcode } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending delay
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000); // 1 second delay to simulate sending
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/ritovandasgupta/",
      name: "LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Ritovan03",
      name: "GitHub",
    },
    {
      icon: <img src={leetcode} alt="LeetCode" className="w-6 h-6" />,
      url: "https://leetcode.com/u/Ritovan_Dasgupta/",
      name: "LeetCode",
    },
  ];

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {/* Social Media Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors duration-300 ease-in-out"
                aria-label={`Visit my ${social.name} profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <a
            href="https://docs.google.com/document/d/1HfQkoDFZJhyCFPqShwk-Cu3OcekE9tIHhj-m-2UGkYY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-2 px-4 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[800px] md:h-[650px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
