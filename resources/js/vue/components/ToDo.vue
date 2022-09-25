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
                            <input type="checkbox" class="form-check-input" v-model="is_selected">
                            <label class="form-check-label" for="complete">Completado</label>
                        </div>
                        <br><br>
                        <div class="field">
                            <button @click="save" class="miny ui blue button fluid">Guardar</button>
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
            task: {},
        };
    },
    props: {
        name: String,
        id_task: Number,
        is_selected: Boolean
    },
    emits: ['save_task'],
    methods: {
        save(){
            this.task = {
                id_task : this.id_task,
                name : this.name,
                is_selected : this.is_selected
            }
            let token = document.head.querySelector('meta[name="csrf-token"]');
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN'    : token.content,
                },
                body: JSON.stringify(this.task)
            };
            fetch("/save", options)
            .then(response => response.json())
            .then(res => {
                let info = {"id_task":res.task_id,"is_selected":res.complete,"name":res.name};
                this.$emit('save_task', info);
            });

        }
    },
}
</script>
