import React from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { sendEmail } from "../../api/subscribe"; // Ensure the path is correct

const SubscriptionForm = () => {
  const [form] = Form.useForm();

  const onSubscribe = async (values) => {
    try {
      console.log("Attempting to subscribe with values:", values);
      await sendEmail(values);
      notification.success({
        message: "Subscription Successful",
        description: `You have successfully subscribed with email: ${values.email}`,
      });
      form.resetFields();
    } catch (error) {
      console.error("Subscription error:", error); // Log the error for debugging
      notification.error({
        message: "Subscription Failed",
        description: `There was an error with your subscription: ${
          error.message || "Please try again later."
        }`,
      });
    }
  };

  return (
    <div className="bg-gray-100 py-8 flex justify-center ">
      <div className="flex flex-col justify-center items-center space-y-8">
        {/* Title Section */}

        <h2 className="text-center text-4xl font-bold mb-8 text-blue-600 animate-slide-in">
          Hakim Ethio Newsletters
        </h2>

        {/* Form Section */}
        <Form
          form={form}
          name="subscription"
          onFinish={onSubscribe}
          className="subscription-form bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 p-8 rounded-lg shadow-xl w-3/4 md:w-1/2  transition-all duration-300"
        >
          <div className="flex flex-col justify-between items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
              className="flex-grow mt-4"
            >
              <Input
                prefix={
                  <MailOutlined className="site-form-item-icon text-gray-500" />
                }
                placeholder="Email"
                className="rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 p-4 text-gray-800"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="ml-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </Button>
            </Form.Item>
          </div>
          <p className="text-sm font-sans text-gray-200 mt-4">
            By clicking Subscribe, I agree to the WebHakim Terms & Conditions
            and Privacy Policy and understand that I may opt out of WebHakim
            subscriptions at any time.
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
