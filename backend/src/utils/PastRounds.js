const state = require('./state.js');

const content = state.load();

function add(database) {
    const attractions = content.attractions;
    let response = false;
    let i = 0;
    for (i; i < attractions.length; i++) {
        const attraction = attractions[i].name;
        if(attraction == database){
            break;
        }
    }
    let current_pr = content.attractions[i].pr;
    current_pr++

    if (current_pr == attractions[i].gpc) {
        response = true;
        current_pr = 0
    }     
    
    content.attractions[i].pr = current_pr;    
    state.save(content);

    return response;
}

module.exports = { add }