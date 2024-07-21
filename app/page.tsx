import Link from 'next/link';

export default function Home () {
  return (
    <main className="flex flex-col items-center p-24">
      <span className='text-5xl'>Welcome to Next</span>
      <Link href='/about' className='mt-4' >Enter Site</Link>
    </main>
  );
}
