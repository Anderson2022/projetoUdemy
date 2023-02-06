import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExerciseValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    series: schema.number(),
    waiting_time: schema.number(),
  })

  public messages: CustomMessages = {}
}
