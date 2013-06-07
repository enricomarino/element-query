/**
 * Expose `query`
 */

module.exports = query;

/**
 * query
 */

function query (element) {

  /**
   * query
   * query selector
   * 
   * @param {String} selector selector
   * @return {Element} selected element
   * @api public
   */

  element.prototype.query = function (selector) {
    return this.el.querySelector(selector);
  };

  /**
   * query_all
   * query selector all
   * 
   * @param {String} selector selector
   * @return {Element} selected element
   * @api public
   */

  element.prototype.query_all = function (selector) {
    return this.el.querySelectorAll(selector);
  };

  return element;
}
