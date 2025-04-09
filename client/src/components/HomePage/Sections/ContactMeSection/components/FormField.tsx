import { JSX } from "react";
import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon: JSX.Element;
  required?: boolean;
  rows?: number;
}

const FormField = ({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  icon,
  required = false,
  rows = 1,
}: FormFieldProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }} // Initial opacity for the animation
      animate={{ opacity: 1 }} // Animate opacity to 1
      transition={{ duration: 0.6 }} // Animation duration
    >
      <label
        htmlFor={id}
        className="text-sm font-medium text-indigo-700 block mb-2"
      >
        {label}
      </label>

      <div className="relative">
        
        {/* Icon */}
        {type === "textarea" ? (
          <div className="absolute inset-y-0 left-3 py-4 pointer-events-none">
            {icon}
          </div>
        ) : (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        {/* Input or Textarea */}
        {type === "textarea" ? (
          <motion.textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className="pl-10 w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            placeholder={placeholder}
            initial={{ opacity: 0 }} // Initial opacity for the textarea
            animate={{ opacity: 1 }} // Animate opacity to 1 when it appears
            transition={{ duration: 0.4, delay: 0.1 }} // Delay and duration for smooth fade-in
          />
        ) : (
          <motion.input
            type={type}
            id={id}
            name={name}
            value={value}
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
    </motion.div>
  );
};

export default FormField;
