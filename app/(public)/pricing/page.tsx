import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Descripción de pricing',
};

export default function PricingPage () {
    return (
        <span className='text-7xl'>Pricing Page</span>
    );
};
