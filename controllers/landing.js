exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Landing" });
};

exports.submit_lead = function (req, res, next) {
  console.log("Email address: ", req.body.lead_email);
  res.redirect("/");
};
