<template>
    <div>
<!-- Contenedor -->
        <div class="ui one column centered grid">
            <div class="column">
                <!-- Contenido de la tarjeta -->
                <div class="ui card">
                    <div class="content ui form">
                        <div class="field">
                            <div class="field">
                                <input type="text" placeholder="Tarea..." v-model="task_name">
                            </div>
                        </div>
                        <!-- checkbox and button-->
                        <div class="form-check ui checkbox">
                            <div class="two fields">
                                <div class="field">
                                    <input type="checkbox" class="form-check-input" id="complete">
                                    <label class="form-check-label" for="complete">Completado</label>
                                </div>
                                <div class="field">
                                    <i class="trash red alternate outline icon right floated"></i>
                                </div>
                            </div>
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
            task_name: '',
        };
    },
}
</script>
