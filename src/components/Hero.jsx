import { motion } from "framer-motion";
import { styles } from "../styles";
import { Ritovan_profile_picture } from "../assets";
import Terminal from "./Terminal";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div
        className={`w-full max-w-7xl mx-auto ${styles.paddingX} pt-[120px] pb-10 flex flex-col lg:flex-row items-start gap-8`}
      >
        {/* Left column: accent line + intro text + profile photo */}
        <div className="flex flex-row items-start gap-5 w-full lg:flex-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Ritovan</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop mobile apps <br className="sm:block hidden" />
                and web applications
              </p>
            </div>

            {/* Profile photo below the intro */}
            <motion.img
              src={Ritovan_profile_picture}
              alt="Ritovan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[280px] lg:h-[280px] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right column: Terminal — visible on all screen sizes */}
        <div className="w-full lg:flex-[1.4] mt-2 lg:mt-5">
          <Terminal
            interactive
            terminalStyle="mac"
            fontSize="text-sm"
            height={isMobile ? 360 : 520}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
