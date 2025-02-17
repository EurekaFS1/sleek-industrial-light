
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Wrench, Zap, Lightbulb, Search } from "lucide-react";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Våra Tjänster</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-elektrikerna-green p-3 bg-elektrikerna-green/5 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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
        </div>
      </motion.div>
    </div>
  );
};

const services = [
  {
    title: "Elinstallationer",
    description: "Professionella elinstallationer för både hem och företag med högsta säkerhet och kvalitet.",
    icon: <Zap size={24} />,
    features: [
      "Nyinstallationer",
      "Renovering av elsystem",
      "Säkerhetssystem",
      "Energioptimering",
    ],
  },
  {
    title: "Belysning",
    description: "Skapa rätt atmosfär och optimera energiförbrukningen med moderna belysningslösningar.",
    icon: <Lightbulb size={24} />,
    features: [
      "LED-belysning",
      "Styrningssystem",
      "Utomhusbelysning",
      "Arbetsplatsbelysning",
    ],
  },
  {
    title: "Service & Underhåll",
    description: "Förebyggande underhåll och snabb service när problem uppstår.",
    icon: <Wrench size={24} />,
    features: [
      "Periodiskt underhåll",
      "Akut service",
      "Säkerhetskontroller",
      "Dokumentation",
    ],
  },
  {
    title: "Felsökning",
    description: "Effektiv felsökning och åtgärd av elektriska problem.",
    icon: <Search size={24} />,
    features: [
      "Systemanalys",
      "Termografering",
      "Problemlösning",
      "Förebyggande åtgärder",
    ],
  },
];

export default Tjanster;
