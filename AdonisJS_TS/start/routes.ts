/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() =>
{
  Route.get('/listarGrupo', 'GroupsController.getGrupo')
  Route.get('/listarPerfil', 'PerfilsController.getPerfil')
  Route.get('/listarUsuario', 'UsersController.getUser')
  Route.get('/listarPublicaciones', 'PublicationsController.getPublication')
  Route.get('/listarUsuario-Grupo', 'UserGroupsController.getUserGroup')

  Route.post('/crearGrupo', 'GroupsController.setNewGroup')
  Route.post('/crearPerfil', 'PerfilsController.setNewPerfil')
  Route.post('/crearUsuario', 'UsersController.setNewUser')
  Route.post('/crearPublicaciones', 'PublicationsController.setNewPublication')
  Route.post('/crearUsuario-Grupo', 'UserGroupsController.setNewUserGroup')
})
