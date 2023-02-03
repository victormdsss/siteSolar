import logo from '../src/assets/img/logo.svg'
import menu from '../src/assets/img/menu.svg'

export default class DesktopNavbarComponent{
    
    getHtml(){
        return `
            <header>
                <div class="top-header primary-color-dark-bg">
                    <div class="container">
                        <div class="row ">
                            <div class="col-12 col-md-6  d-flex flex-row align-items-center justify-content-center justify-content-md-start"> 
                                <div>
                                    <i class="bi bi-geo-alt"></i>
                                    <span class="caption" >Localização, Penalvaa</span>
                                </div>
                            </div>
                            <div class="contact  col-12 col-md-6  d-flex flex-row align-items-center justify-content-center justify-content-md-end">
                                <div class="px-3 ">
                                    <i class="mx-2 bi bi-instagram"></i>
                                    <i class="bi bi-facebook"></i>
                                </div>
                                <div class="px-5 h-100 primary-color-bg d-flex align-items-center">
                                    <p class="small-text">Alguma duvida?<br><span class="body-intro">Entre em contato</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="bottom-header primary-color-bg position-relative">
                    <div class="container">
                        <div class="row py-3 py-lg-0">
                            <div class="col-6 col-md-3 col-lg justify-content-center d-flex align-items-center">
                                <a href="index.html"><img class="pointer logo-img w-100" href="index.html" src="${logo}" alt=""></a>
                            </div>
                            <div class="menu col-6 col-md-9 col-lg-7  justify-content-center d-none align-items-center d-md-flex d-xl-flex">
                                <lu class="body-intro display-inline align-middle">
                                    <li><a href="products.html?filter=homem">Masculino</a></li>
                                    <li><a href="products.html?filter=mulher">Feminino</a></li>
                                    <li><a href="products.html?filter=kids">Kids</a></li>
                                    <li><a href="products.html?filter=esporte">Esporte</a></li>
                                    <li><a href="products.html?filter=acessorio">Acessórios</a></li>
                                </lu>
                            </div>
                            <div class="col-6 d-flex d-md-none d-lg-none justify-content-end">
                                <div class="" onclick="mobMenuPlay()">
                                    <img class="height-ico " src="${menu}" alt="">
                                </div>
                            </div>
                            
                            <div class="col-12 col-md-12 col-lg mt-2 mt-lg-0 justify-content-end d-flex align-items-center">
                                <div class="search-bar w-100">
                                    <div class="input-box">
                                        <form action="products.html" method="get">
                                            <input name="filter" placeholder="Pesquise aqui" type="text" class="form-control search">
                                        </form>                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `
    }
}