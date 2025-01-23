import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.css';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'Hyperhire - Your trusted staffing & development partner',
    description: 'Best IT recruitment & software development firm in South Korea and India.',
    keywords: [
        '개발',
        '해외개발자',
        '프로젝트',
        'web3',
        'AI개발',
        '인도개발자',
        'SI',
        'PM',
        '외주개발',
        '하이퍼하이어',
        '채용외주',
        '3D',
        '모델링',
        '3D모델링',
        '단기프로젝트',
        'hyperhire',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(poppins.variable)}>
            <body className="min-h-dvh bg-[#FBFBFB] antialiased">{children}</body>
        </html>
    );
}
