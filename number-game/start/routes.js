'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Database = use('Database')

const providers = [
  '@adonisjs/framework/providers/ViewProvider'
]

Route.get('/', 'GameController.render')

Route.get('twitch/getTwitchUserInfo', 'TwitchController.getTwitchUserInfo')
var subdomain = prompt();

Route.get('/posts', async () => {
  return await Database.select('*').from('rosters')
})

