import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Exercise from './Exercise'

export default class Training extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public client_id: number

  @column()
  public name: string

  @column()
  public observation: string

  @belongsTo(() => Exercise)
  public exercises: BelongsTo<typeof Exercise>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
