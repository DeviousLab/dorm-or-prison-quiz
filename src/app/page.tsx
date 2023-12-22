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

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props) {
	const correct_answers = parseInt(searchParams.correct_answers as string);
	const accuracy = (correct_answers / 10) * 100;
	const ogUrl = new URL('https://dormiq.vercel.app/og');
	ogUrl.searchParams.set('accuracy', accuracy.toString());

	return {
		description: "Can you figure out if it's a prison cell or a dorm room?",
		url: 'https://dormiq.vercel.app',
		openGraph: {
			url: 'https://dormiq.vercel.app',
			images: [
				{
					url: ogUrl.toString(),
					width: 1200,
					height: 630,
					alt: 'DormIQ | Statistics',
				},
			],
		},
		twitter: {
			title: 'DormIQ | Dorm or Prison Quiz',
			description: "Can you figure out if it's a prison cell or a dorm room?",
			cardType: 'summary_large_image',
			images: [
				{
					url: ogUrl.toString(),
					width: 1200,
					height: 630,
					alt: 'DormIQ | Statistics',
				},
			],
		},
	};
}

export default function Home() {
	return (
		<main className='flex grow items-center justify-center'>
			<Card className='w-[380px]'>
				<CardHeader>
					<CardTitle>Welcome to DormIQ!</CardTitle>
					<CardDescription>
					Ready for a challenge? See if you can spot the difference between a dorm room and a prison cell! 🕵️‍♂️
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<Link href='/play' className='w-full'>
						<Button
							className='w-full bg-green-700 transition duration-200 hover:bg-green-600'
						>
							Start <MoveRight className='ml-2 h-4 w-4' />
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
