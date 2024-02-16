import { ELECTION_DATE } from '@/lib/utils'
import { Countdown } from '../Countdown'
import { Heading } from '../Heading'
import { Section } from './Section'

export const Platform = () => {
  return (
    <Section id='platform' className='bg-base-200/25 full-bleed full-bleed-container'>
      <div className='grid gap-4'>
        <Heading size='h2'>My Platform</Heading>

        <p>
          I am running for Berkeley County Assessor because I believe that the office can be more efficient and
          effective. I have a plan to modernize the office and make it more accessible to the people of Berkeley County.
        </p>

        <p>The election is coming up fast, in fact here's a countdown until election day:</p>

        <div className='grid place-items-center py-12'>
          <Countdown date={ELECTION_DATE} className='glow w-fit px-12 bg-base-100 p-4' />
        </div>

        <p>
          I hope to earn your vote, and I will work hard to make sure that the office is working for the people of
          Berkeley County.
        </p>
      </div>
    </Section>
  )
}
