const yaml = require("js-yaml");
const fs = require("fs");

const main = () => {

    let gamePath = "/Users/undancer/Library/Application Support/Steam/steamapps/common/OxygenNotIncluded/OxygenNotIncluded.app";

    let assetsPath = gamePath + "/Contents/Resources/Data/StreamingAssets";

    let elementsPath = assetsPath + "/elements";

    fs.readdirSync(elementsPath).forEach((value, index, array) => {
        let file = fs.readFileSync([elementsPath, value].join("/"));
        let data = yaml.safeLoad(file);
        let content = JSON.stringify(data, null, 4);


        let savePath = "../src/oni/elements";

        if (!fs.existsSync(savePath)) {
            fs.mkdirSync(savePath, {recursive: true})
        }
        fs.writeFile([savePath, value.replace(".yaml", ".json")].join("/"), content, function () {
            console.log("文件写完");
        })
    });

};

main();


