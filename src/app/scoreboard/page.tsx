import Statistics from '@/components/Statistics';

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
const StatisticsPage = () => {
	return (
		<>
			<Statistics />
		</>
	);
};

export default StatisticsPage;
