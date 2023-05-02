import React from 'react';
import heroImg from '../assets/hero.png';
import absImg from '../assets/abs.png';

const Hero = () => {
	return (
		<div className='w-full'>
			<div className='relative width flex flex-col-reverse md:flex-row md:py-36'>
				{/* Hero text */}
				<div>
					<div className=' mt-5 lg:mt-8'>
						<h1 className=' font-extrabold font-monts xstext-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem]'>
							Delivering Satisfaction
						</h1>
						<h1 className=' font-monts text-colorPrimary text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] mt-4 font-extrabold'>
							Every day
						</h1>
						<div className=' w-36'>
							<img className='w-full' src={absImg} alt='' />
						</div>
						<p className='text-sm xs:text-lg sm:text-2xl md:text-2xl font-semibold mt-5 lg:mt-7'>
							Browse Restaurants Near You
						</p>
						{/* Address input */}
						<div className=' flex items-center  bg-colorPrimary w-fit px-3 py-2 rounded-3xl text-white'>
							<input
								className=' bg-transparent w-[50%] sm:w-fit md:w-[50%]  outline-none placeholder:text-white placeholder:text-sm'
								type='text'
								name='address'
								placeholder='Enter Address'
								id=''
							/>
							<p className='hidden text-xs xs:flex justify-end w-full xs:text-sm '>
								Use current location
							</p>
						</div>
					</div>
				</div>

				{/* Hero image */}
				<div className=' md:absolute right-0 top-0 md:w-[50%] '>
					{/* Background circle */}
					<div className=' absolute top-12 left-12 xs:left-16 sm:left-20 -z-30 bg-colorPrimary/10 aspect-square w-[70%] rounded-full'></div>
					{/* Image */}
					<div className='w-[95%]'>
						<img className='w-full' src={heroImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
