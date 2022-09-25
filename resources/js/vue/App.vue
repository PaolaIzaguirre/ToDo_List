<template>
    <div>
        <div class="ui grid container">
            <div class="column four wide centered cw">
                <h3>Lista de Quehaceres</h3>
                <div class="ui column grid">
                    <div class="ui buttons">
                        <button class="ui red button">
                            <i class="trash icon"></i>
                            Todos
                        </button>
                        <div class="or"></div>
                        <button class="ui yellow button">
                            <i class="trash icon"></i>
                            Completados
                        </button>
                    </div>
                </div>
                <hr>
                <ToDo></ToDo>
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
    components: { ToDo }
}
</script>
