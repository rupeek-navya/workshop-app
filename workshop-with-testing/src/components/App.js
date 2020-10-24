import Navbar from './Navbar';
import Home from './Home';

export default class App{
    constuctor(parentEl){
        this.parentEl=parentEl;
        this.navbarEl=new Navbar(null);
        this.homeEL=new Home(null);
    }
    setParentEl(parentEl){
        this.parentEl=parentEl;
    }
    render() {
        this.parentEl.innerHTML = `
            <div>
                <div class="navbar-container"></div>
                <div class="container home-container my-4"><div>
            </div>
        `;
        this.navbarEl.setParentEl( this.parentEl.querySelector( '.navbar-container' ) );
        this.navbarEl.render();
        
        this.homeEl.setParentEl( this.parentEl.querySelector( '.home-container' ) );
        this.homeEl.render();
    }
}