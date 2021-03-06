const error = (err, _req, res, _next) => {
  if (err.status) {
    const {status, message, description} = err;

    return res.status(status).json({message, description});
  }
  console.log(err);
  return res.status(500).json({message: 'Internal Error'});
};

module.exports = error;
