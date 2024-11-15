import React from "react";
import { Layout, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import ContactForm from "../../components/UIElements/Form/ContactForm";
import FooterPage from "../../components/Footer/Footer";

const { Header, Content } = Layout;
const { Title } = Typography;

const Contacts = () => {
  return (
    <Layout className="overflow-hidden">
      {/* Header Section */}
      <Header className="relative ">
        <div className="absolute inset-0 bg-gray-50 font-bold text-center flex justify-center items-center p-12">
          <Title level={2} className="text-white text-3xl relative  ">
            Contact Us
          </Title>
        </div>
      </Header>

      {/* Content Section */}
      <Layout className="bg-gray-900 text-white">
        <Content className="max-w-7xl mx-auto lg:p-8 flex flex-col md:flex-row items-center">
          {/* Contact Details */}
          <div className="w-full md:w-4/5 text-center md:text-left">
            <div className="text-[#007FFF] font-bold text-lg md:text-2xl">
              <h1>Contact us</h1>
            </div>
            <br />
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
              {/* Phone */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-[#007FFF] rounded-full p-3 md:p-4 mb-4">
                  <PhoneOutlined className="text-white text-2xl md:text-3xl" />
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  +251974255555
                </p>
              </div>
              {/* Email */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-[#007FFF] rounded-full p-3 md:p-4 mb-4">
                  <MailOutlined className="text-white text-2xl md:text-3xl" />
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  info@kassmaSolution.et
                </p>
              </div>
              {/* Address */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-[#007FFF] rounded-full p-3 md:p-4 mb-4">
                  <EnvironmentOutlined className="text-white text-2xl md:text-3xl" />
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  Addis Abeba, Ethiopia
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-2xl md:text-4xl font-bold text-white mt-8">
              Get in touch with us
            </div>
            <br />
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="Twitter"
              >
                <TwitterOutlined className="text-xl md:text-2xl" />
              </a>
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="Instagram"
              >
                <InstagramOutlined className="text-xl md:text-2xl" />
              </a>
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="LinkedIn"
              >
                <LinkedinOutlined className="text-xl md:text-2xl" />
              </a>
            </div>

            {/* Message Button */}
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ContactForm />
          </div>
        </Content>
      </Layout>

      {/* Footer Section */}
      <FooterPage />
    </Layout>
  );
};

export default Contacts;
