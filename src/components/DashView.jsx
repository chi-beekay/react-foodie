import React from 'react';
import DashSidebar from './dashSidebar';
import DashMain from './dashMain';

const DashView = () => {
	return (
		<div className='md:flex'>
			<DashSidebar />
			<DashMain />
		</div>
	);
};

export default DashView;
