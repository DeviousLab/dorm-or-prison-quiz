import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';

type Props = {
	correct_answers: number;
	wrong_answers: number;
};

const MCQCounter = ({ correct_answers, wrong_answers }: Props) => {
	return (
		<Card className='flex flex-row items-center justify-center p-2'>
			<CheckCircle2 color='green' size={30} />
			<motion.span
				key={`correct_${correct_answers}`}
				variants={variants}
				animate={'show'}
				initial='hide'
				className='mx-3 text-2xl text-[green]'
			>
				{correct_answers}
			</motion.span>

			<Separator orientation='vertical' />

			<motion.span
				key={`wrong_${wrong_answers}`}
				variants={variants}
				animate={'show'}
				initial='hide'
				className='mx-3 text-2xl text-[red]'
			>
				{wrong_answers}
			</motion.span>
			<XCircle color='red' size={30} />
		</Card>
	);
};

export const variants = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.3,
		},
	},
	hide: {
		y: -20,
		opacity: 0,
	},
};

export default MCQCounter;
