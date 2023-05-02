import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
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
			link: 'FAQs',
		},
		{
			id: 4,
			link: 'Blog',
		},
		{
			id: 5,
			link: 'Security',
		},
	];
	return (
		<div className='w-full bg-colorCheck'>
			<div className='width py-20'>
				<div>
					{/* logo */}
					<div className=''>
						<Link>
							<img src={Logo} alt='' className=' w-[35%] md:w-[16%]' />
						</Link>
					</div>

					<div className='flex flex-col gap-10 text-center items-center justify-center sm:flex-row sm:flex-wrap sm:justify-between sm:items-baseline'>
						{/* hands */}
						<div className='mt-10'>
							<h2 className='h2'>Lets Join Hands</h2>

							<ul>
								<li className=' li'>
									<Link to=''>Careers</Link>
								</li>
								<li className=' li'>
									<Link to=''>Foodie Xpress Partners</Link>
								</li>
								<li className=' li'>
									<Link to=''>Couriers</Link>
								</li>
							</ul>
						</div>
						{/* links */}
						<div>
							<h2 className='h2'>Links</h2>

							<ul>
								{links.map(({ id, link }) => (
									<li className=' li' key={id}>
										<Link to=''>{link}</Link>
									</li>
								))}
							</ul>
						</div>
						{/* social media */}
						<div>
							<h2 className='h2'>Social Media</h2>
							<ul>
								<li className=' li'>
									<Link to=''>Facebook</Link>
								</li>
								<li className=' li'>
									<Link to=''>Instagram</Link>
								</li>
								<li className=' li'>
									<Link to=''>Twitter</Link>
								</li>
							</ul>
						</div>
						{/* terms */}
						<div className=''>
							<div className=''>
								<ul>
									<li className=' li'>
										<Link to=''>Terms & Conditions</Link>
									</li>
									<li className=' li'>
										<Link to=''>Private Policy</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
