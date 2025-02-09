'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

import { fetchFavoriteMovies } from '@/app/actions'

type Movie = {
  id: string
  name: string
  poster_url: string
  rank: string
}


export default function ImageCarousel() {
  const [movies, setMovies] =  React.useState<Movie[]>([]);
  React.useEffect(
    () =>  {
      const fetchDataEffect = async () => {
        const data = await fetchFavoriteMovies()
        console.log(data)
        if (data)
          setMovies( data.map((movie: Movie) => {
            return {
              id: movie.id,
              name: movie.name,
              poster_url: movie.poster_url,
              rank: movie.rank
            }
          }
        )
      )
    }
    fetchDataEffect()
  }, [])
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Favorite Movies</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {movies.map((movie) => (
              <CarouselItem key={movie.id}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={movie.poster_url}
                      alt={movie.name}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

