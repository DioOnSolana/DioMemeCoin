import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <motion.div
      className="z-0 min-h-screen text-black flex justify-center items-center px-4 bg-cover bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-8xl py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
          <img src="/img1.webp" alt="DIO 1" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/img2.png" alt="DIO 2" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/img3.jpg" alt="DIO 3" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="/img4.jpg" alt="DIO 4" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </motion.div>
  );
}
