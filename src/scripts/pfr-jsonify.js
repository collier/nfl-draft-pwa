const path = require('path');
const fs = require('fs');
const csvtojson = require('csvtojson');

const csvFilePath = process.argv[2];

if(!csvFilePath) {
  console.error('Please provide a file path');
  process.exit(1);
}
if(!fs.existsSync(csvFilePath)) {
  console.error(`File path ${csvFilePath} does not exist`);
  process.exit(1);
}

const fileNameBase = path.basename(csvFilePath, '.csv');
const fileDir = path.dirname(csvFilePath);
const jsonFilePath = `${fileDir}\\${fileNameBase}.json`;

csvtojson({
  noheader: false,
  headers: ['round','pick','team','name','position','age','year','ap1','pb','st','carAv','drAv','g','passCmp','passAtt','passYds','passTD','passInt','rushAtt','rushYds','rushTD','receptions','recYrds','recTD','solo','int','sk','school','link'],
  ignoreColumns: /(ap1|pb|st|carAv|drAv|g|passCmp|passAtt|passYds|passTD|passInt|rushAtt|rushYds|rushTD|receptions|recYrds|recTD|solo|int|sk|link)/
})
.fromFile(csvFilePath)
.subscribe((jsonObj) => {
  jsonObj.name=jsonObj.name.split('\\')[0];
})
.then((jsonObj) => {
  const rawJson = JSON.stringify(jsonObj, null, 2);
  fs.writeFileSync(jsonFilePath, rawJson);
});