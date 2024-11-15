import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  SendOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const FooterPage = () => {
  return (
    <footer className="bg-black text-white py-6">
      <Row className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-around gap-8 text-left">
        {/* Column 1 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-center sm:items-start space-y-3 text-left"
        >
          <span className="text-base font-bold">Explore</span>
          <Link to="/contacts" className="text-[#007FFF] hover:text-[#005fbd]">
            Contact Us
          </Link>
          <Link
            to="/hakimPodcast"
            className="text-[#007FFF] hover:text-[#005fbd]"
          >
            HakimPodcast
          </Link>
          <Link to="/Articles/" className="text-[#007FFF] hover:text-[#005fbd]">
            Articles
          </Link>
          <Link to="/blogs" className="text-[#007FFF] hover:text-[#005fbd]">
            Blog
          </Link>
        </Col>

        {/* Column 2 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-center sm:items-start space-y-3"
        >
          <span className="text-base font-bold">Address</span>
          <span className="text-[#007FFF]">Addis Ababa, Ethiopia</span>
        </Col>

        {/* Column 3 */}
        <Col
          xs={24}
          sm={12}
          md={6}
          className="flex flex-col items-center sm:items-start space-y-3"
        >
          <span className="text-base font-bold">Contact</span>
          <a href="#" className="text-[#007FFF] hover:text-[#005fbd]">
            Hakim Podcast
          </a>
          <div className="flex items-center gap-1">
            <a
              href="tel:+251900111111"
              className="text-[#007FFF] hover:text-[#005fbd]"
            >
              +251 900 111 111
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hakimpodcast@gmail.com"
              className="text-[#007FFF] hover:text-[#005fbd] flex items-center"
            >
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
            <strong>Kasma Software Solution</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
