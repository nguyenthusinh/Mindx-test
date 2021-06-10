let arr=['one','two','three','one','one','four','five','four','five','five'];

for(x=0; x <= arr.lenght; x++){
    if(arr(x).lastIndexOf(arr)!==-1){
        arr.splice(x,1)
    }
}
console.log(arr);
