

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

        let showDisplay = document.getElementById('playgroundContainer');
        let hideDisplay = document.getElementById('playerName');
        let containerDisplay = document.getElementById('container');
        showDisplay.style.display = 'flex';
        hideDisplay.style.display = 'none';
        containerDisplay.style.display = 'block';

    }
 }

 