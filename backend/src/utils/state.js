const fs = require('fs');
const contentFilePath = ('./content.json');

function save(content) {
    const contentString = JSON.stringify(content);
    return fs.writeFileSync(contentFilePath, contentString);
};

function load() {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson
};

function indexAttraction(database) {
    const content = load();
    const attractions = content.attractions;
    let i = 0;
    for (i; i < attractions.length; i++) {
        const attraction = attractions[i].name;
        if(attraction == database){
            break;
        }
    }
    return i;
}


module.exports = {
    save,
    load,
    indexAttraction
}