function onLoad() {
    let who = ['Batman','A ghost','My fox','An alien'];
    let action = ['hit','charm','theft','kidnapping'];
    let what = ['my code', 'my laptop', 'my wifi'];
    let when = ['while training','before save','when I almost finished','in the night','while I was eating'];

    let randomWho = who[Math.floor(Math.random()*who.length)];
    let randomAction = action[Math.floor(Math.random()*action.length)];
    let randomWhat = what[Math.floor(Math.random()*what.length)];
    let randomWhen = when[Math.floor(Math.random()*when.length)];

    let excuse = randomWho.concat(" ",randomAction," ",randomWhat," ",randomWhen);
        
    document.getElementById("excuse").innerHTML = excuse;
}