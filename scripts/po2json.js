const po2json = require('po2json');
const fs = require('fs');

const main = () => {
    const {stringsPath} = require("./config.js");

    fs.readdirSync(stringsPath)
        .forEach((value, index, array) => {
            if (!value.match(/^strings_preinstalled_\w{2}_klei\.po$/g)) {
                return;
            }
            let data = po2json.parseFileSync([stringsPath, value].join("/"));
            let content = JSON.stringify(data, null, 4);

            let savePath = "./src/oni/strings";

            if (!fs.existsSync(savePath)) {
                fs.mkdirSync(savePath, {recursive: true})
            }
            fs.writeFile([savePath, value.replace(".po", ".json")].join("/"), content, function (error) {
                console.log("文件写完");
            })
        });


};
main();