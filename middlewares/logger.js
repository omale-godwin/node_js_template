const logger = (req, res, next) => {
  req.objective = "omale testing and creating node js template";
  console.log(
    "middleware render",
    `${req.method}, ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next();
};

module.exports = logger;
