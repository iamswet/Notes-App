const tasks ={
    tasks:[{
        text: 'MyL1',
        completed: true
    },{
        text: 'MyL2',
        completed: true
    },{
        text: 'MyL3',
        completed: false
    }],

    gottodo(){
        const tobedone=this.tasks.filter((task) => {
            if(task.completed === false){
                return task
            }
        })
        return tobedone
    }
}

console.log(tasks.gottodo())



