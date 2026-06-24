import type { HttpContext } from '@adonisjs/core/http'
import Genre from '#models/genre'
import { createGenreValidator, updateGenreValidator } from '#validators/genre'

export default class GenresController {
  async index({ response }: HttpContext) {
    const genres = await Genre.query().orderBy('name', 'asc')
    return response.status(200).json(genres)
  }

  async show({ params, response }: HttpContext) {
    const genre = await Genre.query().where('id', params.id).preload('movies').firstOrFail()
    return response.status(200).json(genre)
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createGenreValidator)
    const genre = await Genre.create(data)

    return response.status(201).json(genre)
  }

  async update({ params, request, response }: HttpContext) {
    const genre = await Genre.findOrFail(params.id)
    const data = await request.validateUsing(updateGenreValidator)

    genre.merge(data)
    await genre.save()

    return response.status(200).json(genre)
  }

  async destroy({ params, response }: HttpContext) {
    const genre = await Genre.findOrFail(params.id)
    await genre.delete()

    return response.status(204).send('')
  }
}