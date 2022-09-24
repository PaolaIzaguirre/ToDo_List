<template>
    <div>
        <div class="ui grid container">
            <div class="column seven wide centered cw">
                <h3>Lista de Quehaceres</h3>
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
