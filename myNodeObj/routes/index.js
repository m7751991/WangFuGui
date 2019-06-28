const users = require('./users')
const course = require('./course')

module.exports = function (app) {
  app.get("/", (req, res, next) => {
    res.render('index', { title: 'Express' });
  })
  app.use("/api/user", users)
  app.use("/api/course", course)
}