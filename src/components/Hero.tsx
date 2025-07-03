import { Twitter, Send } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-0 min-h-screen text-white flex justify-center items-center px-4 bg-cover bg-center flex-col overflow-hidden">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        playsInline
      >
        <source src="/Dio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div
        style={{ fontFamily: "Playfair Display, serif" }}
        className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] text-center flex flex-col justify-center items-center"
      >
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold leading-tight">
          DIO ON SOLANA
        </h1>

        <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px] mt-2">
          The villain of memecoins has arrived. No mercy. Only mayhem.
        </p>

        <h1 className="mt-4 text-[14px] sm:text-[16px]">CA: LAUNCHING ON JULY 15TH</h1>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-6">
          <a
            href="https://t.me/DioOnSolana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <Send size={28} />
          </a>
          <a
            href="https://x.com/DioOnSolana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
