import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import Swal from 'sweetalert2'

const storage = getStorage();




export default class ProductDetailsComponent{
    constructor(product){
        this.product = product
        console.log(product[0])
        
    }
    
    getHtml(){
        getDownloadURL(ref(storage, `/products-img/${this.product[0].id}`))
                            .then((url) => {
                                document.getElementById('img-div').querySelector('img').src=url
                                
                            })
                            .catch((error) => {
                            // Handle any errors
                        });
        return `
            <div class="container">
                <div class="card p-3 m-md-5 shadow blackborder">
                <div class="row align-items-start">
                    <div id="img-div" class="col-lg-6 p-3">
                        <img class="w-100" src="" alt="">
                    </div>
                    <div class="col-lg-6 p-3 row ">
                    <div class="row ">
                        <div class="col-12 p-4 d-block d-lg-none">
                            <h2 id="product-name" style="text-transform: capitalize;">${this.product[0].name}</h2>
                        </div>
                    </div>
                    <div class="mx-3 mt-4 col-12 col-sm-6 col-md-6 col-lg-12 row">
                        <h3>
                            <span class="font-weight-normal" style="font-size:0.6em"></span>
                            <span id="product-value">R$${this.product[0].price}</span>
                            <span id="parce" class= " font-weight-normal" style="font-size:0.6em"><span id="vezes"></span>
                                <span id="dividi"></span>
                            </span>
                            <span id="desc-prod"></span>
                            <span id="parce" class= " font-weight-normal" style="font-size:0.6em"><span id="vezesDesc"></span>
                                <span id="dividiDesc"></span>
                            </span>
                        </h3>
                        </div>
                        
                        <div class="row mx-2 mt-4 col-12 ">
                        <div class="col-12 col-sm-8 col-lg-12 offset-0 offset-sm-2 offset-lg-0">
                            <button id="comprar" type="button" class="btn btn-danger w-100 my-1 shadow-small">Comprar agora</button>
                        </div>
                        </div>
                    <div class="row">
                        
                    </div>
                    </div>
                    <div class="col-12 row p-4">
                    <div class="col-12 p-2 d-none d-lg-block">
                        <h2 id="product-name2" style="text-transform: capitalize;">${this.product[0].name}</h2>
                    </div>
                    <div class="col-md-6 col-lg-4 p-2">
                        <h5>Escolha o tamanho:</h5>
                        <div class="d-inline" id="size-div" style="font-size:1.5em">
                        ${
                            this.carregarTamanhos()
                        }
                        </div>
                        <div id="size-chosed" class="mt-2"><br></div>
                    </div>
                    <div class="col-md-6 col-lg-4 p-2">
                        <h5>Escolha a cor:</h5>
                        <div class="d-inline" id="color-div" style="font-size:1.5em">
                        ${
                            this.carregarCores()
                        }
                        </div>
                        <div id="color-chosed" class="mt-2"><br></div>
                    </div>
                    <div class="col-lg-4 p-2 row">
                        <h5 class="col-lg-6">Marca:</h5>
                        <div id="brand-div" class="col-12">
                            ${this.product[0].marca}
                        </div>
                    </div>
                    <div class="col-12 p-2">
                        <h5>Descrição</h5>
                        <p id="loremipsumhere" class="text-justify">
                            ${this.product[0].description}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        `
    }
    carregarTamanhos(){
        let sizesText = ''
        for(let i = 0; i < this.product[0].size.length; i++){
            if(this.product[0].size == "-"){
                size = "padrão"
                
            }
            console.log(i)
            console.log(this.product[0].size[i])
            sizesText += '<span onClick="console.log(this.parentNode.parentNode.querySelector(\'#size-chosed\').innerHTML=this.innerHTML)" tabindex="0" class="badge badge-danger shadow-sm size">'+this.product[0].size[i]+'</span>'   
        }
        return sizesText
    }
    carregarCores(){
        let colorsText = ''
        for(let i = 0; i < this.product[0].color.length; i++){
            colorsText += '<span onClick="console.log(this.parentNode.parentNode.querySelector(\'#color-chosed\').innerHTML=this.innerHTML)" tabindex="0" class="badge badge-danger shadow-sm color">'+this.product[0].color[i]+'</span>'
        }
        return colorsText
    }
    eventListener(){
        document.querySelector('#comprar').addEventListener("click", (e)=>{
            const grandFather = e.target.nodeParent.nodeParent.nodeParent
            console.log(grandFather)
        })
    }

}

