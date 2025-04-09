// import Image from "next/image";
// import ContactMeImage from "../../../../../../public/ContactMeImage.jpeg";

// const ContactImage = () => {
//   return (
//     <div className="hidden lg:flex justify-center items-center">
//       <Image
//         src={ContactMeImage}
//         alt="Contact Illustration"
//         className="w-full h-auto object-cover rounded-lg"
//       />
//     </div>
//   );
// };

// export default ContactImage;


import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image";
import ContactMeImage from "../../../../../../public/ContactMeImage.jpeg";

const ContactImage = () => {
  return (
    <div className="hidden lg:flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} // Initial state: image starts with low opacity and smaller scale
        animate={{ opacity: 1, scale: 1 }} // Final state: image becomes fully visible and at normal scale
        transition={{ duration: 0.6 }} // Duration of the animation (in seconds)
      >
        <Image
          src={ContactMeImage}
          alt="Contact Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default ContactImage;
