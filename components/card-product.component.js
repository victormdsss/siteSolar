import productImg from '../src/assets/img/teste-calca.png'
import { getStorage, ref, getDownloadURL  } from "firebase/storage";

const storage = getStorage();

export default class ProductCardComponent{
        constructor(firebaseDocument){
            this.product = firebaseDocument
            
        }
        getHtml(){
            
                        getDownloadURL(ref(storage, `/products-img/${this.product.id}`))
                            .then((url) => {
                                document.getElementById(this.product.id).querySelector('img').src=url
                                
                            })
                            .catch((error) => {
                            // Handle any errors
                        });
                    return `
                    <div id="${this.product.id}" onClick="window.location.href = 'product-details.html?filter=${this.product.id}'" class="col-12 col-md-3 p-0">
                        <div class="product-card rounded">
                            <div class="product-card-price px-2 py-2 ">
                                <div>
                                    <h5 class="slide-product-name body-main">${this.product.name}</h5>
                                    <p class="slide-product-brand body-intro mt-1">${this.product.marca}</p>
                                </div>
                                <div class="mt-3 mb-2">
                                    <h5 class="slide-prodct-price d-inline">R$ ${this.product.price}</h5>
                                </div>
                            </div>
                            <div class="d-flex align-items-center position-relative">
                                <img style="background-color: #fff;" class="w-100" src="" alt="">
                                <div class="position-absolute buy-btn w-100 px-3">
                                    <a class="text-white text-center d-inline-block w-100 rounded py-2 px-4 primary-color-bg body-intro">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
            `
            
            
        }
    
}