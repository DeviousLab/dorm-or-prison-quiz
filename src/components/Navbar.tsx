import Link from 'next/link';
import Image from 'next/image';

import { ModeToggle } from '@/components/ThemeToggle';
import Logo from '@/app/Designer.png'

const Navbar = async () => {
	return (
		<header className='bg-white dark:bg-gray-950 text-black dark:text-white h-fit border-b border-zinc-300 py-2 '>
			<div className='flex items-center justify-between h-full gap-2 px-8 mx-auto'>
				<Link href={'/'}>
					<p className="flex items-center rounded-xl font-roboto border-2 border-b-4 border-r-4 border-[#3FB6C4] px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]">
					<Image src={Logo} alt="" height={25} className='mr-2' />
						DormIQ
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
