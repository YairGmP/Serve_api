exports.success = function (req, res, status = 200, msg = '') {
  res.status(status).send({
    status: status,
    error: false,
    mensaje: msg,
    severity: "success",
  });
};

exports.error = function (req, res, status, msg) {
  const codestatus = status || 500;
  const mesaje = msg || 'Error interno'  

  res.status(status).send({
    status: status,
    error: true,
    mensaje: mesaje,
    severity: "error",
  });
};
