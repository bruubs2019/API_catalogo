/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'user.index': {
    methods: ["GET","HEAD"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.index']['types'],
  },
  'user.store': {
    methods: ["POST"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.store']['types'],
  },
  'user.show': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.show']['types'],
  },
  'user.update': {
    methods: ["PUT","PATCH"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.update']['types'],
  },
  'user.destroy': {
    methods: ["DELETE"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.destroy']['types'],
  },
  'access_tokens.store': {
    methods: ["POST"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.store']['types'],
  },
  'access_tokens.destroy': {
    methods: ["DELETE"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.destroy']['types'],
  },
  'genres.index': {
    methods: ["GET","HEAD"],
    pattern: '/genres',
    tokens: [{"old":"/genres","type":0,"val":"genres","end":""}],
    types: placeholder as Registry['genres.index']['types'],
  },
  'genres.store': {
    methods: ["POST"],
    pattern: '/genres',
    tokens: [{"old":"/genres","type":0,"val":"genres","end":""}],
    types: placeholder as Registry['genres.store']['types'],
  },
  'genres.show': {
    methods: ["GET","HEAD"],
    pattern: '/genres/:id',
    tokens: [{"old":"/genres/:id","type":0,"val":"genres","end":""},{"old":"/genres/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['genres.show']['types'],
  },
  'genres.update': {
    methods: ["PUT","PATCH"],
    pattern: '/genres/:id',
    tokens: [{"old":"/genres/:id","type":0,"val":"genres","end":""},{"old":"/genres/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['genres.update']['types'],
  },
  'genres.destroy': {
    methods: ["DELETE"],
    pattern: '/genres/:id',
    tokens: [{"old":"/genres/:id","type":0,"val":"genres","end":""},{"old":"/genres/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['genres.destroy']['types'],
  },
  'movies.index': {
    methods: ["GET","HEAD"],
    pattern: '/movies',
    tokens: [{"old":"/movies","type":0,"val":"movies","end":""}],
    types: placeholder as Registry['movies.index']['types'],
  },
  'movies.store': {
    methods: ["POST"],
    pattern: '/movies',
    tokens: [{"old":"/movies","type":0,"val":"movies","end":""}],
    types: placeholder as Registry['movies.store']['types'],
  },
  'movies.show': {
    methods: ["GET","HEAD"],
    pattern: '/movies/:id',
    tokens: [{"old":"/movies/:id","type":0,"val":"movies","end":""},{"old":"/movies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['movies.show']['types'],
  },
  'movies.update': {
    methods: ["PUT","PATCH"],
    pattern: '/movies/:id',
    tokens: [{"old":"/movies/:id","type":0,"val":"movies","end":""},{"old":"/movies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['movies.update']['types'],
  },
  'movies.destroy': {
    methods: ["DELETE"],
    pattern: '/movies/:id',
    tokens: [{"old":"/movies/:id","type":0,"val":"movies","end":""},{"old":"/movies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['movies.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
