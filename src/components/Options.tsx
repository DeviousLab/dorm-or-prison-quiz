'use client';

import { useState, useEffect, useMemo } from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from './ui/button';
import { ChevronRight, Timer } from 'lucide-react';
import OptionsCounter from './OptionsCounter';

const MCQ = () => {

	return (
		<div className='md:w-[80vw] max-w-4xl w-[90vw]'>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col'>
					<p>
						<span className='px-2 py-1 text-white rounded-lg bg-slate-800'>
							Dorm Room or Prison Cell?
						</span>
					</p>
					<div className='flex self-start mt-3 text-slate-400'>
						<Timer className='mr-2' />
						00:00
					</div>
				</div>
				<OptionsCounter
					correct_answers={0}
					wrong_answers={0}
				/>
			</div>
			<Card className='w-full mt-4'>
				<CardHeader className='flex flex-row items-center'>
					<CardTitle className='mr-5 text-center divide-y divide-zinc-600/50'>
						<div>1</div>
						<div className='text-base text-slate-400'>10</div>
					</CardTitle>
					<CardDescription className='flex-grow text-lg'>
						What is this
					</CardDescription>
				</CardHeader>
			</Card>
			<div className='flex flex-row items-center justify-center w-full mt-4'>
				<Button className='justify-start mx-4 py-8 mb-4'>
					<div className='flex items-center justify-start'>
						<div className='p-2 px-3 mr-5 border rounded-md'>1</div>
						<div className='text-start'>Dorm Room</div>
					</div>
				</Button>
				<Button className='justify-start mx-4 py-8 mb-4'>
					<div className='flex items-center justify-start'>
						<div className='p-2 px-3 mr-5 border rounded-md'>2</div>
						<div className='text-start'>Prison Cell</div>
					</div>
				</Button>
			</div>
			<div className='flex items-center justify-center'>
				<Button
					variant='default'
					className='mt-2'
					size='lg'
				>
					Next <ChevronRight className='w-4 h-4 ml-2' />
				</Button>
			</div>
		</div>
	);
};

export default MCQ;
