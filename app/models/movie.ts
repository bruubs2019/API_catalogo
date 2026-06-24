import { MovieSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Genre from '#models/genre'

export default class Movie extends MovieSchema {
  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>
}