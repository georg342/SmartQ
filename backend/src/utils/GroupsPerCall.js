const state = require('./state');

function calc(database){
    const content = state.load();

    const attractions = content.attractions;
    let i = 0;
    for (i; i < attractions.length; i++) {
        const attraction = attractions[i].name;
        if(attraction == database){
            break;
        }
    }

    let {seats, round_time} = attractions[i];
    round_time = round_time/60;
    
    let count = 15/round_time
    
    if(count <= Math.round(count)) {
        count = Math.round(count)
    }else{
        count = Math.round(count) + 1
    }

    console.log(count);

    content.attractions[i].gpc = count

    state.save(content);
}

calc(/* nome do banco */);