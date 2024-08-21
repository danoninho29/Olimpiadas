/*Este código consiste em calcular todos os anos que 
tiveram olimpíadas de verão, começando pela primeira olimpíada(1986) até
o ano de hoje (2024),o cálculo consiste em que
se o resto da divisão por 4 for igual a 0, houve olimpíadas
*/



console.log("Todos os anos que tiveram olimpíadas de verão:")

for(let ano = 1896; ano<= 2024;ano++){
    if((olimpiadas = ano % 4)==0){

        if(ano == 1940 || ano == 1944){
        console.log(ano + "  Olimpíada cancelada devido a 2 Guerra Mundial")
        }
        else{
            console.log(ano)
        }

    }
}