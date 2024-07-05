import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/LuckasImageProfile.jpg"
import {delay, motion, transform} from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: { x:0, opacity: 1, transition: {duration: 0.6, delay}}
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl sm:pb-16 sm:text-4xl font-thin tracking-tight lg:mt-12 lg:text-5xl">Luckas Matías Reyes Gómez</motion.h1>
                <div class="inline-flex flex-col sm:text-left h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="leading-tight animate-text-slide-3 [&_li]:block">
                  <motion.li variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-4xl tracking-tight text-transparent flex space-x-2">Software Engineer</motion.li>
                  <motion.li variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-4xl tracking-tight text-transparent flex space-x-2">Data Engineer</motion.li>
                  <motion.li variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-4xl tracking-tight text-transparent flex space-x-2">ML Engineer</motion.li>
                  <motion.li aria-hidden="true" variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-4xl tracking-tight text-transparent flex space-x-2">Software</motion.li>
                  </ul>
                </div>
                <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.2}} className="rounded-2xl max-w-xl rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-white/30" src={profilePic} alt="Luckas Matías Reyes Gómez"/>
            </div>
        </div>
       </div>
    </div>
  )
} 

export default Hero;