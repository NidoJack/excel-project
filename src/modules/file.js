const fs = require("fs");

function FileUtils() {
  this.mkdir = dir => {
    return new Promise((resolve, reject) => {
      fs.mkdir(dir, err => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };

  this.deleteAll = (path) => {
    let files = [];
    if(fs.existsSync(path)) {
      files = fs.readdirSync(path);
      files.forEach((file,index) => {
        let curPath = path + '/' + file;
        if(fs.statSync(curPath).isDirectory()) {
          deleteAll(curPath);
        }else{
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };
}

module.exports = FileUtils;
