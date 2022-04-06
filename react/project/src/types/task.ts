export interface ITask{
    task:String,
    time:String,
    selected:boolean,
    completed:boolean,
    id:string
}

export interface Props{
    tasks:ITask[],
    selectTask:(selectedTask: ITask)=>void
} 