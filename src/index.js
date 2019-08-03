const xlsx = require("node-xlsx");
const path = require("path");
const Utils = require('./modules/utils');
const FileUtils = require('./modules/file');
const config = require("../config");


// let file = "source.xlsx";
let file = config["file_name"];
let OUTPUT_MKDIR = '/' + file.split('.')[0];
const OUTPUT_PATH = path.join(__dirname, '../output', OUTPUT_MKDIR);
const SOURCE_FILE_PATH = path.join(__dirname, "excel_file", file);

const utils = new Utils();
const fileUtils = new FileUtils();

var obj = xlsx.parse(SOURCE_FILE_PATH);
let resultData = utils.translateData(obj[0].data);
let result = utils.rebuildLangObj(resultData); 

fileUtils.deleteAll(OUTPUT_PATH);
fileUtils.mkdir(OUTPUT_PATH);

utils.exportFile(result, OUTPUT_PATH);