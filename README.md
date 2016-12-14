# Fake News Detector

A node script uses which data from [this](https://docs.google.com/spreadsheets/d/1xDDmbr54qzzG8wUrRdxQl_C1dixJSIYqQUaXVZBqsJs) Google sheet, preprocesses it for cleanup and dumps it to a JSON file. What use will this be, you might ask? Well, I think this is a good starting point for developers to build apps/tools that could benefit from a fake news detection facility, or for data analysis purposes.

The possibilities are endless. I am putting this on Github in a hope that we might be able to improve upon this with more nice things, such as feeding this data this data into Firebase endpoint and enable REST API access. Please modify this code however you wish. Damage might have been done, but we can do something.

### Dependencies 

`"csvtojson": "^1.0.3"`

### Installation 

`npm install`

### Running

` sudo node src/convert-csv-to-json.js`

### Things To Do

* Feed data into Firebase 
* Create REST API endpoint
    * That allows user to query by specific URL 
    * That allows user to query by rank in a defined order
    * That allows user(s) to add more sites to the existing collection 
        * Which means, a UI for public moderation to prevent trolling becomes necessary

For submitting your ideas, contact me on [Facebook](https://www.facebook.com/ali.gajani)

### Output sample

```
{
	"siteTitle": "CollectiveEvolution",
	"siteCategory": "conspiracy",
	"siteUrl": "http://www.collective-evolution.com/",
	"siteGoogleHits": 2,
	"siteFacebookLikes": 4,
	"siteTwitterFollowers": 61600,
	"sitePoliticalAlignment": "",
	"siteNotes": ""
}
```
    



