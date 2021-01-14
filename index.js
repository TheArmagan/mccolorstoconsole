const colors = require("./colors");

/**
 * @param {String} text `Required`
 * @param {String} colorPrefixChar Default `§`
 * @param {Boolean} clearAtEnd Default `true`
 */
function minecraftToConsole(text="",colorPrefixChar="§",clearAtEnd=true) {
    let resultText = text.replace(new RegExp(`\\${colorPrefixChar}[\\dabcdefklmnor]`,"gm"),(v)=>{
        return colors.forConsole[v.slice(1)];
    });
    return clearAtEnd ? resultText+colors.forConsole.r : resultText;
}

module.exports = {
    minecraftToConsole,
    colors
}