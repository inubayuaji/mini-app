const db = require("../../database/db");

exports.admin = async function (req, res, next) {
  const token = req.cookies["token"];

  if (token) {
    var user = await db.table("admin").where("token", "=", token).first();

    req.user = user;

    return next();
  } else {
      return res.redirect("/")
  }
};
