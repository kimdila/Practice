export default class View {
    #rootElement = null;

    static bootstrap(callback) {
        window.addEventListener('DOMContentLoaded', callback);
    }

    constructor(elementId) {
        this.#rootElement = document.getElementById(elementId);
    }

    render(contentHTML) {
        this.#rootElement.insertAdjacentHTML('afterbegin', contentHTML);
    }
}