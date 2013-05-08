"use strict";

exports.index = function (req, res) {
  console.log("Get home page index");
  res.render('index', { title: 'Pairing Stats' });
};