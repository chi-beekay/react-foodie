import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
	const cates = [
		{
			id: 1,
			cate: 'Turkey',
		},
		{
			id: 2,
			cate: 'Jollof',
		},
		{
			id: 3,
			cate: 'Local Food',
		},
		{
			id: 4,
			cate: 'Snacks',
		},
		{
			id: 5,
			cate: 'Healthy',
		},
		{
			id: 6,
			cate: 'Traditional',
		},
		{
			id: 7,
			cate: 'Sea Food',
		},
	];

	return (
		<div className='w-full'>
			<div className='width conPad'>
				<div className='conH2'>
					<h2>Top Category</h2>
				</div>

				{/* buttons */}
				<div className='flex flex-wrap items-center justify-center gap-10 md:px-10 lg:px-32'>
					{/* button */}
					{cates.map(({ id, cate }) => (
						<Link>
							<div
								key={id}
								className='bg-colorPrimary border-2 border-colorPrimary hover:bg-white hover:border-2 hover:border-colorPrimary hover:text-colorPrimary text-white w-32 px-8 py-6 rounded-3xl'>
								<div className='flex items-center justify-center text-xs font-bold '>
									{cate}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Category;
