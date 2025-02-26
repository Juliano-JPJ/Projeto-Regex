export default function ehUmNome(campo) {
    const nome = campo.value
//Regex para verificar se o campo nome não foi preenchido com caracteres repetidos, e que pode conter letras de A-z que possuam acentos
    const patternNome = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3,30}$/i.test(nome)  
    console.log(patternNome);

    if (!patternNome) {

        campo.setCustomValidity('Não é um nome válido');
        console.log(`"${nome}" não é um nome válido`)

    }

    return nome
}