function showPlayground() {    
    
    let okForm = true;
    let name = document.getElementById('name').value;
 
    if (name == null || name.length == 0) {
       alert("Completa tu nombre, por favor")
       okForm = false;
    }

    else {
        
        const title = document.createElement("h1");
        const namedTitle = document.createTextNode(name);
        title.appendChild(namedTitle);
        const element = document.getElementById('namedTitle');
        element.insertAdjacentElement("afterbegin", title);

        const showDisplay = document.getElementById('playgroundContainer');
        const hideDisplay = document.getElementById('playerName');
        const containerDisplay = document.getElementById('container');
        showDisplay.style.display = 'flex';
        hideDisplay.style.display = 'none';
        containerDisplay.style.display = 'block';

    }
 }


const piedra = document.getElementById('rock');
const papel = document.getElementById('paper');
const tijeras = document.getElementById('scissors');
const options = [piedra, papel, tijeras];

function getCpuChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
  }

options.map( option =>{
    option.addEventListener('click', e => {
        if (e.target == piedra) {
            const cpuChoice = getCpuChoice();
            if (cpuChoice == papel) {
                console.log('perdiste');
            }
            else if (cpuChoice == tijeras) {
                console.log('ganaste');
            }
            else if(cpuChoice == piedra) {
                console.log('empate');
            }
        }
        else if (e.target == tijeras) {
            const cpuChoice = getCpuChoice();
            if (cpuChoice == piedra) {
                console.log('perdiste');
            }
        }
    })
})
