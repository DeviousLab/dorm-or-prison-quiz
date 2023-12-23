import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import ConvexClientProvider from '@/components/providers/ConvexClientProvider';
import Script from 'next/script';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://dormiq.xyz/'),
	title: 'DormIQ | Dorm or Prison Quiz',
	description: "Can you figure out if it's a prison cell or a dorm room?",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Script
				async
				src='https://eu.umami.is/script.js'
				data-website-id='753d203b-1155-44e7-8d83-ba9233835060'
				strategy='beforeInteractive'
			/>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<ConvexClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<div className='flex min-h-screen flex-col'>
							<Navbar />
							{children}
							<Footer />
						</div>
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
