import logo25 from './assets/img/Logo 25 años.png'
import Expand from './assets/expand_more_light.svg'

const Content = () => {
    return (
        <main>
            <section className="presentation">
                <div>
                    <img className="logo25" src={logo25} alt="Logo de los 25 años de la empresa" />
                </div>
                <div className='text'>
                    <h1 className="tituloLanding">LLEVANDO IDEAS<br />AL PAPEL</h1>
                    <p>Somos una empresa con más de 25 años trabajando en el mercado local
                        para brindar el mejor servicio posible a nuestros clientes.
                    </p>
                    <div className="arrow">
                        <p>Descubrí</p>
                        <a><img src={Expand} alt='Flecha apuntando hacia abajo' /></a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Content;