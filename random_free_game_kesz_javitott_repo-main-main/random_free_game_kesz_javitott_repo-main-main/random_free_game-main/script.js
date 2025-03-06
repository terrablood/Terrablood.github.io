async function jetek_adatbazis(){
    let promise = await fetch('https://www.freetogame.com/api/games')
    let csomag = await promise.json();
    return csomag; 
}
async function frissites(e){ 
    let jatek = await jetek_adatbazis();
    felvezetes.innerHTML = jatek.setup;
    title.innerHTML = nev.delivery
    genre.innerHTML = műfaj.delivery
    platform.innerHTML = platform.delivery
    game_url.innerHTML = insert_platform.delivery
    developer.innerHTML = készítő.delivery
}

function main(){
    kerek.addEventlistener('click', frissites);
}

