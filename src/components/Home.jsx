import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Restaurant from './Restaurant';
import Category from './Category';
import Hands from './Hands';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Home = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Restaurant />
			<Category />
			<Hands />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Home;
