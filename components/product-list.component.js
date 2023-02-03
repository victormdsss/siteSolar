import CardDeProdutoComponent from './card-product.component.js'

export default class ProductListComponent{
    constructor(productList,listName){
        this.productList = productList
        console.log(productList)
        this.name = listName
    }
  
    getHtml(){
          return `
                <section id="destaques" filter="featured" class="list destaques my-5">
                    <div class="container">
                        <div class="text-center text-md-left mb-5">
                            <h2>${this.name}</h2>
                        </div>
                        <div class="row mx-auto mt-3 w-100 w-md-75 d-flex">
                    
                            ${
                                this.productList.reduce(
                                    (html, produto) => html += new CardDeProdutoComponent(produto).getHtml(), 
                                    "")
                            }
                        </div>
                    </div>
                </section>
        `
  }
}