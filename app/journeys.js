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
    '/version-1/disposition': {},
    '/version-1/referral/name': {},
    '/version-1/referral/date-of-birth': {},
    '/version-1/referral/phone-number': {},
    '/version-1/referral/home-postcode': {},
    '/version-1/referral/check-details': {},
    '/version-1/confirmation-online-pharmacy': {}
  }
  return wizard(journey, req)
}
