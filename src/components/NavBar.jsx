import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';

const NavBar = () => {
	// useState
	const [nav, setNav] = useState(false);

	// function to store links in an array
	const links = [
		{
			id: 1,
			link: 'About Us',
		},
		{
			id: 2,
			link: 'Contact Us',
		},
		{
			id: 3,
			link: 'Start Your Order',
		},
	];
	return (
		<div className='w-full bg-colorPrimary'>
			<div className=' max-w-6xl mx-auto p-4 flex items-center justify-between'>
				{/* Logo */}
				<div className=''>
					<Link>
						<img
							src={Logo}
							alt=''
							className=' w-[60%] md:w-[80%]
                    '
						/>
					</Link>
				</div>

				{/* Desktop Links */}
				<div className='hidden'>
					<ul>
						{/* map through links of array */}
						{links.map(({ id, link }) => (
							<li key={id}>
								<Link to=''>{link}</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Button */}
				<div className='hidden'>
					<button className='bg-white text-colorPrimary btn'>
						<Link to=''>Get Started</Link>
					</button>
				</div>

				{/* Burger Icon */}
				<div className=' md:hidden'>
					<div onClick={() => setNav(true)} className=' cursor-pointer'>
						<HiOutlineMenuAlt1 size={30} style={{ color: 'white' }} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur'
						: ''
				}>
				<div>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-4/5 h-full bg-colorPrimary p-5 text-white ease-out duration-700'
								: 'fixed top-0 left-[-100%] w-4/5 p-5 h-full ease-in duration-700'
						}>
						<div className='flex w-full items-center justify-between'>
							{/* logo */}
							<div className=''>
								<Link>
									<img src={Logo} alt='' className=' w-[60%] md:w-[80%]' />
								</Link>
							</div>

							{/* close */}
							<div onClick={() => setNav(false)} className='p-3 cursor-pointer'>
								<HiX size={30} />
							</div>
						</div>
						<div className=' flex flex-col mt-24 gap-10'>
							<ul>
								{/* map through links of array */}
								{links.map(({ id, link }) => (
									<li className='text-xl py-2' key={id}>
										<Link to=''>{link}</Link>
									</li>
								))}
							</ul>

							{/* Button */}
							<div className=''>
								<button className=' bg-white text-colorPrimary btn py-2'>
									<Link to=''>Get Started</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
