<template>
    <div>
<!-- Contenedor -->
        <div class="ui one column centered grid">
            <div class="column">
                <!-- Contenido de la tarjeta -->
                <div class="ui card fluid">
                    <div class="content ui form">
                        <div class="field">
                            <div class="field">
                                <input type="text" placeholder="Tarea..." v-model="name">
                                <input type="hidden" v-model="id_task">
                            </div>
                        </div>
                        <!-- checkbox and button-->
                        <div class="form-check ui checkbox">
                            <input type="checkbox" class="form-check-input" id="complete" v-model="is_selected">
                            <label class="form-check-label" for="complete">Completado</label>
                        </div>
                        <br><br>
                        <div class="field">
                            <button class="miny ui blue button fluid">Guardar</button>
                        </div>
                    </div>
                </div>
                <!-- Fin contenido de la tarjeta -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
            name: '',
            id_task: null,
            is_selected: false
    }
}
</script>
