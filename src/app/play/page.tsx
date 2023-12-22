'use client'

import Options from '@/components/Options';
import { useTimerStore, useGameEndStore } from '@/store/zustand';
import { useEffect } from 'react';

export default function Play() {
	const { setTime } = useTimerStore();
	const { setGameEnd } = useGameEndStore();

	useEffect(() => {
		setTime(new Date());
		setGameEnd(false);
	}, [setTime]);
	
	return (
		<main className='flex grow items-center justify-center'>
			<Options />
		</main>
	);
}
