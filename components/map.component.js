
        import logo from '../src/assets/img/logo.svg'

        export default class MapComponent{
            
            getHtml(){
                return `
                    <div class="mapa my-3">
                        <div class="map text-center d-flex ">
                            <h2>Venha nos visitar!</h2>
                            <h4>Estamos em:</h4>
                            <h3 style="color: #fff;" class="rounded mt-3 py-2 px-4 primary-color-bg body-intro">Penalva</h3>
                        </div>
                    </div>
            
                    <div class="espace ">
                        <div class="footer-line"></div>
                    </div>  
                `
            }
        }