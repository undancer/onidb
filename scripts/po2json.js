const po2json = require('po2json');
const fs = require('fs');

const main = () => {
    const {stringsPath} = require("./config.js");

    const messages = {};

    fs.readdirSync(stringsPath)
        .forEach((value, index, array) => {
            if (!value.match(/^strings_preinstalled_\w{2}_klei\.po$/g)) {
                return;
            }

            let data = po2json.parseFileSync([stringsPath, value].join("/"), {
                format: 'mf',
                fullMF: true,
            });

            const languages = ['en'];

            let {language} = data.headers;
            let {translations} = data;

            if (language !== '') {
                languages.push(language);
            }

            for (let [key, value] of Object.entries(translations)) {
                if (key === "") {
                    continue;
                }

                let translation = Object.entries(value).flat();
                languages.forEach((language, index) => {
                    let value = translation[index];

                    if (messages[language] == null) {
                        messages[language] = {};
                    }

                    Object.assign(messages[language], {[key]: value});
                });
            }
        });

    for (let [key, value] of Object.entries(messages)) {
        console.log(key);

        let savePath = "./src/oni/strings";

        if (!fs.existsSync(savePath)) {
            fs.mkdirSync(savePath, {recursive: true})
        }
        let data = JSON.stringify(value, null, 4);

        fs.writeFile([savePath, key + ".json"].join("/"), data, error => {
            console.log("文件写完");
        });
    }
};
main();
