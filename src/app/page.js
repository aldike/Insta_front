'use client'
// import Header from '@/components/header'
import Test from '@/components/test'
import UserLogin from '@/components/auth/user'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main>
      <UserLogin/>
      <Test/>
      <Footer/>
    </main>
  )
}
