import React, { useState } from "react";
import photo2 from "../../assets/images/photo4.jpg";
import { Layout, Menu, Card, Divider } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import FooterPage from "../../components/Footer/Footer";

const { Header, Content, Sider } = Layout;

function Bio() {
  const [selectedKey, setSelectedKey] = useState("1"); // Default selected key

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the selected key on click
  };
  const biography = {
    name: "Professor Asrat",
    position: "President, XYZ University, Country",
    image: photo2,
    details: [
      "Professor Asrat assumed the position of interim president of XYZ University on August 31, 2023.",
      "Prior to becoming the president of XYZ University, Professor Asrat spent about five years in State Ministerial position for Higher Education and Development. The president was among the most significant figures in leading XYZ higher learning institutions in the course of policy, curricular, organizational and management reform processes. By default, Professor Asrat was among the key personalities in the assessment and recommendations of XYZ to be the first authorized public university in the country.",
      "Professor Asrat was also in higher education management position as State Minister for Science and Higher Education between November 2018 and September 2021. The times are during the early years of the political reform in the country that demanded rethinking and examining the education roadmap of the nation and crafting the future of higher educational institutions with respect to educational philosophy, policy, structure, pedagogy, organization and management of the country. He demonstrated higher level of leadership qualities, analytical skills and transformational competency in managing the desired national educational reform.",
      "The president spent most of his professional career in higher education leadership responsibilities. More specifically, he played worth mentioning roles during transformations, expansions, access and quality endeavors in higher education. For instance, Professor Asrat took up his role as General Manager of Higher Education Expansion Program (MoE) between July 2015 and October 2016.",
    ],
  };

  return (
    <Layout className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <Header className="bg-white text-center py-6 shadow-lg relative">
        <div className="text-4xl font-bold text-blue-600  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Biography of {biography.name}
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="bg-gray-100 p-4">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]} // Use state for selected keys
            style={{ height: "100%", borderRight: 0 }}
            className="h-full"
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={handleMenuClick}
              className={selectedKey === "1" ? "bg-blue-600 text-white" : ""}
            >
              Quick Links
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<FileTextOutlined />}
              onClick={handleMenuClick}
              className={selectedKey === "2" ? "bg-blue-600 text-white" : ""}
            >
              Systems
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<CalendarOutlined />}
              onClick={handleMenuClick}
              className={selectedKey === "3" ? "bg-blue-600 text-white" : ""}
            >
              Upcoming Events
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={handleMenuClick}
              className={selectedKey === "4" ? "bg-blue-600 text-white" : ""}
            >
              Downloads
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: "24px" }}>
          <Content
            className="bg-white p-8 rounded-lg shadow-lg"
            style={{ margin: 0, minHeight: 280 }}
          >
            <div className="flex flex-wrap items-center md:flex-nowrap">
              <Card
                cover={<img alt={biography.name} src={biography.image} />}
                className="max-w-xs rounded-lg shadow-lg border-2 border-gray-200 mb-6 md:mr-8"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">
                  {biography.name}, {biography.position}
                </h1>
                {biography.details.map((detail, index) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {detail}
                  </p>
                ))}
                <Divider />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      <FooterPage />
    </Layout>
  );
}

export default Bio;
