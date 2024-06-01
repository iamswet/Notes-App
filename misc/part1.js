const fs=require('fs')

const data={
    name:"swet",
    planet:"Earth",
    age:20,
}

const datatype=JSON.stringify(data)

fs.writeFileSync('new.json',datatype)
