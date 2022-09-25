<template>
    <div>
        <div class="ui grid container">
            <div class="column nine wide centered cw">
                <h3>Lista de Quehaceres</h3>
                <div class="ui column grid">
                    <div class="ui buttons fluid">
                        <button class="ui red button">
                            <i class="trash icon"></i>
                            Todas
                        </button>
                        <button class="ui yellow button">
                            <i class="trash icon"></i>
                            Completadas
                        </button>
                        <button class="ui green button">
                            <i class="plus icon"></i>
                            nueva
                        </button>
                    </div>
                </div>
                <hr style="margin-top:5%">
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
