'use client'
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useTimerStore } from '@/store/zustand';

export default function Home() {
	const { setTime } = useTimerStore();
	return (
		<main className='flex grow items-center justify-center'>
			<Card className='w-[380px]'>
				<CardHeader>
					<CardTitle>Welcome to Dormiq!</CardTitle>
					<CardDescription>
					Ready for a challenge? See if you can spot the difference between a dorm room and a prison cell! 🕵️‍♂️
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<Link href='/play' className='w-full'>
						<Button
							className='w-full bg-green-700 transition duration-200 hover:bg-green-600'
							onClick={() => setTime(new Date())}
						>
							Start <MoveRight className='ml-2 h-4 w-4' />
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
