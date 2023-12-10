import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-gray-950 text-black dark:text-white z-[10] border-t border-zinc-300 pt-2'>
			<div className='container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row'>
				<p className='text-sm text-black dark:text-white'>Made with h8.</p>
				<div className='flex -mx-2'>
					<Link
						href='https://github.com/DeviousLab/dorm-or-prison-quiz'
						className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
						aria-label='Github'
					>
						<Github />
					</Link>
					<Link
						href='https://twitter.com/DeviousLab'
						className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
						aria-label='Twitter'
					>
						<Twitter />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
