import { Action, State, createReducer, on } from '@ngrx/store'

import { getTasks, createTask, deleteTask } from '../actions/task.action'
import { ITaskState } from '../../domain/interfaces/task-state.interface'

export const initialState: ITaskState = {
    tasks   : [],
    loading : false,
    error   : undefined
}

export const taskReducer = createReducer(
    initialState,
    on(getTasks, (state, { tasks } ) => ({ tasks: [] }))
)
