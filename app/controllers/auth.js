const db = require("../../database/db");

exports.login = function (req, res) {
  return res.render("auth/login");
};

exports.logout = function (req, res) {
  return res.redirect("/");
};

exports.register = function (req, res) {
  return res.render("auth/register");
};

exports.store = async function (req, res) {
  await db.table("admin").insert(req.body);
  return res.redirect("/");
};
