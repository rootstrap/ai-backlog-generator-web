import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import logo from '@/public/icons/rs_logo.svg';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'AI Backlog Generator',
	description: 'Generate your backlog with powerful AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${inter.variable}`}>
			<head>
				<link rel='icon' type='image/svg+xml' href='/icons/rs_logo.svg' />
			</head>
			<body>
				<div className='w-full h-full min-h-screen bg-background text-dark'>
					<header className='bg-background border-b border-gray-500'>
						<div className='max-w-7xl mx-auto w-full flex gap-3 items-baseline px-8 py-4'>
							<Image src={logo} alt='rootstrap' width={30} />
							<p className='font-bold text-primary'>Backlog Generator</p>
						</div>
					</header>
					<main className='p-4 h-full max-w-7xl mx-auto w-full sm:p-8'>{children}</main>
				</div>
			</body>
		</html>
	);
}
