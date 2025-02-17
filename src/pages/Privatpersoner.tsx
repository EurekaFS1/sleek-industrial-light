
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Shield, Zap, Calculator, Clock } from "lucide-react";

const Privatpersoner = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Elektriker för Privatpersoner</h1>
            <p className="text-lg text-gray-600">
              Vi hjälper dig med alla typer av elarbeten i ditt hem, från mindre installationer till större renoveringar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Elektriker arbete"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">Säkra Hem</h2>
              <p className="text-gray-600">
                Din säkerhet är vår högsta prioritet. Vi utför alla elinstallationer enligt gällande regler och standarder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Elinstallation"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">Modern Teknik</h2>
              <p className="text-gray-600">
                Vi håller oss uppdaterade med den senaste tekniken för att ge dig moderna och energieffektiva lösningar.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-elektrikerna-green mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a
              href="/kontakt"
              className="inline-block bg-elektrikerna-green text-white px-8 py-3 rounded-lg font-medium hover:bg-elektrikerna-green/90 transition-colors duration-200"
            >
              Kontakta oss för en offert
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const benefits = [
  {
    title: "Certifierade Elektriker",
    description: "Våra elektriker är fullständigt certifierade och erfarna.",
    icon: <Shield size={24} />,
  },
  {
    title: "Snabb Service",
    description: "Vi erbjuder snabb service när du behöver det som mest.",
    icon: <Clock size={24} />,
  },
  {
    title: "Fast Pris",
    description: "Vi ger dig ett fast pris innan arbetet påbörjas.",
    icon: <Calculator size={24} />,
  },
  {
    title: "Garanti",
    description: "Alla våra installationer kommer med full garanti.",
    icon: <Zap size={24} />,
  },
];

export default Privatpersoner;
