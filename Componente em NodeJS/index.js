const cheerio = require("cheerio");
const fs = require("fs");

try {
  const data = fs.readFileSync("in.html", "utf8");
  const $ = cheerio.load(data);
  var itensArray = [];
  $('select[name="cliente"]:eq(0)')
  .find("option")
  .each((i, op) => {
    var name = $(op).text().trim();
    var valueAttr = $(op).attr("value");
      var objeto = {name: name, id: valueAttr} ;
       itensArray.push( objeto );
      });
    const jsonString = JSON.stringify(itensArray);
    console.log(jsonString);
  } catch (err) {
    console.error(err);
  }