
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Search } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-8"
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
      </motion.section>
    </div>
  );
};

const services = [
  {
    title: "Elinstallationer",
    description: "Professionella elinstallationer för hem och företag med fokus på säkerhet och kvalitet.",
    icon: <Zap size={24} />,
    features: [
      "Kompletta elinstallationer för nybyggnation",
      "Renovering av befintliga elsystem",
      "Säkerhetscertifierade installationer",
      "Energioptimering och smart styrning"
    ]
  },
  {
    title: "Belysning",
    description: "Moderna belysningslösningar som skapar rätt atmosfär och optimerar energiförbrukningen.",
    icon: <Lightbulb size={24} />,
    features: [
      "LED-belysning för alla miljöer",
      "Intelligent ljusstyrning",
      "Arkitektonisk belysningsdesign",
      "Energieffektiva lösningar"
    ]
  },
  {
    title: "Felsökning",
    description: "Omfattande felsökning och åtgärder för alla typer av elektriska problem.",
    icon: <Search size={24} />,
    features: [
      "Avancerad diagnostik",
      "Termografering",
      "Dokumenterad felsökning",
      "Förebyggande underhåll"
    ]
  },
];

export default Index;
