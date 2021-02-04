/** @format */

import React from "react";
import "./card.css"; //? CSS set in card.css file

const Card = ({ country }) => {
	//? Accepting the currently displayed country's data using hook
	return (
		<>
			{/* //?Card Start -----------Flag+ Name + Timezone + Units + Currency---------- */}
			<div className='card ' style={{ height: country.cheight }}>
				{/* //?Flag Start ----------------------------------------- */}
				<div
					className='banner'
					style={{
						backgroundImage: "url(" + country.cflag + ")",
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				/>
				{/* //? Flag End --------------------------------------------------- */}
				<h1 className='name'>{country.cname}</h1>
				<div className='actions'>
					<h2>
						<a href='#'>
							<span>{country.ccurrency}</span>
							<small>Currency</small>
						</a>
					</h2>
					<h2>
						<a href='#'>
							<span>{country.ctime}</span>
							<small>Timezone</small>
						</a>
					</h2>
					<h2>
						<a href='#'>
							<span>{country.cdistance}</span>
							<small>Distance</small>
						</a>
					</h2>
					<h2>
						<a href='#'>
							<span>{country.cvolume}</span>
							<small>Volume</small>
						</a>
					</h2>
					<h2>
						<a href='#'>
							<span>{country.cspeed}</span>
							<small>Speed</small>
						</a>
					</h2>
					<h2>
						<a href='#'>
							<span>{country.cweight}</span>
							<small>Weight</small>
						</a>
					</h2>
				</div>
			</div>
			{/* //? Card End -------------------------------------------------------- */}
		</>
	);
};

export default Card;
