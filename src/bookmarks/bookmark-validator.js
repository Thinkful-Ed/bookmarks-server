const { isWebUri } = require('valid-url')
const logger = require('../logger')

const NO_ERRORS = null

function getBookmarkValidationError({ url, rating }) {
  if (rating &&
    (!Number.isInteger(rating) || rating < 0 || rating > 5)) {
    logger.error(`Invalid rating '${rating}' supplied`)
    return {
      error: {
        message: `'rating' must be a number between 0 and 5`
      }
    }
  }

  if (url && !isWebUri(url)) {
    logger.error(`Invalid url '${url}' supplied`)
    return {
      error: {
        message: `'url' must be a valid URL`
      }
    }
  }

  return NO_ERRORS
}

module.exports = {
  getBookmarkValidationError,
}
