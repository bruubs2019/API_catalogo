import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import GenresController from '#controllers/genres_controller'
import MoviesController from '#controllers/movies_controller'
import { controllers } from '#generated/controllers'

// Usuários
router.post('/session', [controllers.AccessTokens, 'store'])
router.resource('/user', controllers.Users).apiOnly()

// Gêneros
router.get('/genres', [GenresController, 'index'])
router.get('/genres/:id', [GenresController, 'show'])

// Filmes (públicos)
router.get('/movies', [MoviesController, 'index'])
router.get('/movies/:id', [MoviesController, 'show'])

// Rotas protegidas
router
  .group(() => {
    router.delete('/session', [controllers.AccessTokens, 'destroy'])

    // Gêneros (autenticados)
    router.post('/genres', [GenresController, 'store'])
    router.put('/genres/:id', [GenresController, 'update'])
    router.delete('/genres/:id', [GenresController, 'destroy'])

    // Filmes (autenticados)
    router.post('/movies', [MoviesController, 'store'])
    router.put('/movies/:id', [MoviesController, 'update'])
    router.delete('/movies/:id', [MoviesController, 'destroy'])
  })
  .use(middleware.auth())
