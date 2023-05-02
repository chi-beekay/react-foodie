import React, { useState } from 'react';
import Img from '../assets/img-1.jpg';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
	FaList,
	FaVideo,
	FaAddressCard,
	FaSignOutAlt,
	FaTimes,
} from 'react-icons/fa';

const DashSidebar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className='md:fixed md:w-[30%] lg:w-[25%]'>
			{/* desktop view */}
			<div className='hidden md:block'>
				<div className=' bg-colorPrimary h-screen flex items-center gap-20 text-center flex-col py-6'>
					{/* logo */}
					<div className='flex justify-between items-center gap-10'>
						<div className='w-36'>
							<Link>
								<img src={Logo} alt='' className='' />
							</Link>
						</div>
						<div>
							<FaTimes />
						</div>
					</div>

					{/* profile */}
					<div className='text-white flex flex-col justify-center items-center'>
						{/* image */}
						<div className='w-16 rounded-full border-2 border-white aspect-square overflow-hidden'>
							<img className='block w-full' src={Img} alt='' />
						</div>

						<h1>John Doe</h1>
						<p>johndoe@gmail.com</p>
					</div>

					{/* links */}
					<div className='flex flex-col justify-between h-full'>
						<div className=''>
							<Link className='flex items-center gap-3 text-colorPrimary bg-white px-5 py-2 rounded-lg'>
								<FaList />
								<p>Dashboard</p>
							</Link>
							<Link className='flex items-center mt-5 gap-3 text-white hover:bg-white hover:text-colorPrimary px-5 py-2 rounded-lg'>
								<FaAddressCard />
								<p>Transaction History</p>
							</Link>
							<Link className='flex items-center text-white hover:bg-white hover:text-colorPrimary mt-5 gap-3 px-5 py-2 rounded-lg'>
								<FaVideo />
								<p>Settings</p>
							</Link>
						</div>
						{/* Logout */}
						<div className=''>
							<Link className='flex items-center text-white mt-5 gap-3 px-5 py-2 rounded-lg'>
								<FaSignOutAlt />
								<p>Logout</p>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* image */}
			<div
				onClick={() => setNav(true)}
				className=' absolute md:hidden w-10 rounded-full border-2 border-white aspect-square overflow-hidden cursor-pointer z-10'>
				<img className='block w-full' src={Img} alt='' />
			</div>

			{/* mobile view */}
			<div className={nav ? 'md:hidden w-full' : ''}>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-full bg-colorPrimary h-screen flex items-center gap-20 text-center flex-col py-6 z-50 ease-out duration-700'
							: 'fixed top-0 left-[-100%] bg-colorPrimary w-full h-screen flex items-center gap-20 text-center flex-col py-6 ease-in duration-700 z-50'
					}>
					{/* logo */}
					<div className='flex justify-between items-center gap-10'>
						<div className='w-36'>
							<Link>
								<img src={Logo} alt='' className='' />
							</Link>
						</div>
						<div onClick={() => setNav(false)}>
							<FaTimes />
						</div>
					</div>

					{/* profile */}
					<div className='text-white flex flex-col justify-center items-center'>
						{/* image */}
						<div className='w-16 rounded-full border-2 border-white aspect-square overflow-hidden'>
							<img className='block w-full' src={Img} alt='' />
						</div>

						<h1>John Doe</h1>
						<p>johndoe@gmail.com</p>
					</div>

					{/* links */}
					<div className='flex flex-col justify-between h-full'>
						<div className=''>
							<Link className='flex items-center gap-3 text-colorPrimary bg-white px-5 py-2 rounded-lg'>
								<FaList />
								<p>Dashboard</p>
							</Link>
							<Link className='flex items-center mt-5 gap-3 text-white hover:bg-white hover:text-colorPrimary px-5 py-2 rounded-lg'>
								<FaAddressCard />
								<p>Transaction History</p>
							</Link>
							<Link className='flex items-center text-white hover:bg-white hover:text-colorPrimary mt-5 gap-3 px-5 py-2 rounded-lg'>
								<FaVideo />
								<p>Settings</p>
							</Link>
						</div>
						{/* Logout */}
						<div className=''>
							<Link className='flex items-center text-white mt-5 gap-3 px-5 py-2 rounded-lg'>
								<FaSignOutAlt />
								<p>Logout</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashSidebar;
