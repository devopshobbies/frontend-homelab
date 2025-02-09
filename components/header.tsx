import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="hover:underline">Features</Link></li>
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

