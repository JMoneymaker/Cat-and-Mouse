import Component from '../Component.js';

class Header extends Component {
    
    renderHTML() {
        const title = this.props.title || 'Cat & Mouse';

        return /*html*/ `
        <header>
            <div class = 'logo'>${title}</div>
            <div class = 'dice'>
                <button>roll</button>
                <img class="die" src="../assets/one.png" alt="one">
                <img class="die" src="../assets/five.png" alt="five">
            </div>
        </header>
    
    `;
    }
}

export default Header;