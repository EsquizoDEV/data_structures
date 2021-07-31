const grades = [10,8,7,9,3,10,6,5,5,5,10,2,9,5,6,78,3,6,8,3];

function gradesReport(grades) {
    let students = 0;
    let aproved = 0;
    let failed = 0;
    //Conteo de alumnos
    for (grade of grades) {
        students++

        if(grade > 5) {
            aproved++
        } else {
            failed++
        }
    }
    console.log(` hay ${students} alumnos`)

    const totalGrades = grades.reduce((accum, grade) => accum + grade );
    const prom = totalGrades/students;
    const aRate = aproved/students; 
    const fRate = failed/students; 

    console.log(`El promedio general del grupo es ${prom}`);
    console.log(`Hay un total de ${aproved} alumnos aprobados`);
    console.log(`Hay un total de ${failed} alumnos reprobados`);
    console.log(`El porcentaje de alumnos reprobados es ${fRate * 100}%`)
    console.log(`El porcentaje de alumnos aprobados es ${aRate *100}%`)

    

    

}

gradesReport(grades)