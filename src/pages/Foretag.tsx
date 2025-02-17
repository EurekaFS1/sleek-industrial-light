import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Building, Zap, BarChart, Shield } from "lucide-react";

const Foretag = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Företagslösningar</h1>
            <p className="text-lg text-gray-600">
              Vi erbjuder skräddarsydda ellösningar för företag av alla storlekar. Från kontorsinstallationer till industriella projekt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {businessServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-elektrikerna-green mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Vårt åtagande för företag</h2>
                <p className="text-gray-600 mb-6">
                  Vi förstår att varje företag har unika behov och krav. Vårt team av erfarna elektriker arbetar nära er för att leverera säkra och effektiva lösningar som möter era specifika behov.
                </p>
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-elektrikerna-green mt-1">
                        <Shield size={20} />
                      </div>
                      <span className="text-gray-700">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Företagslösningar"
                  className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                />
              </div>
            </div>
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
              Boka konsultation
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const businessServices = [
  {
    title: "Industriinstallationer",
    description: "Kompletta ellösningar för industrifastigheter och produktionsanläggningar.",
    icon: <Building size={24} />,
  },
  {
    title: "Energioptimering",
    description: "Smarta lösningar för att minska energiförbrukningen och kostnaderna.",
    icon: <BarChart size={24} />,
  },
  {
    title: "Högspänning",
    description: "Installation och underhåll av högspänningssystem.",
    icon: <Zap size={24} />,
  },
  {
    title: "Säkerhetssystem",
    description: "Moderna säkerhetslösningar för att skydda er verksamhet.",
    icon: <Shield size={24} />,
  },
];

const commitments = [
  "24/7 support för akuta ärenden",
  "Skräddarsydda underhållsplaner",
  "Certifierade elektriker med bred kompetens",
  "Dokumentation och uppföljning",
  "Kostnadseffektiva lösningar",
];

export default Foretag;
