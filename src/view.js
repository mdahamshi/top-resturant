import  home from   './pages/home.js';
import menu from './pages/menu.js';
import about from './pages/about.js';

class View {

    constructor(){
        this.content = document.getElementById('content');
        this.initPages();

        this.content.appendChild(this.pages.home);
        this.addEvents();
    }
    initPages(){
        this.pages.home = home();
        this.pages.menu = menu();
        this.pages.about = about();
    }
    pages = {};
    replaceContent(newContent){
        let c = this.content;
        let child = c.firstChild;
        c.replaceChild(newContent, child);
    }
    actions = ['home', 'about', 'menu'];
    addEvents(){
        const buttons = document.querySelectorAll('.flex-row button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const action = button.dataset.action;
                if(this.actions.includes(action))
                    this.replaceContent(this.pages[action])
            });
        });
    }
}


export {View};