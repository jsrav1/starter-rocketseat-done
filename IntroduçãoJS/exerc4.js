
/*
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/
var anosEstudo = 1
function totalExperiencia(anosEstudo) {
    if (anosEstudo <= 1) {
        return "Iniciante"
    }
    if (anosEstudo <= 3) {
        return "Intermediário"
    }
    if (anosEstudo < 7) {
        return "Avançado"
    }
    if (anosEstudo >= 7) {
        return "Jedi Master"
    }
}

console.log(totalExperiencia(anosEstudo))