import RepositorioDeProdutos from '../../repositories/product-repository.repositories.js';
import DesktopNavbarComponent from '../../components/desktop-navbar.component';

import ProductDetailsComponent from '../../components/product-detail.component';

function iniciarProductDetail () {
    const body = document.querySelector('#detail')



    body.innerHTML += new DesktopNavbarComponent().getHtml()
    

    const params = new Proxy(new URLSearchParams(window.location.search),
            {get: (searchParams, prop) => searchParams.get(prop),
            });
    const productParam = params.filter;

    

    const e = new RepositorioDeProdutos().retornarProduto(productParam).then(produto =>{

        const productDetailComponent = new ProductDetailsComponent(produto)
        const myelement = productDetailComponent.getHtml()
        body.innerHTML += myelement
    })
    
}
if (document.querySelector('#detail')){
    window.onload = iniciarProductDetail();
}
