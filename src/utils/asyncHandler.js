// so here you are creating a function wrapper
//  (fn) => async here you are retruning a asyn fucntion
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export { asyncHandler };
