
import Nav from '@/components/ui/Nav'
import { Inter } from 'next/font/google'
import Layout from '@/components/layaouts/layoutHome'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className=''>
<Nav/>
<Layout></Layout>
  </div>
  )
}
