import {
  SSL_ROOT_CERT,
  SSL_SERVER_KEY,
  SSL_SERVER_CERT,
  SSL_SERVER_CERT_COMMON_NAME,
}                                 from './ca'
/**
 * Environment variables containing newlines in Node?
 *  `replace(/\\n/g, '\n')`
 *    https://stackoverflow.com/a/36439803/1123955
 */
const WECHATY_PUPPET_SERVICE_SSL_ROOT_CERT    = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_SSL_ROOT_CERT']?.replace(/\\n/g, '\n')
 || SSL_ROOT_CERT

const WECHATY_PUPPET_SERVICE_SSL_SERVER_CERT  = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_SSL_SERVER_CERT']?.replace(/\\n/g, '\n')
 || SSL_SERVER_CERT

const WECHATY_PUPPET_SERVICE_SSL_SERVER_KEY   = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_SSL_SERVER_KEY']?.replace(/\\n/g, '\n')
 || SSL_SERVER_KEY

const WECHATY_PUPPET_SERVICE_SSL_SERVER_NAME = (v?: string) => v
 || process.env['WECHATY_PUPPET_SERVICE_SSL_SERVER_NAME']?.replace(/\\n/g, '\n')
 || SSL_SERVER_CERT_COMMON_NAME

const WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_SERVER = (v?: boolean) => typeof v === 'undefined'
  ? !!process.env['WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_SERVER']
  : v
const WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_CLIENT = (v?: boolean) => typeof v === 'undefined'
  ? !!process.env['WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_CLIENT']
  : v

export {
  WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_CLIENT,
  WECHATY_PUPPET_SERVICE_SSL_DEPRECATED_NO_SSL_UNSAFE_SERVER,
  WECHATY_PUPPET_SERVICE_SSL_ROOT_CERT,
  WECHATY_PUPPET_SERVICE_SSL_SERVER_CERT,
  WECHATY_PUPPET_SERVICE_SSL_SERVER_KEY,
  WECHATY_PUPPET_SERVICE_SSL_SERVER_NAME,
}