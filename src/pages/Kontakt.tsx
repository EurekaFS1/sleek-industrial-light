
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Kontakt = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Kontakta Oss</h1>
            <p className="text-lg text-gray-600">
              Vi finns här för att hjälpa dig med alla dina elfrågor. Kontakta oss för en kostnadsfri konsultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Skicka en förfrågan</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Namn
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-elektrikerna-green focus:border-elektrikerna-green"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-post
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-elektrikerna-green focus:border-elektrikerna-green"
                    placeholder="Din e-postadress"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meddelande
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-elektrikerna-green focus:border-elektrikerna-green h-32"
                    placeholder="Beskriv ditt ärende"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-elektrikerna-green text-white px-6 py-3 rounded-lg font-medium hover:bg-elektrikerna-green/90 transition-colors duration-200"
                >
                  Skicka meddelande
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-elektrikerna-green p-3 bg-elektrikerna-green/5 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 p-6 rounded

-lg mt-8">
                <h3 className="text-lg font-semibold mb-4">Jour & Akutservice</h3>
                <p className="text-gray-600 mb-4">
                  Vi erbjuder jour- och akutservice dygnet runt, alla dagar i veckan.
                </p>
                <div className="flex items-center gap-2 text-elektrikerna-green font-medium">
                  <Phone size={20} />
                  <span>020-XXXXXX</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const contactInfo = [
  {
    title: "Ring oss",
    content: "020-XXXXXX\nMån-Fre: 07:00-16:00",
    icon: <Phone size={24} />,
  },
  {
    title: "Maila oss",
    content: "info@020elektrikerna.se\nSvar inom 24 timmar",
    icon: <Mail size={24} />,
  },
  {
    title: "Besök oss",
    content: "Exempel Gatan 123\n123 45 Stockholm",
    icon: <MapPin size={24} />,
  },
  {
    title: "Öppettider",
    content: "Måndag-Fredag: 07:00-16:00\nLördag-Söndag: Stängt",
    icon: <Clock size={24} />,
  },
];

export default Kontakt;
