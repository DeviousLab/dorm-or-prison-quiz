import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

const QuestionDisplay = () => {
  
	return (
		<Card className='w-full mt-4'>
			<CardHeader className='flex flex-row items-center'>
				<CardTitle className='mr-5 text-center divide-y divide-zinc-600/50'>
					<div>1</div>
					<div className='text-base text-slate-400'>10</div>
				</CardTitle>
				<CardDescription className='flex-grow text-lg'>
					What is this
				</CardDescription>
        {/* <Image src={rooms.url} placeholder='' width={500} alt='Image of room'/> */}
			</CardHeader>
		</Card>
	);
};

export default QuestionDisplay;
