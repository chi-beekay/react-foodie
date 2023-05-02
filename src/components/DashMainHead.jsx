import React from 'react';
import Img from '../assets/img-1.jpg';
import { FaMailchimp, FaCartPlus, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashMainHead = () => {
	return (
		<div>
			{/* nav */}
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl'>Dashboard</h1>

				{/* links */}
				<div className='flex items-center'>
					{/* link btn */}
					<div className='flex items-center'>
						<Link className=' border aspect-square p-1'>
							<FaCartPlus />
						</Link>
						<Link>
							<FaMailchimp />
						</Link>
						<Link>
							<FaBell />
						</Link>
					</div>
				</div>
			</div>

			<p>Hello Christiana</p>
			<p>Order your meal from various</p>
			<p>Restaurants around Ibadan</p>
		</div>
	);
};

export default DashMainHead;
