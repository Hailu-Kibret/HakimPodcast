import React, { useState, useEffect } from "react";
import {
  ClockCircleOutlined,
  UserOutlined,
  FolderOpenOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Typography, Space, Layout, Spin, Alert, Button } from "antd";
import FooterPage from "../../components/Footer/Footer";
import { GetScholars } from "../../api/scholars";

const { Title, Paragraph, Text } = Typography;
const { Header } = Layout;

const ScholarshipPost = ({ scholarship }) => (
  <div className="bg-gray-800 p-6 rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img
      src={scholarship.image || "/path/to/fallback-image.jpg"}
      alt={scholarship.title || "Scholarship image"}
      className="w-full h-auto rounded-md mb-4"
    />
    <Title level={3} className="text-white mb-2">
      {scholarship.title || "Untitled Scholarship"}
    </Title>
    <Space className="mb-4 flex-wrap">
      <Text className="text-white flex items-center">
        <UserOutlined className="mr-1" />{" "}
        {scholarship.author || "Unknown Author"}
      </Text>
      <Text className="text-white flex items-center">
        <ClockCircleOutlined className="mr-1" />{" "}
        {scholarship.date || "Unknown Date"}
      </Text>
      <Text className="text-white flex items-center">
        <FolderOpenOutlined className="mr-1" />{" "}
        {scholarship.category || "Uncategorized"}
      </Text>
      <Text className="text-white flex items-center">
        <CommentOutlined className="mr-1" />{" "}
        {scholarship.comments || "No Comments"}
      </Text>
    </Space>
    <Paragraph className="text-gray-300 mb-4">
      {scholarship.title || "Learn more about this opportunity"}...
      <a
        href={scholarship.link || "#"}
        className="text-blue-400 hover:text-blue-600"
      >
        Continue Reading
      </a>
    </Paragraph>
  </div>
);

const ScholarshipGallery = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholars = async () => {
      try {
        const data = await GetScholars();
        console.log(data); // Debug: Inspect the response structure
        setScholarships(Array.isArray(data) ? data : data.scholarships || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholars();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Spin tip="Loading scholarships..." size="large" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          action={
            <Button
              size="small"
              type="primary"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          }
        />
      </div>
    );

  return (
    <div>
      <Header
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/path/to/your/image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-orange-500 opacity-75"></div>
        <Title level={2} className="text-white relative">
          Scholarship
        </Title>
      </Header>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {scholarships.map((scholarship, index) => (
            <ScholarshipPost key={index} scholarship={scholarship} />
          ))}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ScholarshipGallery;
