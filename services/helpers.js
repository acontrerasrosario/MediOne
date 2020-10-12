const underscore = require('underscore');
const lodash     = require('lodash');
// Nodejs encryption with CTR
const crypto    = require('crypto');
const algorithm = 'aes-256-cbc';
const key       = 'aa24f5c20395743ca1cf6ef4cbe290cf';
const iv        = crypto.randomBytes(16);

const SqlInjectionMethods = ['=','LIKE','NOT LIKE','DELETE','FROM','UPDATE','INSERT'];

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

Array.prototype.forEachAsync = async function (fn) {
    for (let t of this) { await fn(t)}
}

Array.prototype.forEachAsyncParallel = async function (fn) {
    await Promise.all(this.map(fn));
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

String.prototype.isNullOrEmpty = function() {
    let str = this.valueOf();
    str = str.toLowerCase();
    if (str == null || str.trim().length === 0 || str == '' || str == 'null' || str == 'undefined') return true
    else return false;
}

module.exports  = {
    encrypt = encrypt,
    decrypt              = decrypt,
    underscore           = underscore,
    lodash               = lodash,
    SqlInjectionMethods  = SqlInjectionMethods,
    logError             = logError,
}