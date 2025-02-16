import { wizard } from '../lib/wizard.js'

/**
 * Get wizard journey
 *
 * @param {object} req - Express request
 * @returns {Function} Wizard journey
 */
export function version1(req) {
  const journey = {
    '/version-1/where-are-you-now': {},
    '/version-1/age': {},
    '/version-1/sex': {},
    '/version-1/categories/index': {},
    '/version-1/weirdq': {},
    '/version-1/cause': {},
    '/version-1/timeframe': {},
    '/version-1/how-many-times': {},
    '/version-1/sickness': {},
    '/version-1/where-bitten': {},
    '/version-1/temperature': {},
    '/version-1/change-in-wound': {},
    '/version-1/do-these-apply': {},
    '/version-1/disposition': {}
  }
  return wizard(journey, req)
}
