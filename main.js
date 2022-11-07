function createGame(img1,hr,img2){
    return `
    
        <li>
            <img src="./assets/icon${img1}.svg" alt="Bandeira do ${img1}">
            <strong>${hr}</strong>
            <img src="./assets/icon${img2}.svg" alt="Bandeira de ${img2}">
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    
        <div class="card" style="animation-dalay: 1s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}



document.querySelector('#cards').innerHTML = 
    
        createCard('22/11', 'terça', 
        createGame('Argentina', '07:00', 'Arabia') +
        createGame('Franca', '16:00', 'australia'))
        +
        createCard('23/11', 'quarta', 
        createGame('Alemanha', '10:00', 'Japao')+
        createGame('espanha', '13:00', 'costaRica'))
        +
        createCard('24/11', 'quinta', 
        createGame('portugal', '13:00', 'gana')+
        createGame('Brasil', '16:00', 'Servia'))
        +
        createCard('25/11', 'sexta', 
        createGame('holanda', '13:00', 'equador'))
        +
        createCard('26/11', 'sabado', 
        createGame('Franca', '13:00', 'Dinamarca')+
        createGame('argentina', '16:00', 'mexico'))
        +
        createCard('27/11', 'domingo', 
        createGame('espanha', '16:00', 'Alemanha'))
        +
        createCard('28/11', 'segunda', 
        createGame('brasil', '13:00', 'suica')+
        createGame('portugal', '16:00', 'uruguai'))
        +
        createCard('29/11', 'terça', 
        createGame('holanda', '12:00', 'catar'))
        +
        createCard('30/11', 'quarta', 
        createGame('tunisia', '13:00', 'franca')+
        createGame('argentina', '16:00', 'polonia'))
        +
        createCard('01/12', 'quinta', 
        createGame('japao', '16:00', 'espanha')+
        createGame('costarica', '16:00', 'alemanha'))
        +
        createCard('02/12', 'sexta', 
        createGame('coreiadosul', '12:00', 'portugal')+
        createGame('camaroes', '16:00', 'brasil'))

