import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all()
    response.status(200).json(user)
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.load('typeUser') // seta o tipo de usuario//
    return user
  }

  public async store({ request, response }: HttpContextContract) {
    const userPayload = await request.validate(UserValidator)

    const user = await User.create(userPayload)
    await user.save()
    return user
  }

  public async update({ params, request }: HttpContextContract) {
    const userPayload = await request.validate(UpdateUserValidator)
    const user = await User.findOrFail(params.id)

    user.merge(userPayload)
    await user.save()
    return user
  }
  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return await user.delete()
  }
}
