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

async function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getBlocoAleatorio() {
    let random = Math.random();

    if (random < 0.33) return "RETA";
    if (random < 0.66) return "CURVA";
    return "CONFRONTO";
}

async function resultadoRolagemLog(nome, bloco, resultadoDado, atributo) {
    console.log(`${nome} 🎲 rolou um dado de ${bloco} ${resultadoDado} + ${atributo} = ${resultadoDado + atributo} 🎲`);
}

async function engrenagemIniciarCorrida(personagem_1, personagem_2) {
    for (let rodada = 1; rodada <= 5; rodada++) {
        console.log(`🏁 Rodada ${rodada} 🏁`);

        let bloco = await getBlocoAleatorio();
        console.log(`Bloco sorteado: ${bloco}`);

        let resultadoDado1 = await rolarDado();
        let resultadoDado2 = await rolarDado();

        let TotalTesteHabilidade1 = 0;
        let TotalTesteHabilidade2 = 0;

        if (bloco === "RETA") {
            TotalTesteHabilidade1 = personagem_1.velocidade + resultadoDado1;
            TotalTesteHabilidade2 = personagem_2.velocidade + resultadoDado2;
        } else if (bloco === "CURVA") {
            TotalTesteHabilidade1 = personagem_1.manobrilidade + resultadoDado1;
            TotalTesteHabilidade2 = personagem_2.manobrilidade + resultadoDado2;
        } else if (bloco === "CONFRONTO") {
            TotalTesteHabilidade1 = personagem_1.poder + resultadoDado1;
            TotalTesteHabilidade2 = personagem_2.poder + resultadoDado2;
        }

        await resultadoRolagemLog(personagem_1.nome, bloco, resultadoDado1, TotalTesteHabilidade1);
        await resultadoRolagemLog(personagem_2.nome, bloco, resultadoDado2, TotalTesteHabilidade2);

        if (TotalTesteHabilidade1 > TotalTesteHabilidade2) {
            console.log(`🏆 ${personagem_1.nome} marcou 1 ponto! 🏆`);
            personagem_1.pontos++;
        } else if (TotalTesteHabilidade2 > TotalTesteHabilidade1) {
            console.log(`🏆 ${personagem_2.nome} marcou 1 ponto! 🏆`);
            personagem_2.pontos++;
        }

        console.log("#############################################");
    }
}

// 🔥 Agora a main está fora e só é chamada uma vez
(async function main() {
    console.log(`🏁🚨 Corrida entre ${personagem_1.nome} e ${personagem_2.nome} está começando...\n`);
    await engrenagemIniciarCorrida(personagem_1, personagem_2);
})();
