import { BackgroundVideo } from '@/components/BackgroundVideo'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Platform } from '@/components/sections/Platform'

export default function Home() {
  return (
    <>
      <BackgroundVideo src='/bg-video.mp4' />
      <Hero />
      <Platform />
      <Contact />
    </>
  )
}
