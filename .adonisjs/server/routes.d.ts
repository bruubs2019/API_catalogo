import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'genres.index': { paramsTuple?: []; params?: {} }
    'genres.store': { paramsTuple?: []; params?: {} }
    'genres.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.store': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.index': { paramsTuple?: []; params?: {} }
    'genres.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.index': { paramsTuple?: []; params?: {} }
    'genres.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'user.store': { paramsTuple?: []; params?: {} }
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'genres.store': { paramsTuple?: []; params?: {} }
    'movies.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'genres.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'genres.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}