import { BackgroundVideo } from '@/components/BackgroundVideo'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Platform } from '@/components/sections/Platform'

export default function Home() {
  return (
    <>
      <BackgroundVideo src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmwxeDR4dHh3Ynlzd3Uxd2IwNGx2dmhuc2ZpdDNjZ2RocWF2N2I5NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KJljdj1rpFvNNgvJKI/giphy.mp4' />
      <Hero />
      <Platform />
      <Contact />
    </>
  )
}
