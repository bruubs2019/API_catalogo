import type { HttpContext } from '@adonisjs/core/http'
import Movie from '#models/movie'
import { createMovieValidator, updateMovieValidator } from '#validators/movie'

export default class MoviesController {
  async index({ request, response }: HttpContext) {
    try {
      const genreId = request.input('genre_id')

      const query = Movie.query().preload('genre')

      if (genreId) {
        query.where('genre_id', genreId)
      }

      const movies = await query.orderBy('title', 'asc')

      return response.status(200).json(movies)
    } catch (error) {
      return response.status(500).json({
        message: 'Erro ao buscar filmes',
        error: error.message,
      })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const movie = await Movie.query().where('id', params.id).preload('genre').firstOrFail()

      return response.status(200).json(movie)
    } catch (error) {
      return response.status(404).json({
        message: 'Filme não encontrado',
      })
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(createMovieValidator)

      const exists = await Movie.query().where('title', data.title).first()

      if (exists) {
        return response.status(409).json({
          message: 'Já existe um filme cadastrado com esse título',
        })
      }

      const movie = await Movie.create(data)

      return response.status(201).json(movie)
    } catch (error) {
      return response.status(422).json({
        message: 'Erro ao criar filme',
        error: error.message,
      })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const movie = await Movie.findOrFail(params.id)
      const data = await request.validateUsing(updateMovieValidator)

      if (data.title && data.title !== movie.title) {
        const exists = await Movie.query().where('title', data.title).first()

        if (exists) {
          return response.status(409).json({
            message: 'Já existe um filme cadastrado com esse título',
          })
        }
      }

      movie.merge(data)
      await movie.save()

      return response.status(200).json(movie)
    } catch (error) {
      return response.status(422).json({
        message: 'Erro ao atualizar filme',
        error: error.message,
      })
    }
  }
  async destroy({ params, response }: HttpContext) {
    try {
      const movie = await Movie.findOrFail(params.id)
      await movie.delete()

      return response.status(204).send('')
    } catch (error) {
      return response.status(404).json({
        message: 'Filme não encontrado',
      })
    }
  }
}