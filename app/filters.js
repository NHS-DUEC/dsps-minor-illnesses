// https://jhildenbiddle.github.io/mergician/
import { mergician } from 'mergician'

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
  // If you need access to an internal nunjucks filter you can use env
  // see the example below for 'safe' which is used in 'filters.log'
  const nunjucksSafe = env.getFilter('safe')
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

  /**
   *
   * @param {*} data - the thing to be logged
   * @returns a string that will be evaluated by the browser producing a console log
   */
  filters.log = function (data) {
    return nunjucksSafe(
      `<script>console.log(${JSON.stringify(data, null, '\t')});</script>`
    )
  }

  /**
   *
   * @param {*} value - the thing to checked
   * @returns true or false
   */
  filters.isArray = function isArray(value) {
    return Array.isArray(value);
  }

  filters.isEmpty = function isEmpty(value) {
    if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "object" && Object.keys(value).length === 0)
    ) {
        return undefined;
    }
    return value;
  }

  // Keep the following line to return your filters to the app
  return filters
}
