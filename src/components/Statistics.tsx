'use client';
import { redirect, useSearchParams } from 'next/navigation';

import ResultsCard from '@/components/ResultsCard';
import AccuracyCard from '@/components/AccuracyCard';
import TimeTakenCard from '@/components/TimeTakenCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RotateCcw } from 'lucide-react';

const Statistics = () => {
	const searchParams = useSearchParams();
	if (
		!searchParams.has('correct_answers') ||
		!searchParams.has('wrong_answers') ||
		!searchParams.has('time_taken')
	) {
		return redirect('/');
	}
	const correct_answers_str = searchParams.get('correct_answers');
  const wrong_answers_str = searchParams.get('wrong_answers');
	if (correct_answers_str === null || wrong_answers_str === null) {
		throw new Error('A parameter is missing');
	}
	const correct_answers = parseInt(correct_answers_str);
  const wrong_answers = parseInt(wrong_answers_str);
	const time_taken = searchParams.get('time_taken');

	let accuracy: number = 0;

	accuracy = (correct_answers / 10) * 100;
	accuracy = Math.round(accuracy * 100) / 100;

	return (
		<>
			<div className='p-8 mx-auto max-w-7xl'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Summary</h2>
				</div>

				<div className='grid gap-4 mt-4 md:grid-cols-8'>
					<ResultsCard accuracy={accuracy} correct_answers={correct_answers} wrong_answers={wrong_answers} />
					<AccuracyCard accuracy={accuracy} />
					<TimeTakenCard timeTaken={Number(time_taken)} />
          <Link href='/play' className='md:col-span-8'>
						<Button
							className='w-full transition duration-200 py-8 mb-4 text-lg'
						>
							Try again? <RotateCcw className='ml-2' size={20} />
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Statistics;
