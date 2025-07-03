import { motion } from "framer-motion";


export default function Footer(){
  return(

    <motion.div className="z-0 h-[15em] text-black flex justify-center items-center px-4 bg-cover bg-center text-white">
      <div className="border-white border-t w-[90%]">
        <div className="flex justify-between">
          <div style={{ fontFamily: "Spectral, serif" }}className="text-[20px] mt-[2em]"><p>&copy;2025DioOnSolana</p></div>
          <div className="flex flex-col mt-[2em]" style={{ fontFamily: "Spectral, serif" }}><a href="https://t.me/DioOnSolana" className="hover:text-yellow-500 transition">Telegram</a>
          <a href="https://x.com/DioOnSolana" className="hover:text-yellow-500 transition">Twitter</a></div>
        </div>
      </div>
    </motion.div>

  )
}