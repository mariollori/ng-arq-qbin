import { createAction, props } from '@ngrx/store'
import { ITask } from '../../domain/interfaces/task.interface'

export const getTasks   = createAction('[Task Component] getTasks', props<{ tasks: ITask[] }>())
export const createTask = createAction('[Task Component] createTask', props<{ task: ITask }>())
export const deleteTask = createAction('[Task Component] deleteTask', props<{ task: ITask, id: string }>())
