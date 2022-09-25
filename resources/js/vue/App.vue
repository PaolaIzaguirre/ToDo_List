<template>
    <div>
        <div class="ui grid container">
            <div class="column nine wide centered cw">
                <h3>Lista de Quehaceres</h3>
                <div class="ui column grid">
                    <div class="ui buttons fluid">
                        <button class="ui black button">
                            <i class="trash icon"></i>
                            Todas
                        </button>
                        <button class="ui grey button">
                            <i class="trash icon"></i>
                            Completadas
                        </button>
                        <button class="ui blue button" @click="add_task">
                            <i class="plus icon"></i>
                            nueva
                        </button>
                    </div>
                </div>
                <hr style="margin-top:5%">
                <ToDo v-for="task in list_task"></ToDo>
            </div>
        </div>
    </div>
</template>


<script>

import ToDo from './components/ToDo';

export default {
    component : {
        ToDo
    },
    components: { ToDo },
    data() {
        return {
            list_task: [],
        };
    },
    methods: {
        add_task(){
            this.list_task.push({"id":this.list_task.length+1,"name":""});
            console.log(this.list_task);
        },
    },
}
</script>
