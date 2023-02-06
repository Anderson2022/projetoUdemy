import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exercise from 'App/Models/Exercise'
import ExerciseValidator from 'App/Validators/ExerciseValidator'
import UpdateClientValidator from 'App/Validators/UpdateClientValidator'


export default class ExerciseController {
  public async index({ response }: HttpContextContract) {
    const exercises = await Exercise.all()
    response.status(200).json(exercises)
  }

  public async show({ params }: HttpContextContract) {
    const exercises = await Exercise.findOrFail(params.id)
    // await exercises.load('user') // seta o tipo de usuario//
    return exercises
  }

  public async store({ request }: HttpContextContract) {
    const exercisePayload = await request.validate(ExerciseValidator)

    const exercise = await Exercise.create(exercisePayload)
    await exercise.save()
    return exercise
  }

  public async update({ params, request }: HttpContextContract) {
    const exercisePayload = await request.validate(ExerciseValidator)
    const exercise = await Exercise.findOrFail(params.id)

    exercise.merge(exercisePayload)
    await exercise.save()
    return exercise
  }
  public async destroy({ params }: HttpContextContract) {
    const exercise = await Exercise.findOrFail(params.id)
    return await exercise.delete()
  }
}
