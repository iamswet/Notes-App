const yargs=require('yargs')


yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe:'Title to the Note',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Body to the Note',
            demandOption:true,
            type:'string',
        }
    },
    handler:function(argv){
        console.log("nums are being added"+argv.title)
        console.log(argv.body)
    },
})

console.log(yargs.argv)
