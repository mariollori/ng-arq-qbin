import { ITask } from './task.interface'

export interface ITaskState {
    tasks   : ITask[]
    loading : boolean
    error   : any
}
