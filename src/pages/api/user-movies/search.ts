import {
  MovieSearchOptionsSchema,
  IMovieSearchResults,
  IMovieSearchOptions
} from '@/types'
import { searchUserMovies } from '@/server/search-user-movies'
import { createAPIHandler } from '@/server/api'

export default createAPIHandler<
  never,
  IMovieSearchOptions,
  IMovieSearchResults
>(
  {
    auth: 'required',
    methods: ['POST'],
    body: MovieSearchOptionsSchema
  },
  async function searchUserTitlesHandler(req, res, { session, body }) {
    const result = await searchUserMovies(body, session)

    // add an extra long delay to accentuate any client-side swr cache misses
    // (for debugging purposes)
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 5000)
    // })

    return res.status(200).json(result)
  }
)
