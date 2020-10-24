export default class Home {
    constructor( parentEl ) {
        this.parentEl = parentEl;
    }

    setParentEl( parentEl ) {
        this.parentEl = parentEl;
    }

    render() {
        this.parentEl.innerHTML = `
            <div class="jumbotron">
                <h1 class="display-3">Workshops App</h1>
                <hr class="my-2" />
                <p class="lead">
                    Welcome to workshops app. You will find workshops happening in nearby places
                    <a href="/workshops">here</a>
                </p>
            </div>
        `;
    }
}
