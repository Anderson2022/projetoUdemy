import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    userId: schema.number.optional(),
    address: schema.string.optional(),
    age: schema.number.optional(),
    weight: schema.number.optional(),
  })

  public messages: CustomMessages = {}
}
