import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Modal, Button } from "antd";
import {
  MedicineBoxOutlined,
  HeartOutlined,
  FileTextOutlined,
  ProfileOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { photo1 } from "../../assets/images";

// Example services data
const servicesLeft = [
  {
    icon: <MedicineBoxOutlined style={{ marginLeft: 50 }} />,
    title: "Surgical Services",
    description:
      "Our expert surgeons offer a wide range of surgical services to ensure your health and safety.",
  },
  {
    icon: <ProfileOutlined />,
    title: "Dental Clinics",
    description:
      "Providing top-quality dental care for all ages, with services ranging from cleanings to advanced procedures.",
  },
  {
    icon: <GlobalOutlined />,
    title: "Medical Services",
    description:
      "Comprehensive medical care to address all your health needs with experienced professionals.",
  },
];

const servicesRight = [
  {
    icon: <HeartOutlined />,
    title: "MCH Centers",
    description:
      "Dedicated centers focused on maternal and child health to support families and communities.",
  },
  {
    icon: <FileTextOutlined />,
    title: "Pharmaceutical Agencies",
    description:
      "Reliable access to prescription and over-the-counter medications through trusted pharmaceutical partners.",
  },
  {
    icon: <TeamOutlined />,
    title: "Patient Leaflets",
    description:
      "Downloadable patient information leaflets to help you stay informed about health topics.",
    isDownloadable: true, // Mark as downloadable
  },
];

const HealthcareServices = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    isDownloadable: false,
  });

  // Function to handle card click with download option for Patient Leaflets
  const handleCardClick = (title, description, isDownloadable) => {
    setModalContent({ title, description, isDownloadable });
    setIsModalVisible(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      id="Services"
      className={`flex flex-col items-center bg-white py-10 px-4 sm:px-6 lg:px-8 ${
        isModalVisible ? "blur" : ""
      }`}
    >
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-between w-full max-w-6xl">
        {/* Cards that slide in from the left */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 mb-4 lg:mb-0">
          {servicesLeft.map((service, index) => (
            <Card
              key={index}
              className="w-full flex items-center justify-center p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer animate-slideInLeft"
              onClick={() =>
                handleCardClick(service.title, service.description)
              }
            >
              <div className="text-center">
                <div className="text-4xl text-blue-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Center image */}
        <div className="w-full lg:w-1/3 flex justify-center items-center mb-4 lg:mb-0">
          <img src={photo1} alt="Healthcare" className="w-full h-auto" />
        </div>

        {/* Cards that slide in from the right */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 mb-4 lg:mb-0">
          {servicesRight.map((service, index) => (
            <Card
              key={index}
              className="w-full flex items-center justify-center p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer animate-slideInRight"
              onClick={() =>
                handleCardClick(
                  service.title,
                  service.description,
                  service.isDownloadable
                )
              }
            >
              <div className="text-center">
                <div className="text-4xl text-blue-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      <Modal
        title={modalContent.title}
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={
          modalContent.isDownloadable ? (
            <Button
              type="primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/path/to/patient-leaflet.pdf"; // Replace with actual file path
                link.download = "patient-leaflet.pdf";
                link.click();
              }}
            >
              Download Leaflet
            </Button>
          ) : (
            <Button onClick={handleCloseModal}>Close</Button>
          )
        }
      >
        <p style={{ fontSize: "18px" }}>{modalContent.description}</p>
      </Modal>

      {/* CSS styles */}
      <style jsx>{`
        .blur {
          filter: blur(4px);
          transition: filter 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HealthcareServices;
