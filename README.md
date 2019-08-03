## 一个基于node的整合excel数据的工具

1. 目录说明
```
├── README.md
├── config.json            //配置文件，需要分析的excel请在这里配置
├── node_modules 
├── output                 // 输出目录
│   └── source             // 根据excel的名字生成的目录
│       ├── lang-en.json
│       └── lang-turkish.json
├── package-lock.json
├── package.json
└── src                    // 源码目录
    ├── excel_file         // excel的存放目录
    │   └── source.xlsx
    ├── index.js
    └── modules
        ├── file.js
        ├── translateData.js
        └── utils.js
```
2. 使用说明<br>
    1. 请在src中的excel_file目录下放入需要解析的excel文件(注意文件名为英文，否则无法识别)
    2. 请在项目根目录下的config.json中的file_name属性修改需要解析的excel文件名字
    3. 根目录下执行npm run build
