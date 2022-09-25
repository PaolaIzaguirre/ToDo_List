<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function get_all(Request $request){

    }
    public function save(Request $request){
        $task = new Task;
        $task->name=$request->name;
        $task->complete=$request->is_selected;
        $task->save();
        return response($task);
    }

    public function delete_all(Request $request){
        Task::truncate();
        return response('Lista de tareas vaciada con exito');
    }

    public function delete_complete(Request $request){
        $tasks = Task::whereIn('task_id',$request->ids)->delete();
        $task_avaible = Task::all();
        return response($task_avaible);
    }
}
