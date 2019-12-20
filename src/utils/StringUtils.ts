const ToUnderscore = (input: string) => {
    let p = /([A-Z])/g;
    let str = input.replace(p, '_$1').toLowerCase();
    if (str.startsWith("_")) {
        str = str.substr(1);
    }
    return str;
};

export default ToUnderscore;
