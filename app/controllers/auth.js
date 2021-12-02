exports.login = function (req, res) {
  return res.render("auth/login");
};

exports.logout = function (req, res) {
  return res.redirect("/");
};

exports.register = function (req, res) {
  return res.render("auth/register");
};
