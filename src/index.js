const personagem_1 = {
    nome: "Mario",
    velocidade: 4,
    manobrilidade: 3,
    poder: 3,
    pontos: 0,
};

const personagem_2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrilidade: 4,
    poder: 4,
    pontos: 0,
};

async function rolarDado(params) {
    return Math.floor(Math.random() * 6) + 1;
        
}

async function getBlocoAleatorio(params) {
    let random = Math.random();
    let resultado;

    switch (true) {
        case random < 0.33:
            resultado = "RETA";
            break;

        case random < 0.66:
            resultado = "CURVA";
            break;

        default:
            resultado = "CONFRONTO";
            break;
    }

    return resultado;

}

async function resultadoRolagemLog(nome, bloco, resultadoDado,attribute) {
    console.log(`${nome} 🎲 rolou um dado de ${bloco} ${resultadoDado} + ${attribute} = ${resultadoDado+attribute} 🎲`);
    
}

async function engrenagemIniciarCorrida(personagem_1,personagem_2) {
    for( let rodada = 1; rodada <= 5 ; rodada++){
        console.log(`🏁 Rodada ${rodada} 🏁`);

        //sortear bloco
        let bloco = await getBlocoAleatorio();
        console.log(`Bloco sorteado: ${bloco}`);
        
        //rolar os dados
        let resultadoDado1 = await rolarDado();
        let resultadoDado2 = await rolarDado();
    
        //teste de habilidade
        let TotalTesteHabilidade1 = 0; 
        let TotalTesteHabilidade2 = 0;
    
        if (bloco === "RETA") {
            TotalTesteHabilidade1 = personagem_1.velocidade + resultadoDado1;
            TotalTesteHabilidade2 = personagem_2.velocidade + resultadoDado2;
    
            await resultadoRolagemLog(
                personagem_1.nome,
                "RETA",
                resultadoDado1,
                personagem_1.velocidade
            );
    
            await resultadoRolagemLog(
                personagem_2.nome,
                "RETA",
                resultadoDado2,
                personagem_2.velocidade
            );
        }
        if (bloco === "CURVA") {
            TotalTesteHabilidade1 = personagem_1.manobrilidade + resultadoDado1;
            TotalTesteHabilidade2 = personagem_2.manobrilidade + resultadoDado2;
    
            await resultadoRolagemLog(
                personagem_1.nome,
                "CURVA",
                resultadoDado1,
                personagem_1.manobrilidade
            );
    
            await resultadoRolagemLog(
                personagem_2.nome,
                "CURVA",
                resultadoDado2,
                personagem_2.manobrilidade
            );
    
        }
        if (bloco === "CONFRONTO") {
            let ResultadoPoder1 = personagem_1.poder + resultadoDado1;
            let ResultadoPoder2 = personagem_2.poder + resultadoDado2;
    
            await resultadoRolagemLog(
                personagem_1.nome,
                "CONFRONTO",
                resultadoDado1,
                personagem_1.poder
            );
    
            await resultadoRolagemLog(
                personagem_2.nome,
                "CONFRONTO",
                resultadoDado2,
                personagem_2.poder
            );
    
        }
    }
    
}

//função auto executável
(async function main(params) {
    console.log(
        `🏁🚨 Corrida entre ${personagem_1.nome} e ${personagem_2.nome} está começando...\n`
        );
    await engrenagemIniciarCorrida(personagem_1, personagem_2);
})();

