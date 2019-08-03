const fs = require("fs");
const path = require("path");

function Utils() {
  // clear empty data from excel and return an new array
  this.translateData = data => {
    let resultData = [];
    for (let i in data) {
      if (data[i].length > 0) {
        resultData.push(data[i]);
      }
    }
    return resultData;
  };

  // return a new array including different language's objects
  this.rebuildLangObj = (data) => {
    const result = new Object();
    let header = data.shift();
    let resultData = [];
    for (let i = 0; i < header.length - 1; i++) {
      let obj = new Object();
      resultData.push(obj);
    }
    for (let i in data) {
      for (let j in data[i]) {
        const single = data[i];
        if (j == 0) {
        } else {
          // get key value
          const key = single[0];
          const index = j - 1;
          let obj = resultData[index];
          obj[key] = single[j];
        }
      }
    }
    result.list = resultData;
    result.header = header;
    return result;
  };

  this.exportFile = (data, outputPath) => {
    const header = data.header;
    const list = data.list;
    for(let i = 0;i < list.length;i++) {
      const langFilePathName = path.join(outputPath, `lang-${header[i+1]}.json`);
      console.log(`${langFilePathName} has been created`);
      const str = JSON.stringify(list[i]);
      fs.writeFile(langFilePathName,str,'utf8',(err) => {
        if(err) {
          console.log(err);
          return false;
        }
      });
    }
  }
}
module.exports = Utils;
