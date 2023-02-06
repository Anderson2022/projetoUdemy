import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import User from 'App/Models/User'
import ClientValidator from 'App/Validators/ClientValidator'
import UpdateClientValidator from 'App/Validators/UpdateClientValidator'


export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    const client = await Client.all()
    response.status(200).json(client)
  }

  public async show({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    await client.load('user') // seta o tipo de usuario//
    return client
  }

  public async store({ request }: HttpContextContract) {
    const clientPayload = await request.validate(ClientValidator)

    const client = await Client.create(clientPayload)
    await client.save()
    return client
  }

  public async update({ params, request }: HttpContextContract) {
    const clientPayload = await request.validate(UpdateClientValidator)
    const client = await Client.findOrFail(params.id)

    client.merge(clientPayload)
    await client.save()
    return client
  }
  public async destroy({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    return await client.delete()
  }
}
