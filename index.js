const nomeEmpresa = "Sistema Omma"
console.log(nomeEmpresa);

const listadeReceitas = [
    {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "Simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "abra o pão, coloque tudo lá dentro",
    link: "https://www.youtube.com/watch?v=4JNYVjVMJ1A",
    vegano: false
    },
];

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
) => {
    const novaReceita = {
        id,
        titulo,
        ingredientes,
        preparo,
        link,
        vegano,
    };
    listadeReceitas.push(novaReceita);
    console.log(`cadastro da receita de ${titulo} feito com sucesso`)
};

cadastrarReceita (
    2,
    "Ovo mexido",
    "Simples",
    ["3 ovos"],
    "Quebre o ovo, jogue na frigideira, mexa com um garfo até a consistência ficar solida e o ovo começar a escurecer um pouco",
    "https://www.youtube.com/watch?v=Cz-dbFsJHnw",
    false
)

function exibirReceitas(a) {
    const receita_escolhida = listadeReceitas[a-1];
    console.log("\n -------------------------------------------- \n");
    console.log(receita_escolhida.titulo);
    console.log(receita_escolhida.ingredientes);
    if (receita_escolhida.titulo == false) {
        resposta = "não é vegana"
    }
    else {
        resposta = "é vegana"
    }
    console.log("a receita " + resposta);
}

exibirReceitas(1)