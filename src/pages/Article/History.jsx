import React from "react";
import { Card, Timeline } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import FooterPage from "../../components/Footer/Footer";

const historyData = [
  {
    period: "Pre 1800",
    description:
      "The history of Ethiopian medicine prior to 1800 is a fascinating blend of indigenous knowledge, religious influences, and interactions with neighboring civilizations. Here are some key aspects: ...",
    color: "bg-gradient-to-r from-blue-500 to-cyan-400",
  },
  {
    period: "1800-1900",
    description:
      "In the 19th century, Ethiopian medical history saw significant interactions with European medicine, particularly through travelers, missionaries, and military personnel. ...",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500",
  },
  {
    period: "1900-1950",
    description:
      "Between 1900 and 1950, Ethiopian medical history experienced significant transformations influenced by both internal developments and external interactions. ...",
    color: "bg-gradient-to-r from-blue-500 to-indigo-400",
  },
  {
    period: "1950-2000",
    description:
      "From 1950 to 2000, Ethiopian medical history saw numerous advancements and changes driven by internal reforms and international collaborations. ...",
    color: "bg-gradient-to-r from-indigo-400 to-blue-500",
  },
  {
    period: "2000-Present",
    description:
      "The period from 2000 onwards in Ethiopian medical history has been marked by significant progress alongside persistent challenges. ...",
    color: "bg-gradient-to-r from-blue-500 to-teal-400",
  },
];

const HistoryPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white py-12 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          History of Ethiopian Medicine
        </h1>
        <p className="text-lg">
          Explore the rich and transformative journey of medicine in Ethiopia
          across centuries.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto p-8">
        <Timeline mode="alternate" className="p-4">
          {historyData.map((item, index) => (
            <Timeline.Item
              key={index}
              color={index % 2 === 0 ? "#007FFF" : "cyan"}
              dot={
                <HistoryOutlined className="text-lg text-white bg-[#007FFF] p-2 rounded-full" />
              }
            >
              <Card
                title={
                  <div
                    className={`${item.color} text-white px-4 py-2 rounded-lg shadow-md`}
                  >
                    <span className="text-lg font-bold">{item.period}</span>
                  </div>
                }
                bordered={false}
                className="shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      {/* Footer Section */}
      <FooterPage />
    </>
  );
};

export default HistoryPage;
