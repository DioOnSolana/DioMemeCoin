import { motion } from "framer-motion";


export default function Launch(){
  return (
    <motion.div className="z-0 min-h-screen text-black flex justify-center items-center px-4 bg-cover bg-center text-white" initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}>

      <div style={{ fontFamily: "playfair display, serif" }}  className="flex flex-col items-center">
        <div><h1 className="text-[60px]">CA : 4KcVafdNi33n6LmuQzvA7xNFb8zZyJxLHCsaFeo3pump </h1></div>
      </div>
    </motion.div>
  )
}
