import Link from 'next/link';
import React from 'react';

import { ModeToggle } from '@/components/ThemeToggle';

type Props = {};

const Navbar = async (props: Props) => {
	return (
		<header className='bg-white dark:bg-gray-950 text-black dark:text-white h-fit border-b border-zinc-300 py-2 '>
			<div className='flex items-center justify-between h-full gap-2 px-8 mx-auto'>
				{/* Logo */}
				<Link href={'/'} className='flex items-center justify-center'>
					<p className='rounded-xl border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
						Dormiq
					</p>
				</Link>
				<div className='flex justify-end'>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
