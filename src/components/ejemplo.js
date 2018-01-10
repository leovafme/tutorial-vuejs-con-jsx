export default {
    data() {
        return {
            esRojo: true
        }
    },

    /*
     * Equivale a
     * <template>
     *   <div :class="{'es-rojo': esRojo}">
     *     <p>Texto de Ejemplo</p>
     *   </div>
     * </template>
     */
    render(h) {
        return (
            <div class={{ 'es-rojo': this.esRojo }}>
                <p>Texto de Ejemplo</p>
            </div>
        )
    }
}