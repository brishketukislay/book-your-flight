import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the web page
      <div>
        Already registeres? 
        <Link href="/users">Login Here</Link>
      </div>
    </main>
  )
}
