import Image from 'next/image'
import Link from 'next/link'
import Headshot from '/public/Headshot.png'

export default function Home() {
  return (
    <>
      <section className='grid sm:flex items-center gap-4'>
        <div className='grid gap-4 text-center'>
          <h1 className='text-6xl font-extrabold tracking-tight'>Hello! I&apos;m Joe</h1>

          <p>I want to be your choice in candidate for Berkeley County Assessor.</p>

          <Link href='#' className='btn btn-primary w-fit justify-self-center'>
            Learn More
          </Link>
        </div>
        <Image src={Headshot} alt='Joseph Trenary' className='' priority />
      </section>
    </>
  )
}
