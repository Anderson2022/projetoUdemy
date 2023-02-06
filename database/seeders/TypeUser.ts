import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TypeUser from 'App/Models/TypeUser'

export default class extends BaseSeeder {
  public async run() {
    await TypeUser.createMany([
      {
        name: 'Administrador',

      },
      {
        name: 'Colaborador',

      },
      {
        name: 'Cliente',

      },
    ])
  }
}
