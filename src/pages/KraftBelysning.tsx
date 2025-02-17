
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Lightbulb, Zap, Sun, Battery } from "lucide-react";

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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Kraft & Belysning</h1>
            <p className="text-lg text-gray-600">
              Effektiva och hållbara lösningar för kraft och belysning som möter moderna krav på energieffektivitet och komfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-elektrikerna-green p-3 bg-elektrikerna-green/5 rounded-lg">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-elektrikerna-green" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Våra experttjänster</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <a
              href="/kontakt"
              className="inline-block bg-elektrikerna-green text-white px-8 py-3 rounded-lg font-medium hover:bg-elektrikerna-green/90 transition-colors duration-200"
            >
              Få en kostnadsfri konsultation
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const solutions = [
  {
    title: "Kraftinstallationer",
    description: "Professionella kraftinstallationer för alla typer av fastigheter och anläggningar.",
    icon: <Zap size={24} />,
    features: [
      "Ställverk och transformatorer",
      "Reservkraftsystem",
      "Kraftdistribution",
      "Energimätning",
    ],
  },
  {
    title: "Belysningssystem",
    description: "Moderna och energieffektiva belysningslösningar för optimal ljussättning.",
    icon: <Lightbulb size={24} />,
    features: [
      "LED-belysning",
      "Styrningssystem",
      "Arkitektonisk belysning",
      "Nödbelysning",
    ],
  },
  {
    title: "Solenergi",
    description: "Kompletta solcellslösningar för en hållbar energiförsörjning.",
    icon: <Sun size={24} />,
    features: [
      "Solcellspaneler",
      "Batterilager",
      "Smart styrning",
      "Övervakning",
    ],
  },
  {
    title: "Energilagring",
    description: "Moderna system för energilagring och optimering av energianvändning.",
    icon: <Battery size={24} />,
    features: [
      "Batterisystem",
      "Laddningsstationer",
      "Energiövervakning",
      "Smart styrning",
    ],
  },
];

const services = [
  {
    title: "Projektering",
    description: "Vi hjälper dig planera och designa den optimala kraft- och belysningslösningen för dina behov.",
  },
  {
    title: "Installation",
    description: "Professionell installation av alla typer av kraft- och belysningssystem.",
  },
  {
    title: "Service & Underhåll",
    description: "Regelbunden service och underhåll för att säkerställa optimal funktion och livslängd.",
  },
];

export default KraftBelysning;
