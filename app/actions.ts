'use server'
 
export async function fetchFavoriteMovies() {
    const response = await fetch(`${process.env.BACKEND_BASE_URL || 'http://localhost:8000'}/api/v1/favorite-movies`!)

    return await response.json()
}