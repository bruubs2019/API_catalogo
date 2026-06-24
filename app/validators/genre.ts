import vine from '@vinejs/vine'

export const createGenreValidator = vine.create({
  name: vine.string().trim().minLength(2).maxLength(50),
})

export const updateGenreValidator = vine.create({
  name: vine.string().trim().minLength(2).maxLength(50).optional(),
})