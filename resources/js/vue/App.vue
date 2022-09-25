<template>
    <div>
        <div class="ui grid container">
            <div class="column nine wide centered cw">
                <h3>Lista de Quehaceres</h3>
                <div class="ui column grid">
                    <div class="ui buttons fluid">
                        <button class="ui black button" @click="delete_all">
                            <i class="trash icon"></i>
                            Todas
                        </button>
                        <button class="ui grey button" @click="delete_complete">
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
                <div class="container-todo">
                    <ToDo
                        v-for="task in list_task" :key="task.id"
                        :name="task.name"
                        :is_selected="task.is_selected"
                        :id_task="task.id_task"
                        @save_task="save"
                        >
                    </ToDo>
                </div>
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
            this.list_task.push({"id_task":0,"name":"", "is_selected":false});
        },
        delete_all(){
            let token = document.head.querySelector('meta[name="csrf-token"]');
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN'    : token.content,
                },
            };
            fetch("/delete_all", options)
            .then(response => response.text())
            .then(res => {
                this.list_task = [];
            });
        },
        save(value){
            this.list_task.find(t => {
                if(t.id_task == value[1]){
                    t['name'] = value[0].name;
                    t['id_task'] = value[0].id_task;
                    t['is_selected'] = value[0].is_selected;
                }
            });
        },
        delete_complete(){
            let ids = this.list_task.map(el => {
                if(el.is_selected){
                    return el.id_task;
                }
            })
            .filter(notUndefined => notUndefined !== undefined);
            // Perticion
            let token = document.head.querySelector('meta[name="csrf-token"]');
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN'    : token.content,
                },
                body: JSON.stringify({"ids":ids})
            };
            fetch("/delete_complete", options)
            .then(response => response.json())
            .then(res => {
                this.list_task = []
                this.fill_tasks(res);
            });

        },
        fill_tasks(res){
            for (let task of res) {
                let is_selected = false;
                if(task.complete == 1){
                    is_selected = true;
                }
                let task_ = {"name":task.name, "id_task": task.task_id, "is_selected":is_selected}
                this.list_task.push(task_);
            }
        }
    },
    beforeCreate(){
        let token = document.head.querySelector('meta[name="csrf-token"]');
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRF-TOKEN'    : token.content,
                },
            };
            fetch("/dashboard", options)
            .then(response => response.json())
            .then(res => {
                this.list_task = []
                this.fill_tasks(res);
            });
    }
}
</script>
