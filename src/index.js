/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 */

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @param {any} value
 * @returns {string}
 */
const classNames = (value) => {
  /**
   * @type {string}
   */
  let result = "";

  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(classNames).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }

  return result;
};

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @param {any[]} args
 * @returns {string}
 */
const main = (...args) => {
  return args.map(classNames).filter(Boolean).join(" ");
};

/**
 * @exports main
 */
export default main;
