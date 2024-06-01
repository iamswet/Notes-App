const validator=require('validator')
const chalk=require('chalk')
const newvar=require('./demo.js')

const value1=newvar()



console.log(validator.isEmail('isitswet@gmail.com'))

console.log(value1)

try{
    const mail="isitswet@hotmail.com"
    if(validator.isEmail(mail)){
        console.log(mail)
    }else{
        console.log("incorrect statement")
    }
}catch(e){
    console.log(e)
}

console.log(chalk.green.bgRed("Success"))


//const fs=require('fs')

//fs.writeFileSync('notes.txt',"hey first line is created")

//fs.appendFileSync('notes.txt',"\nmore lines are inserted")