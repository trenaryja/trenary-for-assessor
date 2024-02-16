import { Heading } from '../Heading'
import { Section } from './Section'

export const Platform = () => {
  return (
    <Section id='platform' className='bg-base-200/50 full-bleed full-bleed-container'>
      <div className='grid gap-4'>
        <Heading size='h2'>My Platform</Heading>
        <p>
          I am running for Berkeley County Assessor because I believe that the office can be more efficient and
          effective. I have a plan to modernize the office and make it more accessible to the people of Berkeley County.
        </p>
      </div>
    </Section>
  )
}
