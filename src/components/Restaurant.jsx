import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import Food1 from '../assets/food-1.jpg';
import Food2 from '../assets/food-2.jpg';
import Food3 from '../assets/img-2.jpg';
import Food4 from '../assets/img-2.jpg';
import Food5 from '../assets/img-3.jpg';
import Food6 from '../assets/img-4.jpg';

const Restaurant = () => {
	// function to store links in an array
	const grids = [
		{
			id: 1,
			h1: 'KFC',
			src: Food1,
			img: <HiHeart />,
		},
		{
			id: 2,
			h1: 'KFC',
			src: Food2,
			img: <HiOutlineHeart />,
		},
		{
			id: 3,
			h1: 'KFC',
			src: Food3,
			img: <HiOutlineHeart />,
		},
		{
			id: 4,
			h1: 'KFC',
			src: Food4,
			img: <HiOutlineHeart />,
		},
		{
			id: 5,
			h1: 'KFC',
			src: Food5,
			img: <HiOutlineHeart />,
		},
		{
			id: 6,
			h1: 'KFC',
			src: Food6,
			img: <HiOutlineHeart />,
		},
	];
	return (
		<div className='w-full'>
			<div className=' width'>
				{/* Header */}
				<div>
					<h2>Popular Restaurants</h2>
				</div>

				{/* Grids */}
				<div className=''>
					{/* grid sub content */}
					{/* map through links of array */}
					{grids.map(({ id, h1, src, img }) => (
						<div key={id}>
							<div className=' aspect-[1/.5] overflow-hidden'>
								<img className='' src={src} alt='' />
							</div>
							<h2>{h1}</h2>
							<p>
								{img} 87%
								<span> (791)</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
