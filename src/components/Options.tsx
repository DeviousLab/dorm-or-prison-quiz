'use client';
import { useQuery } from 'convex/react';
import { useState, useEffect, useMemo, useContext } from 'react';
import { ChevronRight, Timer } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { differenceInSeconds } from 'date-fns';

import { api } from '../../convex/_generated/api';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button, buttonVariants } from './ui/button';
import OptionsCounter from './OptionsCounter';
import { formatTimeDelta } from '@/lib/utils';
import { useTimerStore } from '@/store/zustand';

const Options = () => {
	const rooms = useQuery(api.rooms.get)
	const totalQuestions = 10;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [correctAnswersScore, setCorrectAnswersScore] = useState<number>(0);
	const [wrongAnswersScore, setWrongAnswersScore] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
	const [hasEnded, setHasEnded] = useState<boolean>(false)
	const [currentTime, setCurrentTime] = useState<Date>(new Date())
	const { time: startTime } = useTimerStore()

	useEffect(() => {
	const interval = setInterval(() => {
		if (!hasEnded) {
			setCurrentTime(new Date())
		}
	}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [hasEnded])
	console.log(startTime, currentTime, hasEnded)

	const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

	const router = useRouter();

	const handleOnAnswerClick = (
		answer: string,
		currentQuestionIndex: number
	) => {
		if (isQuestionAnswered) return;
		const isCorrect = rooms![currentQuestionIndex].type === answer;
		if (isCorrect) {
			setCorrectAnswersScore((prev) => prev + 1);
		} else {
			setWrongAnswersScore((prev) => prev + 1);
		}
		setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
	};

	const handleChangeQuestion = (step: number) => {
		const nextQuestionIndex = currentQuestionIndex + step;
		if (nextQuestionIndex < 0 || nextQuestionIndex >= totalQuestions) return;

		setCurrentQuestionIndex(nextQuestionIndex);
	};
	return rooms && (
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
						{formatTimeDelta(differenceInSeconds(currentTime, startTime))}
					</div>
				</div>
				<OptionsCounter correct_answers={correctAnswersScore} wrong_answers={wrongAnswersScore} />
			</div>
			<Card className='w-full mt-4'>
				<CardHeader className='flex flex-row items-center'>
					<CardTitle className='mr-5 text-center divide-y divide-zinc-600/50'>
						<div>{currentQuestionIndex + 1}</div>
						<div className='text-base text-slate-400'>{totalQuestions}</div>
					</CardTitle>
					<CardContent className='grow flex justify-center'>
						{rooms && (
							<Image
								src={rooms[currentQuestionIndex].url as string}
								height={500}
								width={500}
								alt='Image of room'
							/>
						)}
					</CardContent>
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
					onClick={
						currentQuestionIndex === totalQuestions - 1
							? () => router.push('/')
							: () => handleChangeQuestion(1)
					}
				>
					{currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
					<ChevronRight className='w-4 h-4 ml-2' />
				</Button>
			</div>
		</div>
	);
};

export default Options;
