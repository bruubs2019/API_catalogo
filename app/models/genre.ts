import { GenreSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Movie from '#models/movie'

export default class Genre extends GenreSchema {

  @hasMany(() => Movie)
  declare movies: HasMany<typeof Movie>
}