import faxadaImg from '../src/assets/img/fax.jpg'

export default class NewsletterComponent{
    
    getHtml(){
        return `
            <section class="newsletter">
                <div class="container">
                    <div class="row uau">
                        <div class="col-12 my-2 my-md-0 col-md-4 uau-card">
                            <div class="mx-2 secondary-color-dark-bg rounded shadow d-flex flex-column align-items-center px-1 py-4">
                                <i class="bi bi-credit-card"></i>
                                <h5 class="mt-2">Parcele em até 10x</h5>
                            </div>
                        </div>
                        <div class="col-12 my-2 my-md-0 col-md-4 uau-card">
                            <div class="mx-2 secondary-color-dark-bg rounded shadow d-flex flex-column align-items-center px-1 py-4">
                                <i style="font-size: 2rem" class="bi bi-chat-left-dots"></i>
                                <h5 class="mt-2">Suporte Online</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="secondary-color-dark-bg ">
                <div class="container py-5">
                    <div class="">
                        <div class="row email my-3 my-md-5 pt-2 pt-md-5">
                            <div class="col-12 col-md-7 text-md-left text-center d-flex align-items-center">
                                <div class="w-100 w-md-75 mx-auto">
                                    <h2 class="title ">Receba novidades da Solar Calçados</h2>
                                    <h4 class="my-3">Os melhores calçados da baixada no seu whatsapp!</h4>
                                    <div class="input-group mb-3 mt-3">
                                        <input type="text" class="form-control" placeholder="Digite seu número whatsapp" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                        <button class="btn btn-outline-secondary secondary-color-light-bg" type="button">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-5 d-none d-md-block">
                                <div class="text-md-right text-center">
                                    <img class="w-75 w-md-75 w-lg-75 rounded-circle" src="${faxadaImg}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        `
    }
}