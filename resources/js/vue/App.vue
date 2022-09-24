<template>
    <div>
        <div class="ui two column centered grid">
            <div class="column cw">
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
