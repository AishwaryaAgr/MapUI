/** @format */

import React, { useState } from "react";
import ReactDOM from "react-dom";
//? Import for the header sidebar footer format from ant.design ----------------------
import { Layout, Menu } from "antd";
import Map from "./Components/Map";
import Input from "./Components/Inputs";
import Card from "./Components/data";
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
//? Ant Import End ---------------------------------------------------
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Ant = () => {
	const [collapsed, setCollapsed] = useState(false); //? For Collapsable sidebar ------------------

	const [address, setAddress] = useState(
		`https://www.openstreetmap.org/export/embed.html?bbox=-220.4296875%2C-39.90973623453719%2C171.91406250000003%2C84.26717240431665&amp;layer=cyclemap`
	); //? For Changing Api address ---------------------------------------------

	const world = {
		cname: "World",
		cheight: "0%",
		cflag: "",
		ccurrency: "",
		cspeed: "",
		cdistance: "",
		cvolume: "",
		cweight: "",
		ctime: "",
	};
	const [country, setCountry] = useState(world); //? For changing Card Info -----------------------------

	const onCollapse = () => {
		setCollapsed(!collapsed);
	}; //? Function on collapse event ------------------------------------

	return (
		<>
			{/* //? Body Start -----------------------------------------------  */}
			<Layout className='body-main'>
				{/* //? Side-bar Start -- Icons + Text ----------------------------------------- */}
				<Sider
					style={{ zIndex: 2 }}
					collapsible
					collapsed={collapsed} //Collapse Manage
					onCollapse={onCollapse}>
					<Menu
						theme='dark'
						defaultSelectedKeys={["1"]}
						mode='inline'>
						<Menu.Item key='1' icon={<PieChartOutlined />}>
							Option 1
						</Menu.Item>
						<Menu.Item key='2' icon={<DesktopOutlined />}>
							Option 2
						</Menu.Item>
						<SubMenu
							key='sub1'
							icon={<UserOutlined />}
							title='User'>
							<Menu.Item key='3'>Tom</Menu.Item>
							<Menu.Item key='4'>Bill</Menu.Item>
							<Menu.Item key='5'>Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key='sub2'
							icon={<TeamOutlined />}
							title='Team'>
							<Menu.Item key='6'>Team 1</Menu.Item>
							<Menu.Item key='8'>Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key='9' icon={<FileOutlined />}>
							Files
						</Menu.Item>
					</Menu>
				</Sider>
				{/* //?Sidebar End --------------------------------------------------- */}
				<Layout className='site-layout'>
					{/* //?Header Start -------------------Non functional buttons------------- */}
					<Header className='site-layout-background header-top'>
						<button
							className='btn'
							style={{
								position: "absolute",
								top: "0px",
								marginLeft: "0%",
							}}>
							Log In
						</button>
						<button
							className='btn'
							style={{
								position: "absolute",
								top: "0px",
								marginLeft: "8%",
							}}>
							Logout
						</button>
						<button
							className='btn'
							style={{
								position: "absolute",
								top: "0px",
								marginLeft: "87%",
							}}>
							Profile
						</button>
					</Header>
					{/* //? Header End ----------------------------------------------- */}
					{/* //? Content Start --------------- Map + Input + Card ----------- */}
					<Content>
						<Map address={address} /> {/*//? Find at Map.js */}
						<Input
							setAddress={setAddress}
							setCountry={setCountry}
							world={world}
						/>{" "}
						{/*//? Find at Input.js */}
						<Card country={country} /> {/*//? Find at data.js */}
					</Content>
					{/* //? Content End --------------------------------------------------- */}
					{/* //? Footer Start ----------- Plain Text -------------------------- */}
					<Footer style={{ textAlign: "center" }}>
						By Aishwarya Agrawal
					</Footer>
					{/* //?Footer End -----------------------------------------------------*/}
				</Layout>
			</Layout>
			{/* //?Body End --------------------------------------------------- */}
		</>
	);
};

ReactDOM.render(<Ant />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
