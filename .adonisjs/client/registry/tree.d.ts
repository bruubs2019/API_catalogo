/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  user: {
    index: typeof routes['user.index']
    store: typeof routes['user.store']
    show: typeof routes['user.show']
    update: typeof routes['user.update']
    destroy: typeof routes['user.destroy']
  }
  accessTokens: {
    store: typeof routes['access_tokens.store']
    destroy: typeof routes['access_tokens.destroy']
  }
  genres: {
    index: typeof routes['genres.index']
    store: typeof routes['genres.store']
    show: typeof routes['genres.show']
    update: typeof routes['genres.update']
    destroy: typeof routes['genres.destroy']
  }
  movies: {
    index: typeof routes['movies.index']
    store: typeof routes['movies.store']
    show: typeof routes['movies.show']
    update: typeof routes['movies.update']
    destroy: typeof routes['movies.destroy']
  }
}
