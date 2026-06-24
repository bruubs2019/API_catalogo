import router from '@adonisjs/core/services/router'
import GenresController from '#controllers/genres_controller'
import MoviesController from '#controllers/movies_controller'
import { controllers } from '#generated/controllers'
import { middleware } from './kernel.ts'

router.resource('/user', controllers.Users).apiOnly()
router.post("/session", [controllers.AccessTokens, "store"])
router.delete("/session", [controllers.AccessTokens, "destroy"]).use(middleware.auth())

router.resource('genres', GenresController).apiOnly().use('*', middleware.auth())

router.resource('movies', MoviesController).apiOnly().use('*', middleware.auth())