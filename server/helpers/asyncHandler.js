/**
 * Runs the controller trycatch block, controller is passed as argument
 */

module.exports = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
};
