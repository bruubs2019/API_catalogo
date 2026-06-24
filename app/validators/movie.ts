import vine from '@vinejs/vine'

export const createMovieValidator = vine.create({
  title: vine.string().trim().minLength(1).maxLength(150),
  rating: vine.string().trim(),
  releaseYear: vine.number().min(1888).max(new Date().getFullYear() + 1),
  genreId: vine.number(),
})

export const updateMovieValidator = vine.create({
  title: vine.string().trim().minLength(1).maxLength(150).optional(),
  rating: vine.string().trim().optional(),
  releaseYear: vine
    .number()
    .min(1888)
    .max(new Date().getFullYear() + 1)
    .optional(),
  genreId: vine.number().optional(),
})