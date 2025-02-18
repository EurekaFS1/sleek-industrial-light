
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/lovable-uploads/b9de3725-a8fb-4f26-9f4b-1b527790907e.png" type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="bg-elektrikerna-green/10 text-elektrikerna-green px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">
            Din pålitliga elektriker
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professionell elektriker för 
            <span className="text-elektrikerna-green"> alla behov</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Vi erbjuder kompletta ellösningar för både företag och privatpersoner med fokus på kvalitet och säkerhet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-elektrikerna-green text-white px-8 py-3 rounded-lg font-medium hover:bg-elektrikerna-green/90 transition-colors duration-200"
            >
              Kontakta oss
            </a>
            <a
              href="/tjanster"
              className="bg-white text-elektrikerna-green border border-elektrikerna-green px-8 py-3 rounded-lg font-medium hover:bg-elektrikerna-green/5 transition-colors duration-200"
            >
              Våra tjänster
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
