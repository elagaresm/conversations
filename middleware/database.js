const fs = require('fs')

module.exports.readDatabase = (db) => {
    const data = fs.readFileSync(db, "utf8")
    let jsonData = JSON.parse(data)
    return jsonData;
}

module.exports.addToDatabase = (db, array, newConv) => {
    const data = fs.readFileSync(db)
    let jsonData = JSON.parse(data)
    jsonData[array].push(newConv)
    jsonData[array] = [...new Set(jsonData[array])]
    fs.writeFileSync(db, JSON.stringify(jsonData))
}

module.exports.clearDatabase = (db) => {
    const data = fs.readFileSync(db)
    let jsonData = JSON.parse(data)
    for (let prop in jsonData) {
        jsonData[prop] = [];
    }
    fs.writeFileSync(db, JSON.stringify(jsonData))
}
