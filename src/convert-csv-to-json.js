var fs = require('fs');
var Converter = require("csvtojson").Converter;

var converter = new Converter({});
converter.fromFile("./input/fake-news-source.csv", function (error, result) {

    var collection = [];
    const totalItems = result.length;

    for (var key in result) {
        if (result.hasOwnProperty(key)) {
            var item = result[key];

            var intermediate = {
                siteTitle: item['site'],
                siteCategory: item['category'],
                siteUrl: item['URL'],
                siteGoogleHits: parseInt(item['Google hits']),
                siteFacebookLikes: parseInt(item['FB likes']),
                siteTwitterFollowers: parseInt(item['Twitter']),
                sitePoliticalAlignment: item['political alignment?'],
                siteNotes: item['Notes']
            }

            collection.push(intermediate);
        }
    }
    var clean = collection.splice(1,totalItems);
    console.log(collection.length);
    writeToFile(JSON.stringify(clean));
});


function writeToFile(data) {
    fs.writeFile("./output/fake-news-source.json", data, "utf8", function (err) {
        if (err) return console.log(err);
        console.log("The file was saved!");
    });
}