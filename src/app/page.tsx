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

export default function Home() {
	
	return (
		<main className='flex grow items-center justify-center'>
			<Card className='w-[380px]'>
				<CardHeader>
					<CardTitle>Welcome to Dormiq!</CardTitle>
					<CardDescription>
						Can you figure out which image is a UK dorm room or a prison cell?
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<Link href='/play' className='w-full'>
						<Button className='w-full bg-green-700 transition duration-200 hover:bg-green-600'>
							Start <MoveRight className='ml-2 h-4 w-4' />
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
