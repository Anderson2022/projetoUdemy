import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Training from 'App/Models/Training'

import UpdateTrainingValidator from 'App/Validators/UpdateTrainingValidator'


export default class TrainingsController {
  public async index({ response }: HttpContextContract) {
    const training = await Training.all()
    response.status(200).json(training)
  }

  public async show({ params }: HttpContextContract) {
    const training = await Training.findOrFail(params.id)
    return training
  }

  public async store({ request }) {
    const { exercises, ...data } = request.only(['client_id', 'name', 'observation', 'exercises'])
    const training = await Training.create(data)

    if (exercises) {
      await training.related('exercises')
    }
    await training.load('exercises')
    return training
  }

  public async update({ params, request }: HttpContextContract) {
    const userPayload = await request.validate(UpdateTrainingValidator)
    const user = await Training.findOrFail(params.id)

    user.merge(userPayload)
    await user.save()
    return user
  }
  public async destroy({ params }: HttpContextContract) {
    const training = await Training.findOrFail(params.id)
    return await training.delete()
  }
}
