import { Award, Trophy, Medal, Fish } from 'lucide-react';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
type Props = {
	accuracy: number;
	correct_answers: number;
	wrong_answers: number;
};

const ResultsCard = ({ accuracy, correct_answers, wrong_answers }: Props) => {
	return (
		<Card className='md:col-span-8'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-7'>
				<CardTitle className='text-2xl font-bold'>Results</CardTitle>
				<Award />
			</CardHeader>
			<CardContent className='flex flex-col items-center justify-center'>
				{accuracy > 75 ? (
					<>
						<Trophy className='mr-4' stroke='gold' size={50} />
						<div className='flex flex-col text-2xl font-semibold text-yellow-400'>
							<span className=''>Impressive!</span>
							<span className='text-sm text-center text-black dark:text-white opacity-50'>
								{'> 75% accuracy'}
							</span>
						</div>
					</>
				) : accuracy > 25 ? (
					<>
						<Medal className='mr-4' stroke='silver' size={50} />
						<div className='flex flex-col text-2xl font-semibold text-stone-400'>
							<span className=''>Good job!</span>
							<span className='text-sm text-center text-black dark:text-white opacity-50'>
								{'> 25% accuracy'}
							</span>
						</div>
					</>
				) : (
					<>
						<Fish className='mr-4' stroke='brown' size={50} />
						<div className='flex flex-col text-2xl font-semibold text-yellow-800'>
							<span className=''>At least you tried!</span>
							<span className='text-sm text-center text-black dark:text-white opacity-50'>
								{'< 25% accuracy'}
							</span>
						</div>
					</>
				)}
			</CardContent>
			<CardFooter className='text-sm flex font-semibold'>
				<p>
					Ta-da! 🎉 Your scorecard reveals {correct_answers} right answers and{' '}
					{wrong_answers} not-so-right ones.
				</p>
			</CardFooter>
		</Card>
	);
};

export default ResultsCard;
