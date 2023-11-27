import React from 'react';

const Skeleton = () => {
	return (
		<div className='md:w-[80vw] max-w-4xl w-[90vw] animate-pulse'>
			<div className='flex flex-row justify-center'>
				<div className='h-80 bg-gray-200 w-2/3 rounded-md'></div>
			</div>
			<div className='flex flex-row items-center justify-center w-full mt-4'>
				<div className='justify-start mx-4 py-8 mb-2'>
					<div className='flex items-center justify-start'>
						<div className='p-3 px-16 mr-5 rounded-md h-12 bg-gray-200 w-8'></div>
					</div>
				</div>
				<div className='justify-start mx-4 py-8 mb-2'>
					<div className='flex items-center justify-start'>
						<div className='p-3 px-16 mr-5 rounded-md h-12 bg-gray-200 w-8'></div>
					</div>
				</div>
			</div>
			<div className='flex flex-row items-center justify-center w-full'>
				<div className='justify-start mx-4 py-4'>
					<div className='flex items-center justify-start'>
						<div className='p-3 px-14 mr-5 rounded-md h-12 bg-gray-200 w-8'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skeleton;
