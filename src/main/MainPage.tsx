import React from "react";
import NavBar from "./NavBar";
import TableContainer from "./TableContainer";

const style ={
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    border: '3px solid black'
}

function MainPage() {
	return (
		<div style={style}>
           
			Main
			<NavBar />
			<TableContainer />
		</div>
	);
}

export default MainPage;
