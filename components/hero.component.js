import heroProduct from '../src/assets/img/teste-calc.png'

export default class HeroComponent{
    
    getHtml(){
        return `
            <section class="hero">
                <div class="container h-100"> 
                    <div class="row h-100">
                        <div class="col-12 col-md-5 d-flex text-center text-md-left align-items-center justify-content-center justify-content-md-start">
                            <div class="cta-slide w-100 w-md-75 mt-4 mt-md-0">
                                <h1 style="color: #000;">Lorem ipsum dolum</h1>
                                <button class="rounded  primary-color-bg mt-1 px-4 py-3"><a href="#destaques"><h5>Ver mais destaques</h5></a></button>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div class="w-100">
                                <img class="w-100" src="${heroProduct}" alt="">
                                <div class="slide-product position-absolute">
                                    <div>
                                        <h4 class="slide-product-name">Rasteira Aplique</h4>
                                        <p class="slide-product-brand body-main">Ramarim</p>
                                    </div>
                                    <div class="mt-3 d-flex align-items-center justify-content-between">
                                        <p class="slide-prodct-price body-intro  d-inline">R$ 109,99</p>
                                        <i class="bi bi-arrow-right"></i>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container text-center">
                <div class="primary-color-bg my-5 py-4 text-center ">
                    <h4 style="color: #FFF;">Compre no site e receba na sua cidade!</h4>
                </div>
            </section>
        `
    }
}


