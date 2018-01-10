// funcion para renderizas nuestro listado de frutas
function renderFrutas(h, listado) {
    return (
        <ul>
            {listado.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default {
    data() {
        return {
            // listado de frutas
            frutas: [
                'Manzana',
                'Pera',
                'Banano',
                'Fresa',
                'Kiwi'
            ]
        }
    },
    // render principal
    render(h) {
        return (
            <div>
                {renderFrutas(h, this.frutas)}
            </div>
        )
    }
}