import React from "react";
import { Link } from "react-router-dom";
import { Space, Button, Row, Col, Image, Tooltip } from "antd";
import {
  SendOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const FooterPage = () => {
  const socialLinks = [
    {
      icon: <SendOutlined />,
      link: "https://t.me/HakimEthio",
    },
    {
      icon: <YoutubeOutlined />,
      link: "https://youtube.com/@hakim207?si=qOLz_0YtFnFx62Aa",
    },
    {
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/groups/9536029",
    },
  ];

  return (
    <footer className="bg-black text-white py-6">
      <Row className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-8">
        {/* Column 1 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-start space-y-3"
        >
          <span className="text-base font-bold">Explore</span>
          <Link href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Contact Us
          </Link>
          <Link href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            HakimPodcast
          </Link>
          <Link href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Articles
          </Link>
          <Link href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Blog
          </Link>
        </Col>

        {/* Column 2 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-start space-y-3"
        >
          <span className="text-base font-bold">Address</span>
          <a href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Addis Ababa, Ethiopia
          </a>
        </Col>

        {/* Column 3 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-start space-y-3"
        >
          <span className="text-base font-bold">Contact</span>
          <a href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Hakim Podcast
          </a>
          <div className="flex items-center gap-1">
            <a href="#" className="text-[#007FFF] hover:text-[#005fbd]">
              <PhoneOutlined />
              <span className="pl-1">+2519-00-11-11-11</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#007FFF] hover:text-[#005fbd]">
              <MailOutlined />
              <span className="pl-1">hakimpodcast@gmail.com</span>
            </a>
          </div>
        </Col>
      </Row>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center py-4 mt-6">
        <div className="w-full h-px bg-gray-700"></div>
        <p className="text-white mt-4">
          © {new Date().getFullYear()} | Hakim Podcast
        </p>
        <p className="text-white">
          Developed By{" "}
          <a
            className="rounded-sm transition-colors duration-300 hover:text-gray-300"
            target="_blank"
            href="https://kasmasolution.com/"
          >
            <strong>Kasma software solution</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
