import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
			<body>{children}</body>
		</html>
	);
}
