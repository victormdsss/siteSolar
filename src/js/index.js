require('bootstrap-icons/font/bootstrap-icons.css');
import '../css/style.css';

import RepositorioDeProdutos from '../../repositories/product-repository.repositories.js';
import DesktopNavbarComponent from '../../components/desktop-navbar.component';
import HeroComponent from '../../components/hero.component';
import ProductListComponent from '../../components/product-list.component.js';
import NewsletterComponent from '../../components/newsletters.component';
import MapComponent from '../../components/map.component';



function iniciarIndex () {
    const body = document.querySelector('#index')

    body.innerHTML += new DesktopNavbarComponent().getHtml()
    body.innerHTML += new HeroComponent().getHtml()
    

    new RepositorioDeProdutos().retornarProdutosEmDestaque().then(listaDeProdutos =>{
        console.log(listaDeProdutos)
        const listaDeProdutosComponent = new ProductListComponent(listaDeProdutos,'Destaques')
        const myelement = listaDeProdutosComponent.getHtml()
        
        body.innerHTML += myelement
        body.innerHTML += new NewsletterComponent().getHtml()
        body.innerHTML += new MapComponent().getHtml()
    })
}

if (document.querySelector('#index')){
    window.onload = iniciarIndex;
}