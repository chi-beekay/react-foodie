import React from 'react';
import DashMainHead from './DashMainHead';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import Food1 from '../assets/food-1.jpg';
import Food2 from '../assets/food-2.jpg';
import Food3 from '../assets/img-2.jpg';
import Food4 from '../assets/img-2.jpg';
import Food5 from '../assets/img-3.jpg';
import Food6 from '../assets/img-4.jpg';

const DashMain = () => {
	const grids = [
		{
			id: 1,
			h1: 'KFC',
			src: Food1,
			img: <HiHeart />,
		},
		{
			id: 2,
			h1: 'CHICKEN REPUBLIC',
			src: Food2,
			img: <HiOutlineHeart />,
		},
		{
			id: 3,
			h1: 'AMALA SKY',
			src: Food3,
			img: <HiOutlineHeart />,
		},
		{
			id: 4,
			h1: 'KILIMANJARO',
			src: Food4,
			img: <HiOutlineHeart />,
		},
		{
			id: 5,
			h1: 'OLA MUMMY',
			src: Food5,
			img: <HiOutlineHeart />,
		},
		{
			id: 6,
			h1: 'OFADA SPOT',
			src: Food6,
			img: <HiOutlineHeart />,
		},
	];

	return (
		<div className='md:w-[70%] lg:w-[75%] absolute right-0'>
			<div className='p-6'>
				<div>
					<DashMainHead />

					{/* main */}
					<div>
						<div className=' border px-10 py-4 rounded-3xl'>
							<h1>Vendors</h1>

							{/* Grids */}
							<div className='grid sm:grid-cols-2 gap-5 lg:gap-7 lg:grid-cols-3'>
								{/* grid sub content */}
								{/* map through links of array */}
								{grids.map(({ id, h1, src, img }) => (
									<div key={id}>
										<div className=' aspect-[2/1.5] overflow-hidden rounded-[2rem]'>
											<img className='w-full' src={src} alt='' />
										</div>
										<h2 className='font-bold text-xl mt-2'>{h1}</h2>
										<p className='flex items-center gap-1'>
											{img} 87%
											<span className=' text-lightGray'> (791)</span>
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashMain;
