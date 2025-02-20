// Simulação de banco de dados (JSON)
const produtos = [
    {
        id: "1",
        nome: "Cadeira Moderna",
        preco: "R$ 299,99",
        avaliacao: "⭐⭐⭐⭐⭐ (150 avaliações)",
        descricao: "Uma cadeira moderna e confortável, perfeita para seu escritório ou sala.",
        imagem: "Imagens/movel 1.png",
        miniaturas: ["imagens/movel 1.png", "imagens/movel 1.png", "imagens/movel 1.png"]
    },
    {
        id: "2",
        nome: "Sofá Confortável",
        preco: "R$ 1299,99",
        avaliacao: "⭐⭐⭐⭐ (90 avaliações)",
        descricao: "Um sofá espaçoso e elegante para seu conforto diário.",
        imagem: "imagens/movel 2.png",
        miniaturas: ["imagens/movel 2.png", "imagens/movel 2.png", "imagens/movel 2.png"]
    },
    {
        id: "3",
        nome: "Mesa de Jantar",
        preco: "R$ 899,99",
        avaliacao: "⭐⭐⭐⭐⭐ (1 avaliações)",
        descricao: "A Mesa de Jantar Royal Lux é a escolha perfeita para quem busca sofisticação e durabilidade em um único móvel. Fabricada com madeira maciça de nogueira, seu acabamento envernizado realça os veios naturais da madeira, garantindo um visual elegante e imponente. Seu tampo em vidro temperado fumê adiciona um toque de modernidade, além de facilitar a limpeza e manutenção. Com capacidade para até 8 lugares, essa mesa é ideal para reuniões familiares e jantares especiais. Seus pés em aço escovado oferecem estabilidade e um design contemporâneo, tornando-a o destaque perfeito para sua sala de jantar.",
        imagem: "Imagens/movel 3.png",
        miniaturas: ["imagens/movel 3.png", "imagens/movel 3.png", "imagens/movel 3.png"]
    },
    {
        id: "4",
        nome: "Estante Elegante",
        preco: "R$ 499,99",
        avaliacao: "⭐⭐⭐⭐⭐ (10 avaliações)",
        descricao: "A Estante Elegance Master combina funcionalidade e beleza para transformar qualquer ambiente. Feita com MDF de alta resistência e revestida com laminado de carvalho, ela oferece um acabamento sofisticado e uma estrutura robusta. Seus nichos amplos permitem organizar livros, objetos decorativos e até eletrônicos de forma prática e estilosa. Com um design minimalista e linhas bem definidas, essa estante conta com pés metálicos na cor grafite, proporcionando um toque industrial e moderno ao ambiente. Ideal para salas, escritórios ou até mesmo quartos, a Estante Elegance Master eleva a decoração com charme e versatilidade.",
        imagem: "Imagens/movel 4.png",
        miniaturas: ["imagens/movel 4.png", "imagens/movel 4.png", "imagens/movel 4.png"]
    },
    {
        id: "5",
        nome: "Poltrona Aconchegante",
        preco: "R$ 699,99",
        avaliacao: "⭐⭐⭐⭐⭐ (15 avaliações)",
        descricao: "A Poltrona Aconchego Soft foi pensada para proporcionar máximo conforto e estilo ao seu ambiente. Seu assento ultra macio é preenchido com espuma D33 e fibra siliconada, garantindo uma experiência de relaxamento incomparável. O revestimento em veludo premium antiácaro traz um toque suave e luxuoso, enquanto sua estrutura em eucalipto reflorestado oferece resistência e durabilidade. O design curvado do encosto envolve o corpo, proporcionando ergonomia perfeita para momentos de descanso. Com pés em madeira jequitibá laqueada, essa poltrona é a combinação ideal entre conforto e sofisticação, sendo perfeita para salas de estar, quartos ou cantinhos de leitura.",
        imagem: "Imagens/movel 5.png",
        miniaturas: ["imagens/movel 5.png", "imagens/movel 5.png", "imagens/movel 5.png"]
    }
    
];

// Obtém o ID do produto da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

if (produtoId) {
    // Busca o produto correspondente
    const produto = produtos.find(p => p.id === produtoId);

    if (produto) {
        // Atualiza os elementos do HTML, verificando sua existência antes
        const nomeProduto = document.getElementById("nome-produto");
        const precoProduto = document.getElementById("preco-produto");
        const avaliacoesProduto = document.getElementById("avaliacoes-produto");
        const descricaoProduto = document.getElementById("descricao-produto");
        const imagemPrincipal = document.getElementById("imagem-principal");
        const miniaturasContainer = document.querySelector(".miniaturas");

        if (nomeProduto) nomeProduto.textContent = produto.nome;
        if (precoProduto) precoProduto.textContent = produto.preco;
        if (avaliacoesProduto) avaliacoesProduto.textContent = produto.avaliacao;
        if (descricaoProduto) descricaoProduto.textContent = produto.descricao;
        if (imagemPrincipal) imagemPrincipal.src = produto.imagem;

        // Atualiza miniaturas
        if (miniaturasContainer) {
            miniaturasContainer.innerHTML = ""; // Evita duplicação
            produto.miniaturas.forEach(img => {
                const imgElement = document.createElement("img");
                imgElement.src = img;
                imgElement.onclick = () => {
                    imagemPrincipal.src = img;
                };
                miniaturasContainer.appendChild(imgElement);
            });
        }
    } else {
        document.querySelector(".produto-container").innerHTML = "<p>Produto não encontrado!</p>";
    }
} else {
    document.querySelector(".produto-container").innerHTML = "<p>ID do produto não especificado!</p>";
}
