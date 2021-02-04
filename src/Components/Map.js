/** @format */

import React from "react";

const Map = ({ address }) => {
	//? Accepting the current place using the address hook --------------
	return (
		<>
			<iframe
				title='Map'
				width='100%'
				height='106%'
				scrolling='no'
				style={{ marginTop: "-10vh" }}
				src={address}></iframe>
		</> //? Embedded as frame with Api recieved from the address hook ----------------------
	);
};

export default Map;
