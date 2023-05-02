import React from 'react';
import Img from '../assets/img-1.jpg';

const Testimonial = () => {
	const tests = [
		{
			id: 1,
			test: 'My experience using Foodie Xpress was easy because every transaction I made was not as difficult as expected at first.',
			name: 'John Jason Doe',
		},
		{
			id: 2,
			test: 'My experience using Foodie Xpress was easy because every transaction I made was not as difficult as expected at first.',
			name: 'Jack Jason Doe',
		},
		{
			id: 3,
			test: 'My experience using Foodie Xpress was easy because every transaction I made was not as difficult as expected at first.',
			name: 'Jane Jason Doe',
		},
	];
	return (
		<div className='w-full'>
			<div className='width pb-24'>
				<div className=' conPad'>
					<div className='conH2'>
						<h2>Our User Testimonials</h2>
					</div>
				</div>

				<div className='flex flex-col sm:mx-4 md:grid md:grid-cols-2 md:mx-4 lg:flex lg:flex-row gap-10 lg:gap-7 '>
					{tests.map(({ id, test, name }) => (
						<div
							key={id}
							className='bg-colorPrimary rounded-[2rem] p-10 text-white hover:scale-110 ease-in-out duration-1000'>
							<p className=''>{test}</p>
							<div className='flex items-center gap-7 mt-8'>
								<div className='w-12 rounded-full aspect-square overflow-hidden'>
									<img className='block w-full' src={Img} alt='' />
								</div>
								<p className=''>{name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
