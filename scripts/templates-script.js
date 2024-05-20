customElements.define('card-template',
    class extends HTMLElement {
        constructor() {
            super();
            let card = document.getElementById('cardtemplate');
            let cardContent = card.content;

            const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(cardContent.cloneNode(true));
        }
    });