import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    name: schema.string(),
    username: schema.string(),
    email: schema.string(),
    typeUserId: schema.number(),
  })


  public messages: CustomMessages = {
    'user.required': 'Indique a propriedade do nome',
    'username.required': 'Indique a propriedade do username',
    'email.required': 'Indique a propriedade do email',
    'password.required': 'Indique a propriedade do password',
    'typeUserId.required': 'Indique a propriedade do typeUserId',
  }
}
