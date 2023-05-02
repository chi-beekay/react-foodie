import React from 'react';

const ImgToggle = (props) => {
	// const toggleNav = props;
	return (
		<div>
			<div
				// onClick={toggleNav}
				className=' md:hidden w-10 rounded-full border-2 border-white aspect-square overflow-hidden cursor-pointer'>
				<img className='block w-full' src={Img} alt='' />
			</div>
		</div>
	);
};

export default ImgToggle;
