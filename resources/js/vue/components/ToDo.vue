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
                        <div class="meta">
                            <span>2 days ago</span>
                            <a>Animals</a>
                        </div>
                        <p></p>
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
