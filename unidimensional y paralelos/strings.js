const string = "A veces me pongo felipe y con tenis cuando programo";

function count(string) {
    const abc = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z" ];
    let count = 0;
    
    for(i=0; i<abc.length; i++){
        console.log(`La letra ${abc[i]} aparece ${string.split(abc[i]).length-1} veces en la frase '${string}'`);
        console.log(`La letra ${abc[i]} en mayusculas aparece ${string.split(abc[i].toUpperCase()).length-1} veces en la misma frase`);
    };
}

//La función no cuenta el número de instancias de un caracter con acento
count(string)