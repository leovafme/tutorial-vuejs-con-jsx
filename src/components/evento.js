export default {
    data() {
        return {
            esRojo: true,
            mensaje: 'Dame Click'
        }
    },
    methods: {
        saludar () {
            alert('Hola como que tal.')
        }
    },
    render(h) {
        return (
            <span class={{ 'es-rojo': this.esRojo }} on-click={ this.saludar } >
                { this.mensaje }
            </span>
        )
    }
}