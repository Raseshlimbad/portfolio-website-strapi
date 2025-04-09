
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
  website: string;
}

const ContactInfo = ({ phone, email, address, website }: ContactInfoProps) => {
  return (
    <motion.div
      className="flex flex-col space-y-6 border-gray-200 md:pr-6"
      initial={{ opacity: 0, x: -100 }}  // Initial position (off-screen)
      animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and position
      transition={{ duration: 0.8 }}     // Duration of the fade and slide animation
    >
      <h3 className="text-2xl font-bold text-indigo-700">Contact Information</h3>
      <p className="text-gray-600">Feel free to reach out via phone, email, or visit us at our location.</p>
      
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Phone size={20} className="text-indigo-500" />
        <p className="text-gray-700">{phone}</p>
      </motion.div>

      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Mail size={20} className="text-indigo-500" />
        <p className="text-gray-700">{email}</p>
      </motion.div>

      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <MapPin size={20} className="text-indigo-500" />
        <p className="text-gray-700">{address}</p>
      </motion.div>

      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Globe size={20} className="text-indigo-500" />
        <a href={website} className="text-indigo-600 hover:underline">{website}</a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
