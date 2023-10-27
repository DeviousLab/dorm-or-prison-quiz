import { MoveRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type CardProps = React.ComponentProps<typeof Card>;

export default function Home() {
	return (
		<main className='flex grow items-center justify-center'>
			<Card className='w-[380px]'>
				<CardHeader>
					<CardTitle>Welcome to Dormiq!</CardTitle>
					<CardDescription>Can you figure out which image is a UK dorm room or a prison cell?</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className='w-full bg-green-600 transition duration-200 hover:bg-green-800'>
						Start <MoveRight className='ml-2 h-4 w-4' />
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
