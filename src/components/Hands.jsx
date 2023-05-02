import React from 'react';
import { Link } from 'react-router-dom';
import Chef from '../assets/chef.png';

const Hands = () => {
	return (
		<div className='w-full bg-opacGreen'>
			<div className='w-full conPad flex flex-col items-center justify-center'>
				<div className='my-0 mt mt-14 conH2'>
					<h2>Lets Join Hands</h2>
				</div>

				<div className='w-[12rem]'>
					<img className='w-full' src={Chef} alt='' />
				</div>

				<div className='flex items-center justify-center'>
					<p className=' max-w-[25rem] text-center font-monts font-medium'>
						Join forces with foodie Xpress! You may increase sales and seize new
						chances with the aid of our technology and user base!
					</p>
				</div>

				<Link>
					<p className=' mt-5 mb-14 bg-colorPrimary px-4 py-1.5 rounded-2xl text-white border-2 border-colorPrimary hover:bg-white hover:text-colorPrimary'>
						Join us
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Hands;
