import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import HomePage from './Home'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main >

      <HomePage />

    </main>
  )
}
