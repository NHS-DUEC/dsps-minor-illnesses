/**
 * Default values for user session data
 *
 * These are automatically added via the `autoStoreData` middleware. A values
 * will only be added to the session if it doesn't already exist. This may be
 * useful for testing journeys where users are returning or logging in to an
 * existing application.
 */
export default {
  'defaults': {
    'postcode': 'A12 3BC',
    'first-name': 'Firstname',
    'last-name': 'Surname',
    'phone': '07967 123456',
    'dob': {
      'day': '09',
      'month': '12',
      'year': '1981',
    }
  }
}
