import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex
      flex-col
      items-center
      justify-center
      gap-8
      p-24
      bg-[url('/beauty-bg.jpg')] bg-cover
      h-[70vh]
      bg-height
      border-0">
      <h1 className='
        text-cosnova-red
        font-bold
        text-6xl
        text-center
      '>It&rsquo;s not magic.<br/> It&rsquo;s makeup!</h1>
      <Link href="/list" className='px-8 py-4 bg-cosnova-red text-white font-bold bg-height hover:bg-cosnova-red/70'>Get Started</Link>
    </main>
  )
}
