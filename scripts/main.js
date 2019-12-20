const yaml = require("js-yaml");
const fs = require("fs");

const main = () => {
    const {elementsPath} = require("./config.js");

    fs.readdirSync(elementsPath).forEach((value, index, array) => {
        let file = fs.readFileSync([elementsPath, value].join("/"));
        let data = yaml.safeLoad(file);
        let content = JSON.stringify(data, null, 4);


        let savePath = "./src/oni/elements";

        if (!fs.existsSync(savePath)) {
            fs.mkdirSync(savePath, {recursive: true})
        }
        fs.writeFile([savePath, value.replace(".yaml", ".json")].join("/"), content, function () {
            console.log("文件写完");
        })
    });

};

main();


