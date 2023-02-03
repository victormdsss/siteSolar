import logo from '../img/logo.svg'

export default class DesktopFooterComponent{
    
    getHtml(){
        return `
            <ul class="nav-list nav-list-mobile" >
                <li><a href="products.html?search=homem">Masculino</a></li>
                <li><a href="products.html?search=feminino">Feminino</a></li>
                <li><a href="products.html?search=kids">Kids</a></li>
                <li><a href="products.html?search=esportivo">Esporte</a></li>
                <li><a href="products.html?search=esportivo">Acessórios</a></li>
            </ul>
        `
    }
}