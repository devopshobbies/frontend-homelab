import ImageCarousel from '@/components/image-carousel'
import Footer from '@/components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ImageCarousel />
      </main>
      <Footer />
    </div>
  )
}

