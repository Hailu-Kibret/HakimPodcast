import { Layout, Typography } from "antd";
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import PartnerForm from "../../components/UIElements/Form/PartnerForm";
import FooterPage from "../../components/Footer/Footer";

const { Header, Content } = Layout;
const { Title } = Typography;

const PartnerPage = () => {
  return (
    <Layout className="overflow-hidden">
      {/* Header Section */}

      <Header className="relative bg-white shadow-lg">
        <div className="absolute inset-0 flex justify-center items-center p-12">
          <h1
            level={2}
            className="text-blue-600 text-4xl font-bold text-center mb-8"
          >
            Partner With Us
          </h1>
        </div>
      </Header>

      {/* Content Section */}
      <Layout className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <Content className="max-w-7xl mx-auto p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          {/* Left Side - Information */}
          <div className="w-full md:w-1/2 space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-[#007FFF] text-3xl font-bold">
              Make Partnership With Us
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="Twitter"
              >
                <TwitterOutlined className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="Instagram"
              >
                <InstagramOutlined className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-[#007FFF] hover:text-[#005fbd] transition duration-200 ease-in-out"
                aria-label="LinkedIn"
              >
                <LinkedinOutlined className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <PartnerForm />
          </div>
        </Content>
      </Layout>

      {/* Footer Section */}
      <FooterPage />
    </Layout>
  );
};

export default PartnerPage;
