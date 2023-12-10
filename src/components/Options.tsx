'use client';
import { useQuery } from 'convex/react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronRight, Timer } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { differenceInSeconds } from 'date-fns';
import { motion } from 'framer-motion';

import { api } from '../../convex/_generated/api';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import OptionsCounter from './OptionsCounter';
import { formatTimeDelta } from '@/lib/utils';
import { useTimerStore, useGameEndStore } from '@/store/zustand';
import Skeleton from './Skeleton';

const Options = () => {
	const seedNumber = useRef(Math.floor(Math.random() * 100));
	const rooms = useQuery(api.rooms.get, { seedNumber: seedNumber.current });
	const totalQuestions = 10;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [correctAnswersScore, setCorrectAnswersScore] = useState<number>(0);
	const [wrongAnswersScore, setWrongAnswersScore] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
	const [currentTime, setCurrentTime] = useState<Date>(new Date());
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const { time: startTime, setTime } = useTimerStore();
	const { gameEnd: hasEnded, setGameEnd: setHasEnded } = useGameEndStore();

	useEffect(() => {
		setTime(new Date());
	}, [setTime]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!hasEnded) {
				setCurrentTime(new Date());
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [hasEnded]);

	const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

	const router = useRouter();
	const searchParams = useSearchParams()!;

	const handleOnAnswerClick = (
		answer: string,
		currentQuestionIndex: number
	) => {
		if (isQuestionAnswered) return;
		const result = rooms![currentQuestionIndex].type === answer;
		setIsCorrect(result);
		if (result) {
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

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const key = e.key;

			if (key === '1') {
				handleOnAnswerClick('dorm', currentQuestionIndex);
			} else if (key === '2') {
				handleOnAnswerClick('prison', currentQuestionIndex);
			} else if (key === 'Enter' && isQuestionAnswered) {
				if (currentQuestionIndex === totalQuestions - 1) {
					setHasEnded(true);
					router.push(
						'/scoreboard' +
							'?' +
							createQueryString('correct_answers', `${correctAnswersScore}`) +
							'&' +
							createQueryString('wrong_answers', `${wrongAnswersScore}`) +
							'&' +
							createQueryString(
								'time_taken',
								`${differenceInSeconds(currentTime, startTime)}`
							)
					);
				}
				handleChangeQuestion(1);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleChangeQuestion, handleOnAnswerClick, currentQuestionIndex]);

	return rooms ? (
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
				<OptionsCounter
					correct_answers={correctAnswersScore}
					wrong_answers={wrongAnswersScore}
				/>
			</div>
			<Card className='w-full mt-4'>
				<CardHeader className='flex flex-row items-center'>
					<CardTitle className='mr-5 text-center text-lg divide-y divide-zinc-600/50'>
						<div>{currentQuestionIndex + 1}</div>
						<div className='text-base text-slate-400'>{totalQuestions}</div>
					</CardTitle>
					<CardContent className='grow flex justify-center'>
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.2 }}
							key={rooms[currentQuestionIndex].url}
						>
							{rooms && (
								<Image
									src={rooms[currentQuestionIndex].url as string}
									height={200}
									width={500}
									alt='Image of room'
									className={`h-[26rem] w-auto ${
										isQuestionAnswered
											? isCorrect
												? 'border-8 border-green-500 rounded-t-md transition duration-150 ease-in'
												: 'border-8 border-red-500 rounded-t-md transition duration-150 ease-in'
											: 'border-none rounded-t-md'
									}`}
									priority
								/>
							)}
							<CardDescription
								className={`text-center pt-1 pb-2 z-10 ${
									isQuestionAnswered
										? isCorrect
											? 'visible bg-green-500 rounded-b-md text-black transition duration-150 ease-in'
											: 'visible bg-red-500 rounded-b-md text-black transition duration-150 ease-in'
										: 'invisible bg-none rounded-b-md text-black'
								}`}
							>
								{rooms[currentQuestionIndex].title}
							</CardDescription>
						</motion.div>
					</CardContent>
				</CardHeader>
			</Card>
			<div className='flex flex-row items-center justify-center w-full mt-4'>
				<Button
					className='justify-start mx-4 py-8 mb-4'
					onClick={() => handleOnAnswerClick('dorm', currentQuestionIndex)}
					disabled={isQuestionAnswered}
				>
					<div className='flex items-center justify-start'>
						<div className='p-2 px-3 mr-5 border rounded-md'>1</div>
						<div className='text-start'>Dorm Room</div>
					</div>
				</Button>
				<Button
					className='justify-start mx-4 py-8 mb-4'
					onClick={() => handleOnAnswerClick('prison', currentQuestionIndex)}
					disabled={isQuestionAnswered}
				>
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
							? () => {
									setHasEnded(true);
									router.push(
										'/scoreboard' +
											'?' +
											createQueryString(
												'correct_answers',
												`${correctAnswersScore}`
											) +
											'&' +
											createQueryString(
												'wrong_answers',
												`${wrongAnswersScore}`
											) +
											'&' +
											createQueryString(
												'time_taken',
												`${differenceInSeconds(currentTime, startTime)}`
											)
									);
							  }
							: () => handleChangeQuestion(1)
					}
					disabled={!isQuestionAnswered}
				>
					{currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
					<ChevronRight className='w-4 h-4 ml-2' />
				</Button>
			</div>
		</div>
	) : (
		<Skeleton />
	);
};

export default Options;
