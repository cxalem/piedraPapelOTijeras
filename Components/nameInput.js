class nameInput extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get styles() {
   return /* css */ `
     :host{
      --titlesColor: #282828;
    }

    .playerName {
      background: white;
      padding: 60px;
      border-radius: 10px;
      box-shadow: 1px 1px 15px #83838349;
  }
  
  .playerName > h2 {
      color: var(--titlesColor);
      font-size: 3.5rem;
      text-align: center;
      margin-bottom: 50px;
  }

  form > .inputButton {
   display: none;
}

form > .inputText {
   outline-style: none;
   background: var(--inputBackground);
   color: var(--textColor);
   border-radius: 50px;
   font-weight: bold;
   text-align: center;
   font-size: 25px;
   width: auto;
   height: 50px;
   border-style: none;
   box-shadow: 1px 1px 10px #25252556;
}
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${nameInput.styles}</style>

      <div class="playerName">
         <h2>¡Escribe tu nombre!</h2>
         <form action="" onsubmit="return showPlayground()">
            <input class="inputText" type="text" id="name">
            <input class="inputButton" type="submit" value="Submit">
         </form>
      </div>`;
 }

 showPlayground() {
   let okForm = true;
   let name = document.getElementById('name').value;

   if (name == null || name.length == 0) {
      alert("Completa tu nombre, por favor")
      okForm = false;
   }

   else {
      let showDisplay = document.getElementById('playgroundContainer');
      showDisplay.style.display = 'block';
   }

return okForm;
}
}

customElements.define("name-input", nameInput);