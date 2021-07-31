const ints = [1,2,3,4,5,6,7,8,9,10,10];

function deleteRep(array) {
    let count = 0;
    
    console.log(`${array} Es el arreglo original`)
    
    for(num of array) {
        count = array.filter(x => x===num).length;

        if(array.indexOf(num) != array.lastIndexOf(num)){

            let = newArray = array.splice(array.indexOf(num),count );

            console.log(`El número ${num} aparece más de una vez y se eliminó del array`);
            console.log(`${newArray} son los datos eliminados`);
            console.log(`${array} Es el nuevo arreglo`)
            
        } else if(array.indexOf(num) == array.lastIndexOf(num)) {
            
            console.log(`El número ${num} aparece sólo una vez`)
            
        }
    }
    // console.log(`el numero ${num} aparece en la posición ${array.indexOf(num)}, ${array.lastIndexOf(num)}`)
}

deleteRep(ints);