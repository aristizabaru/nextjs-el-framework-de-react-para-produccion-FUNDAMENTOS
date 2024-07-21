import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Descripción de About',
    keywords: [ 'About Page', 'Andrés' ],
};

export default function AboutPage () {
    return (
        <span className='text-7xl'>About Page</span>
    );
};
