const { genSaltSync, hashSync, compare } = require('bcryptjs');

exports.hashThePassword = (password) => {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt)
    return hashedPassword
}

exports.compareHashPassword = (password, dbPassword) => {
   const isMatch = compare(password, dbPassword)
   return isMatch
}