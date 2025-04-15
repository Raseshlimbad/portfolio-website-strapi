import StrapiImageRenderer from "@/components/global/StrapiImageRenderer";
import { MapperContactLeftSection } from "@/types/HomePage/ContactSectionTypes";
import { motion } from "framer-motion";

interface ContactInfoProps {
  data: MapperContactLeftSection;
}

const ContactInfo = ({ data }: ContactInfoProps) => {

  return (
    <motion.div
      className="flex flex-col space-y-6 border-gray-200 md:pr-6"
      initial={{ opacity: 0, x: -100 }} // Initial position (off-screen)
      animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
      transition={{ duration: 0.8 }} // Duration of the fade and slide animation
    >
      <h3 className="text-2xl font-bold text-indigo-700">{data.title}</h3>
      <p className="text-gray-600">
        {data.subTitle}
      </p>

      {data.contactDetails && data.contactDetails.map((contact) => (
              <motion.div
              key={contact.iconName}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <StrapiImageRenderer
                imageUrl={contact.iconSvg.url}
                altText={contact.iconSvg.alternativeText}
                width={20}
                height={20}
                isSvg={true}
                className ={"text-indigo-500"}
              />
              <p className="text-gray-700">{contact.Text}</p>
            </motion.div>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
