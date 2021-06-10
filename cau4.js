let mindX = [
    {
        name:'Mai'
        old:19
        title: 'giamdoc'
    }
    {
        name:'Nam'
        old:20
        title: 'giamthi'
    }
    {
        name:'Manh'
        old:20
        title: 'baove'
    }
]

let input = prompt("enter command")

if(input=r){
console.log(mindX);
}

if(input=c){
inputName= prompt("Name");
inputOld= prompt('Old');
inputTitle= prompt('Title');
input.push({
    name:inputName
    old:inputOld
    title:inputTitle
})
}
if(input=u){
positionDelete=prompt('Which position');
typeDelete=prompt('Which type')
menu.splice[positionDelete,1]
}