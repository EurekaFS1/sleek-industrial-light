
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const KraftBelysning = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Kraft & Belysning</h1>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industriell Kraftförsörjning</h2>
                <img 
                  src="/lovable-uploads/087c8f4b-ebbf-406a-ac4a-7d113e00652a.png"
                  alt="Kraftanläggning"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Vi erbjuder omfattande lösningar för industriell kraftförsörjning, inklusive installation och underhåll av högspänningsanläggningar, transformatorstationer och ställverk. Våra erfarna tekniker säkerställer att din kraftförsörjning är pålitlig, effektiv och framtidssäkrad.
                </p>
                <p className="text-gray-600">
                  Med modern teknik och expertis inom energioptimering hjälper vi dig att minimera energiförluster och maximera driftsäkerheten i din anläggning. Vi utför regelbundna kontroller och underhåll för att säkerställa optimal prestanda.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professionell Belysningsdesign</h2>
                <img 
                  src="/lovable-uploads/570be9d2-ef74-41f1-bb53-96ac47a580f7.png"
                  alt="Belysningsdesign"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Vår expertis inom belysningsdesign omfattar allt från arkitektonisk belysning till funktionell arbetsplatsbelysning. Vi skapar skräddarsydda belysningslösningar som förbättrar både estetik och funktionalitet i din miljö, samtidigt som vi optimerar energiförbrukningen.
                </p>
                <p className="text-gray-600">
                  Med avancerade styrningssystem och modern LED-teknik kan vi skapa dynamiska belysningslösningar som anpassar sig efter dagens rytm och olika aktiviteter. Vi hjälper dig att välja rätt produkter och system för dina specifika behov.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Smart Energihantering</h2>
                <img 
                  src="/lovable-uploads/b9de3725-a8fb-4f26-9f4b-1b527790907e.png"
                  alt="Smart energihantering"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Moderna fastigheter kräver smarta lösningar för energihantering. Vi implementerar system för övervakning och styrning av energiförbrukning, vilket ger dig full kontroll över din anläggnings energianvändning och möjlighet till betydande kostnadsbesparingar.
                </p>
                <p className="text-gray-600">
                  Våra lösningar inkluderar installation av energimätare, analyssystem och automatiserad styrning som optimerar din energianvändning. Vi erbjuder även rådgivning kring energieffektivisering och hjälper dig att identifiera förbättringsmöjligheter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KraftBelysning;
