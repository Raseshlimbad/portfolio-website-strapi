"use client";

import ErrorDisplay from "@/components/global/ErrorDisplay";
import StrapiImageRenderer from "@/components/global/StrapiImageRenderer";
import { GET_CONTACT_SECTION_QUERY } from "@/graphql/homePage/ContactSection.query";
import { mapContactSectionData } from "@/lib/helpers/mapDataHelper";
import { MappedContactSectionData } from "@/types/HomePage/ContactSectionTypes";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactInfo from "./components/ContactInfo";
import FormField from "./components/FormField";
import ContactSectionLoadingSkeleton from "@/components/LoadingSkeletons/ContactSectionLoadingSkeleton";

const ContactMe = () => {
  const [contactSectionData, setContactSectionData] =
    useState<MappedContactSectionData>();

  const { loading, error, data } = useQuery(GET_CONTACT_SECTION_QUERY);

  console.log("Contact Section Raw:", data);

  // Filtering the MySkills Section correctly and mapping the data
  useEffect(() => {
    if (data?.homePage?.Sections) {
      // Find the section
      const heroSection = data.homePage.Sections.find(
        (section: { __typename: string }) =>
          section.__typename === "ComponentSectionsContactSection"
      );

      if (heroSection) {
        const mappedData = mapContactSectionData(heroSection);
        setContactSectionData(mappedData);
      }
    }
  }, [data]);

  console.log("Contact Section Data:", contactSectionData);

  // export const leftContactSection = contactSectionData

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({ submitted: true, loading: false });

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus({ submitted: false, loading: false });
      }, 3000);
    }, 1500);
  };

  console.log("MiddleSectionData: ", contactSectionData?.middleSection);

  if (loading) return <ContactSectionLoadingSkeleton />;
  if (error) return <ErrorDisplay message={error.message} />;

  return (
    <motion.div
      id="contact"
      className="max-w-[1500px] mx-8 md:mx-20 2xl:mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 items-center"
      initial={{ opacity: 0 }} // Fade in the entire container initially
      animate={{ opacity: 1 }} // Final state: fully visible
      transition={{ duration: 0.6 }} // Animation duration
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Contact Info */}
        <motion.div
          className="flex flex-col space-y-6 md:border-r border-gray-200 md:pr-6"
          initial={{ opacity: 0, x: -50 }} // Start off-screen from left with low opacity
          animate={{ opacity: 1, x: 0 }} // Animate to visible and normal position
          transition={{ duration: 0.6 }}
        >
          {contactSectionData?.leftSection && (
            <ContactInfo data={contactSectionData?.leftSection} />
          )}
        </motion.div>

        {/* Middle Section: Contact Form */}
        {contactSectionData?.middleSection && (
          <motion.div
            className="md:border-r border-gray-200 md:pr-6"
            initial={{ opacity: 0, y: 50 }} // Start lower than its final position
            animate={{ opacity: 1, y: 0 }} // Animate to its final position
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 md:text-left">
              {/* Send Me a Message */}
              {contactSectionData.middleSection.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactSectionData.middleSection.contactForm.formFields &&
                contactSectionData.middleSection.contactForm.formFields.map(
                  (field, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FormField
                        data={field}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  )
                )}

              <motion.button
                type="submit"
                disabled={formStatus.loading}
                className="w-full flex items-center justify-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-70"
                initial={{ scale: 0.95, opacity: 0 }} // Start with a small and faded button
                animate={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {formStatus.loading ? "Sending..." : contactSectionData?.middleSection.contactForm.submitButton.ButtonName}
                <StrapiImageRenderer
                  imageUrl={
                    contactSectionData?.middleSection.contactForm.submitButton
                      .iconSvg.url || ""
                  }
                  altText={
                    contactSectionData?.middleSection.contactForm.submitButton
                      .iconSvg.alternativeText
                  }
                  className={"ml-2"}
                  height={18}
                  width={18}
                  isSvg={true}
                />
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Right Section: Image */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start with off-screen and low opacity
          animate={{ opacity: 1, x: 0 }} // Animate to visible and at normal position
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <ContactImage /> */}
          <StrapiImageRenderer
            imageUrl={contactSectionData?.rightSection.image.url || ""}
            altText={contactSectionData?.rightSection.image.alternativeText}
            className={"w-full h-auto object-cover rounded-lg"}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
