import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@ant-design/icons";
import Hakim from "../../assets/images/Hakim.jpg";

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
          } `
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
        <button
          href="#"
          className="transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center"
        >
          Articles
          <DownOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
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
        <button className="transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center">
          Opportunity{" "}
          <DownOutlined style={{ fontSize: "12px", marginRight: "8px" }} />
        </button>
      </Dropdown>{" "}
      <br />
      <Dropdown
        overlay={
          <Menu style={menuStyle}>
            <Menu.Item key="1" style={menuStyle}>
              <NavLink to="/Consulation">
                <UserOutlined
                  style={{ fontSize: "12px", marginRight: "8px" }}
                />
                Consulation
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" style={menuStyle}>
              <NavLink to="/TeleMedicin">
                <VideoCameraOutlined
                  style={{ fontSize: "12px", marginRight: "8px" }}
                />
                TeleMedicin
              </NavLink>
            </Menu.Item>
          </Menu>
        }
      >
        <a
          href="#"
          className="text-gray-600 hover:text-black flex items-center"
        >
          Services
          <DownOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
        </a>
      </Dropdown>
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
        <button
          href="#"
          className=" transition duration-300 ease-in-out text-gray-600 hover:text-black flex items-center"
        >
          Contacts{" "}
          <DownOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
        </button>
      </Dropdown>
      {/* <NavLink
        to="/hakimPodcast"
        className={({ isActive }) =>
          `transition duration-300 ease-in-out px-4 py-2 rounded border border-gray-600 ${
            isActive
              ? "text-white bg-black shadow-lg"
              : "text-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-lg"
          }`
        }
      >
        Subscribe
      </NavLink> */}
      <br />
    </div>
  );

  return (
    <header className="bg-white pl-6 pr-12 py-1  w-full fixed bg-opacity-60 z-50">
      <div className="container flex items-center justify-between ">
        <NavLink
          to="/"
          className="flex items-center gap-4 hover:cursor-pointer"
        >
          <img src={Hakim} width={70} alt="Hakim Logo" />
        </NavLink>
        <nav className=" lg:flex lg:items-center lg:space-x-8 font-bold">
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
