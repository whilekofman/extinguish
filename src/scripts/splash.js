class Splash {
    constructor(htmlEl) {

        this.htmlEl = htmlEl

    }

    displaySplash(htmlEl){
        console.log(htmlEl)
        let confirmButton = htmlEl.createElement('button')
        button.innerText = "Confirm"
        this.htmlEl.append(confirmButton)
    }
}

module.exports = Splash;
