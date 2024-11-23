import React from "react";
import { useParams } from "react-router-dom";
import DentalClinics from "./DentalClinics";
import FooterPage from "../../components/Footer/Footer";

// Example service data
const serviceDetails = {
  "surgical-services": {
    title: <DentalClinics />,
    description:
      "Our expert surgeons offer a wide range of surgical services to ensure your health and safety.",
    content: "Here is the detailed information about surgical services...",
  },
  "dental-clinics": {
    title: "Dental Clinics",
    description:
      "Providing top-quality dental care for all ages, with services ranging from cleanings to advanced procedures.",
    content: "Here is the detailed information about dental clinics...",
  },
  "medical-services": {
    title: "Medical Services",
    description:
      "Comprehensive medical care to address all your health needs with experienced professionals.",
    content: "Here is the detailed information about medical services...",
  },
  "mch-centers": {
    title: "MCH Centers",
    description:
      "Dedicated centers focused on maternal and child health to support families and communities.",
    content: "Here is the detailed information about MCH Centers...",
  },
  "pharmaceutical-agencies": {
    title: "Pharmaceutical Agencies",
    description:
      "Reliable access to prescription and over-the-counter medications through trusted pharmaceutical partners.",
    content:
      "Here is the detailed information about pharmaceutical agencies...",
  },
  "patient-leaflets": {
    title: "Patient Leaflets",
    description:
      "Downloadable patient information leaflets to help you stay informed about health topics.",
    content: "Here is the detailed information about patient leaflets...",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <>
      <div className="p-6">{service.title}</div>
      <FooterPage />
    </>
  );
};

export default ServiceDetail;
