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
                                <input type="text" placeholder="Tarea..." v-model="task.name">
                                <input type="hidden" v-model="task.id">
                            </div>
                        </div>
                        <!-- checkbox and button-->
                        <div class="form-check ui checkbox">
                            <input type="checkbox" class="form-check-input" id="complete" v-model="task.is_selected">
                            <label class="form-check-label" for="complete">Completado</label>
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
            task: {
                name: '',
                id: null,
                is_selected: false
            }
        };
    },
}
</script>
