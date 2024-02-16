import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../Heading'
import { Section } from './Section'
import Headshot from '/public/Headshot.png'

export const Hero = () => {
  return (
    <Section id='meet-joe'>
      <div className='grid sm:grid-flow-col place-items-center gap-8'>
        <div className='grid gap-4 text-center place-items-center'>
          <Heading size='h1'>Hello! I&apos;m Joe</Heading>

          <p>I want to be your choice in candidate for Berkeley County Assessor.</p>

          <Link href='#platform' className='btn btn-primary w-fit justify-self-center '>
            Learn More
          </Link>
        </div>
        <div className='glow rounded-full relative bg-base-100 order-first sm:order-last'>
          <Image src={Headshot} alt='Joseph Trenary' priority />
        </div>
      </div>
    </Section>
  )
}
