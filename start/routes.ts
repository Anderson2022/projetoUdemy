import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('/users', 'UsersController.index')
Route.get('/users/:id', 'UsersController.show')
Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.destroy')

Route.get('/clients', 'ClientsController.index')
Route.get('/clients/:id', 'ClientsController.show')
Route.post('/clients', 'ClientsController.store')
Route.put('/clients/:id', 'ClientsController.update')
Route.delete('/clients/:id', 'ClientsController.destroy')

Route.get('/exercises', 'ExercisesController.index')
Route.get('/exercises/:id', 'ExercisesController.show')
Route.post('/exercises', 'ExercisesController.store')
Route.put('/exercises/:id', 'ExercisesController.update')
Route.delete('/exercises/:id', 'ExercisesController.destroy')

Route.get('/trainings', 'TrainingsController.index')
Route.get('/trainings/:id', 'TrainingsController.show')
Route.post('/trainings', 'TrainingsController.store')
Route.put('/trainings/:id', 'TrainingsController.update')
Route.delete('/trainings/:id', 'TrainingsController.destroy')
