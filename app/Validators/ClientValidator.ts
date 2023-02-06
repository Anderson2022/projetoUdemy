import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    userId: schema.number(),
    address: schema.string(),
    age: schema.number(),
    weight: schema.number(),
  })

  public messages: CustomMessages = {}
}
