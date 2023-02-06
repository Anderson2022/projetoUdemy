import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeSave,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import TypeUser from './TypeUser'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public typeUserId: number

  @column()
  public email: string

  @hasMany(() => Token)
  public token: HasMany<typeof Token>

  @hasOne(() => Client)
  public client: HasOne<typeof Client>

  @belongsTo(() => TypeUser)
  public typeUser: BelongsTo<typeof TypeUser>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await Hash.make(user.password)
  }
}
