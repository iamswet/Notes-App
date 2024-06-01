const fs=require('fs')

const data=fs.readFileSync('new.json')
const thedata=data.toString()
const obj=JSON.parse(thedata)

console.log(obj.name , obj.age)
console.log(obj)
obj.name="samarth"
obj.age=50

const userdat=JSON.stringify(obj)
fs.writeFileSync('new.json',userdat)

console.log(obj.name , obj.age)
