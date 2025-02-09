import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-xl mb-8">Discover amazing features and boost your productivity</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  )
}

