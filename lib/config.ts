import { IMovieSearchOptions } from './types'

export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'Next Movie'
export const description = 'TODO'
export const domain = 'next-movie.transitivebullsh.it'
export const author = 'Travis Fischer'
export const twitter = 'transitive_bs'
export const twitterUrl = `https://twitter.com/${twitter}`
export const githubRepoUrl = 'https://github.com/transitive-bullshit/next-movie'
export const copyright = `Copyright 2022 ${author}`
export const madeWithLove = 'Made with ❤️ in Brooklyn, NY'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const url = isDev ? `http://localhost:${port}` : prodUrl

export const apiBaseUrl =
  isDev || !process.env.VERCEL_URL ? url : `https://${process.env.VERCEL_URL}`

// these must all be absolute urls
export const socialImageUrl: string | null = `${url}/social.jpg`
export const twitterIconUrl: string | null = `${url}/icons/twitter.png`
export const githubIconUrl: string | null = `${url}/icons/github.png`

// ----------------------------------------------------------------------------

export const defaultSearchOptions: IMovieSearchOptions = {
  query: '',
  genres: [],
  releaseYearMin: 1972,
  imdbRatingMin: 7,
  foreign: false,
  orderBy: 'relevancyScore',
  limit: 10
}

// TODO
export const defaultAppOptions: IMovieSearchOptions = {
  releaseYearMin: 1972,
  imdbRatingMin: 7,
  foreign: false,
  orderBy: 'relevancyScore'
}
