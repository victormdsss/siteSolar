require('bootstrap-icons/font/bootstrap-icons.css');
import '../css/style.css';

import RepositorioDeProdutos from '../../repositories/product-repository.repositories.js';
import DesktopNavbarComponent from '../../components/desktop-navbar.component';
import ProductListComponent from '../../components/product-list.component.js';

function iniciarProducts () {
    const body = document.querySelector('#products')

    console.log(produts)

    body.innerHTML += new DesktopNavbarComponent().getHtml()
    
    
    const params = new Proxy(new URLSearchParams(window.location.search),
            {get: (searchParams, prop) => searchParams.get(prop),
            });
    const productParam = params.filter;
    console.log(productParam)

    new RepositorioDeProdutos().retornarProdutosComKeyword(productParam).then(listaDeProdutos =>{
        console.log(listaDeProdutos)
        const listaDeProdutosComponent = new ProductListComponent(listaDeProdutos,'Produtos')
        const myelement = listaDeProdutosComponent.getHtml()
        body.innerHTML += myelement
    })
}

if (document.querySelector('#products')){
    window.onload = iniciarProducts;
}