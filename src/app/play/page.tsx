'use client'

import Options from '@/components/Options';
import { useTimerStore } from '@/store/zustand';
import { useEffect } from 'react';

export default function Play() {
	const { setTime } = useTimerStore();

	useEffect(() => {
		setTime(new Date());
	}, [setTime]);
	
	return (
		<main className='flex grow items-center justify-center'>
			<Options />
		</main>
	);
}
