/* eslint-disable eqeqeq */
// documentation: https://github.com/x-govuk/govuk-prototype-wizard
import { wizard } from '../lib/wizard.js'

const journeys = {}

journeys['version-1'] = {
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

journeys['version-2'] = {
  '/version-2/where-are-you-now': {},
  '/version-2/age': {},
  '/version-2/sex': {},
  '/version-2/categories/index': {},
  '/version-2/weirdq': {},
  '/version-2/cause': {},
  '/version-2/timeframe': {},
  '/version-2/how-many-times': {},
  '/version-2/sickness': {},
  '/version-2/where-bitten': {},
  '/version-2/temperature': {},
  '/version-2/change-in-wound': {},
  '/version-2/do-these-apply': {},
  '/version-2/disposition': {},
  '/version-2/referral/name': {},
  '/version-2/referral/date-of-birth': {},
  '/version-2/referral/phone-number': {},
  '/version-2/referral/home-postcode': {},
  '/version-2/referral/check-details': {},
  '/version-2/confirmation-online-pharmacy': {}
}

// examples notation for wizzard routing journey object
journeys.example = {
  '/path': {
    // Redirect if session.data.key equals 'Some value'
    '/path-to-fork-to-1': { data: 'key', value: 'Some value' },

    // Redirect if session.data.key is in the given array
    '/path-to-fork-to-2': { data: 'key', values: ['A value', 'Another value'] },

    // Redirect if session.data.key does not equal 'Some value'
    '/path-to-fork-to-3': { data: 'key', excludedValue: 'Some value' },

    // Redirect if session.data.key is not in the given array
    '/path-to-fork-to-4': {
      data: 'key',
      excludedValues: ['A value', 'Another value']
    },

    // Redirect if the given function evaluates to true
    '/path-to-fork-to-5': (req) => {
      return req.session.data.key == 'Something else'
    },

    // Shorthand
    '/path-to-fork-to-6': (req) => req.session.data.key == 'Something else',

    // Always redirect
    '/path-to-fork-to-7': true
  }
}

/**
 * Get wizard journey
 *
 * @param {object} req - Express request
 * @param journey
 * @returns {Function} Wizard journey
 */
export function getJourney(req, journey) {
  return wizard(journeys[journey], req)
}
