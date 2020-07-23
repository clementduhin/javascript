const users = require('./user.json');
const comments = require('./comments.json')

function joinObject(users, comments) {
    let newJson = [];

    for(let u=0; u<users.length; u++) {
        let obj = {};
        for (let i=0; i<comments.length; i++) {
            if (comments[i]['user_id']===users[u]['id']) {
                if(obj['comment']===undefined){
                    obj = {...users[u]};
                obj['comment'] = [];
                obj['comment'].push({...comments[i]});
                } else
                obj['comment'].push({...comments[i]});
            } 
        }
        if(obj['comment']!=null){
            newJson.push(obj);
        }
    }
    return newJson
}
 joinObject(users, comments);
 console.log(joinObject(users, comments));

 