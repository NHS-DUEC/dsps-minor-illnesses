// https://jhildenbiddle.github.io/mergician/
import { mergician } from 'mergician';

/**
 * Prototype specific filters for use in Nunjucks templates.
 *
 * You can override Prototype Rig filters by creating filter methods
 * with the same name. You can delete this file if you don’t need your
 * own filters.
 *
 * @param {object} env - Nunjucks environment
 * @returns {object} Filters
 */
export default (env) => {
  const filters = {}

  /**
   * Add your methods to the filters object below this comment block
   *
   * @see {@link https://mozilla.github.io/nunjucks/api#custom-filters}
   * @example
   * filters.sayHello = function (name) {
   *   return `Hello, ${name}!`
   * }
   *
   * Which in your templates would be used as:
   *
   * {{ "World" | sayHello }} => Hello, World!
   */

  /**
   *
   * @param {...objects} objects - This collects all passed objects into an array.
   * @returns Object             - A deep merge of the passed objects
   */
  filters.objectMerge = function objectMerge(...objects) {
    return mergician({
      appendArrays: false
    })(...objects)
  }

  // Keep the following line to return your filters to the app
  return filters
}
