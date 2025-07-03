import { motion } from "framer-motion";

export default function Tokenomics() {
  return (
    <motion.div
      className="z-0 min-h-screen text-black flex justify-center items-center px-4 bg-cover bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col md:flex-row text-white space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Block */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-[90%] text-center md:text-left">
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-[36px] md:text-[48px] mb-4"
            >
              Token Info
            </h1>
            <div
              style={{ fontFamily: "Spectral, serif" }}
              className="flex flex-col text-[16px] md:text-[20px] space-y-4"
            >
              <p><strong>Name</strong> : Dio On Solana</p>
              <p><strong>Ticker</strong> : $DIO</p>
              <p>
                <strong>Description</strong> : $DIO is a Solana-based meme coin inspired by the iconic villain Dio Brando from JoJo&apos;s Bizarre Adventure.
                But it&apos;s not just another token — it&apos;s a stand-powered movement built on pure meme energy, cult vibes, and community-first expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-[90%] text-center md:text-left">
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-[36px] md:text-[48px] mb-4"
            >
              Tokenomics
            </h1>
            <div
              style={{ fontFamily: "Spectral, serif" }}
              className="flex flex-col text-[16px] md:text-[20px] space-y-4"
            >
              <p><strong>Launch</strong> : Pump.fun</p>
              <p><strong>Total Supply</strong> : 1,000,000,000 $DIO</p>
              <p><strong>LP</strong> : Locked Automatically by Pump.fun</p>
              <p><strong>Tax</strong> : 0% Buy and Sell</p>
              <p><strong>Mint Authority</strong> : Revoked</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
