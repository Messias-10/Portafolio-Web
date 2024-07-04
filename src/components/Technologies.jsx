import { RiReactjsLine } from "react-icons/ri"
import { DiPython } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { DiMsqlServer } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import {motion} from "framer-motion"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 whileInView={{ opacity: 1, y:0 }} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Techonologies</motion.h2> 
        <div className="flex overflow-hidden group">
        <div className="flex space-x-5 animate-loop-scroll group-hover:paused">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGolang className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJsBadge className="text-7xl text-[color:#f0db4f]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className="text-7xl text-[color:#0db7ed]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMsqlServer className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-cyan-400"/>
            </div>
            {/* Espacio adicional a la derecha */}
            <div className="w-5"></div>
        </div>
        <div className="flex space-x-5 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGolang className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJsBadge className="text-7xl text-[color:#f0db4f]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className="text-7xl text-[color:#0db7ed]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMsqlServer className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-cyan-400"/>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Technologies
