import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, Dropdown, Button, Image, Drawer } from "antd";
import {
  DownOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  UserOutlined,
  MailOutlined,
  CaretDownOutlined,
  ReadOutlined,
  PhoneOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Hakim from "../../assets/images/HAKIM FINAL2.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuStyle = {
    fontSize: "14px",
    padding: "8px 12px",
  };

  const navList = (
    <div className="flex flex-col lg:flex-row lg:space-x-8 items-start lg:items-center font-bold space-y-2 lg:space-y-0 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `transition duration-300 ease-in-out ${
            isActive ? "text-black" : "text-gray-600 hover:text-black"
          }`
        }
      >
        Home
      </NavLink>
      <br />
      <NavLink
        to="/hakimPodcast"
        className={({ isActive }) =>
          `transition duration-300 ease-in-out ${
            isActive ? "text-black" : "text-gray-600 hover:text-black "
          }`
        }
      >
        Podcast
      </NavLink>
      <br />
      <Dropdown
        overlay={
          <Menu style={menuStyle}>
            <Menu.Item key="1" style={menuStyle}>
              <NavLink to="/Articles/">
                <span style={{ fontSize: "12px", marginRight: "8px" }}></span>
                Articles
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" style={menuStyle}>
              <NavLink to="/Articles/Bio">
                <span style={{ fontSize: "12px", marginRight: "8px" }}></span>{" "}
                BioGraphy
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" style={menuStyle}>
              <NavLink to="/Articles/History">
                <span style={{ fontSize: "12px", marginRight: "8px" }}></span>
                Ethiopian Doctor History
              </NavLink>
            </Menu.Item>
          </Menu>
        }
      >
        <button className="group transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center">
          Articles
          <span className="transform transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:translate-x-1">
            <RightOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
          </span>
        </button>
      </Dropdown>
      <br />
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `transition duration-300 ease-in-out ${
            isActive ? "text-black" : "text-gray-600 hover:text-black"
          }`
        }
      >
        Blogs
      </NavLink>
      <br />
      <Dropdown
        overlay={
          <Menu style={menuStyle}>
            <Menu.Item key="1" style={menuStyle}>
              <NavLink to="/opportunity/Vacancy">
                <span style={{ fontSize: "12px", marginRight: "8px" }}></span>
                Vacancy
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" style={menuStyle}>
              <NavLink to="/opportunity/Scholarship">
                <span style={{ fontSize: "12px", marginRight: "8px" }}></span>
                Scholarship
              </NavLink>
            </Menu.Item>
          </Menu>
        }
      >
        <button className="group transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center">
          Opportunity{" "}
          <span className="transform transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:translate-x-1">
            <RightOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
          </span>
        </button>
      </Dropdown>{" "}
      <br />
      <ScrollLink
        to="Services" // The id of the section to scroll to
        smooth={true}
        offset={-70} // Adjust offset to match any fixed header height
        duration={500} // Animation duration in ms
        activeClass="active" // Class to apply when the section is active
        className="cursor-pointer transition duration-300 ease-in-out text-gray-600 hover:text-black"
      >
        Services
      </ScrollLink>
      <br />
      <Dropdown
        overlay={
          <Menu style={menuStyle}>
            <Menu.Item key="1" style={menuStyle}>
              <NavLink to="/contacts/partner">
                <MailOutlined
                  style={{
                    fontSize: "12px",
                    marginRight: "8px ",
                  }}
                />
                Partner with us
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" style={menuStyle}>
              <NavLink to="/contacts">
                <PhoneOutlined
                  style={{
                    fontSize: "12px",
                    marginRight: "8px",
                  }}
                />
                Contact
              </NavLink>
            </Menu.Item>
          </Menu>
        }
      >
        <button className="group transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center">
          Contacts{" "}
          <span className="transform transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:translate-x-1">
            <RightOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
          </span>
        </button>
      </Dropdown>
      <br />
    </div>
  );

  return (
    <header className="bg-white pl-6 pr-12 py-1  w-full  bg-opacity-60 z-50 ">
      <div className="container flex items-center justify-between ">
        <NavLink
          to="/"
          className="flex items-center gap-4 hover:cursor-pointer"
        >
          <img src={Hakim} width={70} alt="Hakim Logo" />
        </NavLink>
        <nav className="hidden lg:flex lg:items-center lg:space-x-8 font-bold">
          {navList}
        </nav>
        <Button
          className="lg:hidden"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          className="lg:hidden"
          width={250}
        >
          <div className="flex flex-col space-y-4 pl-8 font-bold">
            {navList}
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
