
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Tjanster = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Våra Tjänster</h1>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Elinstallationer</h2>
                <img 
                  src="/lovable-uploads/087c8f4b-ebbf-406a-ac4a-7d113e00652a.png"
                  alt="Elinstallation"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Vi erbjuder professionella elinstallationer för både hem och företag med högsta kvalitet och säkerhet. Våra certifierade elektriker har omfattande erfarenhet av alla typer av elinstallationer, från mindre reparationer till kompletta installationer i nybyggnationer.
                </p>
                <p className="text-gray-600">
                  Med vår expertis inom modern elteknik och energieffektiva lösningar hjälper vi dig att skapa en säker och hållbar elektrisk miljö. Vi följer alltid gällande regelverk och säkerhetsstandarder för att garantera högsta kvalitet i varje installation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Belysningslösningar</h2>
                <img 
                  src="/lovable-uploads/570be9d2-ef74-41f1-bb53-96ac47a580f7.png"
                  alt="Belysningsdesign"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Rätt belysning skapar inte bara rätt atmosfär utan bidrar också till en bättre arbetsmiljö och energieffektivitet. Vi specialiserar oss på moderna belysningslösningar som kombinerar funktion med design. Från arkitektonisk belysning till energioptimerade system för industrier och kontor.
                </p>
                <p className="text-gray-600">
                  Våra lösningar omfattar LED-belysning, styrningssystem och smart belysning som kan anpassas efter dina specifika behov och önskemål. Vi hjälper dig genom hela processen från design till installation och programmering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service och Underhåll</h2>
                <img 
                  src="/lovable-uploads/20587093-92ee-459a-9191-f0b9276946d3.png"
                  alt="Elservice"
                  className="w-full rounded-lg mb-6 h-[300px] object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Förebyggande underhåll är nyckeln till en säker och välfungerande elanläggning. Vi erbjuder omfattande service- och underhållsprogram anpassade efter dina behov. Med regelbunden översyn kan vi identifiera potentiella problem innan de utvecklas till allvarliga fel.
                </p>
                <p className="text-gray-600">
                  Vår serviceavdelning står alltid redo att hjälpa dig med akuta problem och planerat underhåll. Vi dokumenterar alla åtgärder och ger rekommendationer för framtida förbättringar av din elanläggning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tjanster;
