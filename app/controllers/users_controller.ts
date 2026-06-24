import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index() {
    const users = await User.all()
    return users
  }

  async store({ request }: HttpContext) {
    const { name, email, password } = await request.validateUsing(createUserValidator)
    const user = await User.create({
      name,
      email,
      password,
    })
    return user
  }

  async show({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      return user
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const { name, password } = await request.validateUsing(updateUserValidator)
      const user = await User.findByOrFail('id', params.id)
      user.merge({ name, password })
      await user.save()
      return user
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      await user.delete()
      return response.status(203)
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }
}