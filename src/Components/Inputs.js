/** @format */

import React from "react";

const Input = ({ setAddress, setCountry, world }) => {
	//? Setting country API and data using hooks ---------
	//? Input country Data Start ------------------------------------------------------
	const india = {
		cname: "India",
		cheight: "65%",
		cflag:
			"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
		ccurrency: "Rupees",
		cspeed: "km/hr",
		cdistance: "meter",
		cvolume: "litre",
		cweight: "gram",
		ctime: "IST",
	};
	const uk = {
		cname: "UK",
		cheight: "65%",
		cflag:
			"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
		ccurrency: "Sterling",
		cspeed: "mph",
		cdistance: "meter",
		cvolume: "gallons",
		cweight: "pound",
		ctime: "GMT",
	};
	const usa = {
		cname: "USA",
		cheight: "65%",
		cflag:
			"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
		ccurrency: "Dollar",
		cspeed: "mph",
		cdistance: "yard",
		cvolume: "ounces",
		cweight: "pound",
		ctime: "EST",
	};
	//? Input Country Data End -------------------------------------------------------------
	const func = (place) => {
		//? Handling all the Data and API by setting it to the state corresponding to selection -----

		if (place === "0") {
			console.log("World");
			setAddress(
				`https://www.openstreetmap.org/export/embed.html?bbox=-220.4296875%2C-39.90973623453719%2C171.91406250000003%2C84.26717240431665&amp;layer=cyclemap`
			); //? Setting API -----------------------------------------------------------------
			setCountry(world); //? Setting Card data -----------------------------------------------
		} else if (place === "1") {
			console.log("India");
			setAddress(
				`https://www.openstreetmap.org/export/embed.html?bbox=65.96191406250001%2C8.754794702435618%2C99.62402343750001%2C33.578014746144014&amp;layer=cyclemap`
			);
			setCountry(india);
		} else if (place === "2") {
			console.log("UK");
			setAddress(
				`https://www.openstreetmap.org/export/embed.html?bbox=-12.458496093750002%2C49.97948776108648%2C4.372558593750001%2C57.868131763328826&amp;layer=cyclemap`
			);
			setCountry(uk);
		} else {
			console.log("USA");
			setAddress(
				`https://www.openstreetmap.org/export/embed.html?bbox=-206.54296875000003%2C11.350796722383672%2C-10.371093750000002%2C75.71563324165896&amp;layer=cyclemap`
			);
			setCountry(usa);
		}
	};

	let curr = "0"; //? So that only the latest selection gets called on pressing load -------------
	return (
		//? button and select tag formatting ------------------------------------------------
		<>
			<button
				className='btn'
				style={{
					height: "30px",
					width: "100px",
					zIndex: "4",
					position: "absolute",
					top: "10vh",
					left: "54vw",
					borderRadius: "8px",
					outline: "none",
				}}
				onClick={() => {
					func(curr); //?update all the hooks on this event listener -----------------------
				}}>
				Load
			</button>
			<select
				className='btn'
				style={{
					height: "30px",
					width: "100px",
					zIndex: "4",
					position: "absolute",
					top: "10vh",
					left: "46vw",
					borderRadius: "8px",
					outline: "none",
					defaultValue: "World",
				}}
				onChange={(e) => {
					curr = e.target.value; //? Overwritting to ensure the latest selection is called ------
				}}>
				<option value='1'>India</option>
				<option value='2'>UK</option>
				<option value='3'>USA</option>
				<option selected value='0'>
					World
				</option>
			</select>
		</>
	);
};

export default Input;
