import { ELECTION_DATE, cn } from '@/lib/utils'
import { Countdown } from '../Countdown'
import { Heading, HeadingProps } from '../Heading'
import { Section } from './Section'

const PlatformHeading = ({ size, className, ...props }: Partial<HeadingProps>) => (
  <Heading clickable size={size ?? 'h2'} className={cn('py-12', className)} {...props} />
)

export const Platform = () => {
  return (
    <Section id='platform' className='bg-base-200/25 full-bleed full-bleed-container'>
      <div className='grid gap-4'>
        <PlatformHeading>Introduction</PlatformHeading>
        <p>
          Hello. My name is Joseph Trenary and I want to be your candidate for Berkeley County Assessor in West by God
          Virginia. I am a graduate of Musselman High School and have over four years of experience running a family
          plumbing business with my father and brother. As a dedicated resident of Berkeley County, I am devoted to
          making my county and my community a better place for its residents, both new and life-long. If elected, I
          would bring a younger, fresher perspective to the county as well as an open-mindedness to work with the
          public.
        </p>

        <PlatformHeading>What is an assessor?</PlatformHeading>
        <p>
          Essentially, the assessor is an elected official who has the responsibility of evaluating all property within
          a county, including real estate and personal property, based on the rules and regulations set by state tax
          laws. An assessor can serve a continuous rotation of four-year terms, having the option to run for re-election
          during primary and general elections.
        </p>
        <p>
          In Berkeley County, the assessor's office has many different departments to meet the needs of such a populous
          area. Berkeley County is the fastest growing county in the state of West Virginia and is among the fastest
          growing counties in the country. The recent U.S. census revealed our county to have a population just south of
          130,000 residents.
        </p>

        <PlatformHeading>Goals</PlatformHeading>
        <p>
          Having spoken to many local residents, concerns have been raised about the recent increases in property
          values, causing many tax increases to citizens. One of the only tax breaks in the county is the Homestead Act,
          a $20,000 tax credit applied to the assessed value of a home. This credit saves qualified residents
          approximately $200-$250 off their annual tax bill, but for many, this is not enough. I would love the
          opportunity to work diligently with local and state officials to raise the Homestead Act to alleviate the
          strain on our elderly population who helped build this community and now live on limited income.
        </p>
        <p>
          In addition, as times have changed, so has the availability and convenience of technology. It is apparent
          there is a lack of updated technology available within the local assessor’s office. Not to mention, how many
          residents have dealt with the long lines in the office every summer? With limited parking and handicapped
          capabilities, it can make things difficult for some people to make it into the office to get assistance with
          their needs. If elected, I plan to streamline modern technology to make it simple to access our resources and
          services quickly, easily, and efficiently for the public—whether in the office or online. I would ensure that
          every taxpayer was left with outstanding customer service at every turn with a dedicated, professional, and
          knowledgeable staff to meet the needs of the public.
        </p>
        <p>
          As assessor I will be fully committed to working on issues, no matter how difficult, that bring positive
          changes to the county and not being satisfied until the job is done to the best of my ability.
        </p>

        <div className='grid place-items-center py-12 gap-12'>
          <PlatformHeading>Election Day</PlatformHeading>
          <Countdown date={ELECTION_DATE} className='glow w-fit px-12 bg-base-100 p-4' />
        </div>
      </div>
    </Section>
  )
}
