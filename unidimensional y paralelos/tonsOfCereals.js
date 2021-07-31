const tonsOfCereals = [38,40,57,24,34,41,50,23,35,43,52,29];

function calculate(array,combine,start) {
    let current = start;
    for(let tons of array) {
        current = combine(tons, current);
    }
    return current;
}

// console.log(calculate(tonsOfCereals, (a, b) => a+b, 0));
function calculateProduction(production) {
    let countsMore = 0;
    let countsLess = 0;
    let totalProduction = production.reduce((a,b) => a + b);
    const prom = totalProduction/12;
    
    for(tons of production) {
        
        if (tons > prom) {
            countsMore++
        } else {
            countsLess++
        }
        
    }
    
    console.log(`El promedio anual de toneladas cosechadas es ${prom}`)
    console.log(`Se produjo más que el promedio ${countsMore} veces`)
    console.log(`Se produjo menos que el promedio ${countsLess} veces`)
    // for (i=0; i<=12; i++) {
    //     const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    //     let tons = production[i]
    //     if(tons > prom) {
    //         let count = 0;

    //     } else if(tons < prom) {
            
    //     } else {
    //         console.log('No se encontraron más valores')
    //     }
    // }
}

calculateProduction(tonsOfCereals);