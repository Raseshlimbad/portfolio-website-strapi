import StrapiImageRenderer from "@/components/global/StrapiImageRenderer";
import { MappedFormFields } from "@/types/HomePage/ContactSectionTypes";
import { motion } from "framer-motion";

interface FormFieldProps {
  data: MappedFormFields | MappedFormFields[]; // Accept either single field or array
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

{
  /* <FormField
label="Your Name"
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleChange}
icon={<User size={18} className="text-indigo-400" />}
placeholder="John Doe"
required
/> */
}

const FormField = ({ onChange, required = false, data }: FormFieldProps) => {
  // Convert single item to array if needed
  const fieldsArray = Array.isArray(data) ? data : [data];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {fieldsArray.map((fieldItem, index) => {
        const { iconSvg, label, placeholder } = fieldItem;
        const altText = iconSvg?.alternativeText || "";

        return (
          <div key={index}>
            <label className="text-sm font-medium text-indigo-700 block mb-2">
              {label}
            </label>

            <div className="relative">
              {/* Icon */}
              {altText === "textarea" ? (
                <StrapiImageRenderer
                  imageUrl={iconSvg?.url || ""}
                  altText={altText}
                  isSvg={true}
                  height={18}
                  width={18}
                  className="absolute inset-y-0 left-3 py-4 pointer-events-none"
                />
              ) : (
                <StrapiImageRenderer
                  imageUrl={iconSvg?.url || ""}
                  altText={altText}
                  isSvg={true}
                  height={18}
                  width={18}
                  className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
                />
              )}

              {/* Input or Textarea */}
              {altText === "textarea" ? (
                <motion.textarea
                  onChange={onChange}
                  required={required}
                  rows={3}
                  className="pl-10 w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                  placeholder={placeholder}
                  initial={{ opacity: 0 }} // Initial opacity for the textarea
                  animate={{ opacity: 1 }} // Animate opacity to 1 when it appears
                  transition={{ duration: 0.4, delay: 0.1 }} // Delay and duration for smooth fade-in
                />
              ) : (
                <motion.input
                  onChange={onChange}
                  required={required}
                  className="pl-10 w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                  placeholder={placeholder}
                  initial={{ opacity: 0 }} // Initial opacity for the input
                  animate={{ opacity: 1 }} // Animate opacity to 1 when it appears
                  transition={{ duration: 0.4, delay: 0.1 }} // Delay and duration for smooth fade-in
                />
              )}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default FormField;
