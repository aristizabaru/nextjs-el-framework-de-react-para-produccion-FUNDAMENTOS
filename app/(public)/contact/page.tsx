import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Descripción de contacto',
};

export default function ContactPage () {
    return (
        <span className='text-7xl'>Contact Page</span>
    );
};
