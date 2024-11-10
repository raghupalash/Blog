import ThemeToggle from './ThemeToggle'
import SocialLinks from './SocialLinks'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark
                    text-primary-light dark:text-primary-dark transition-colors duration-200">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center relative">
          <a href="/" className="text-2xl font-bold hover:text-accent">Home</a>
          
          {/* Centered Ganesha Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Image 
              src="/ganesha.png" 
              alt="Ganesha" 
              width={50} 
              height={50} 
              className=""
            />
            <span className="text-[6px] mt-1 opacity-50 text-center">
              Ganesha, <br></br>the god of the beginnings
            </span>
          </div>

          <ThemeToggle />
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <SocialLinks />
      </footer>
    </div>
  )
}