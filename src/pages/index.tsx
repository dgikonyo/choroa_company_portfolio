// import Image from 'next/image'
//import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HomePage from '@/pages/HomePage'


//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id="app_layout">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  )
}
