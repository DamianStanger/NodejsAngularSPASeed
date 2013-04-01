"use strict";

exports.index = function (req, res) {
  console.log("Get pairing stats");
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(getPairs()));
};




function getPairs() {
  return {
    "pairingStats":{
      "parcelnr":123456,
      "provider":"DHL",
      "pairs":[
        {
          "name1":"Bob",
          "name2":"Jill",
          "number":10
        },
        {
          "name1":"Jill",
          "name2":"Jeff",
          "number":3
        },
        {
          "name1":"Bob",
          "name2":"Jeff",
          "number":7
        }
      ]
    }
  };
}