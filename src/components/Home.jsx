import React, { useState, useEffect } from 'react';
import Flower from './image/flower.png';
import axios from 'axios'

const Home = () => {
	const [couple, setCouple] = useState()
	const getCouple = async () => {
		const { data } = await axios.get('http://localhost:9000/couple');
		setCouple(data);
	}
	useEffect(() => {
		getCouple();
	}, []);

	return (
		<div>
			<h1 className="goldtextcss">{couple?.groom} <span className="and"> & </span> {couple?.bride}</h1>
			<p>ARE GETTING MARRIED </p>
			<img className="flower" src={Flower} alt="flower-img" />
		</div>
	);
}

export default Home;