const livros = [
    {
        "slug": "codigo-limpo",
        "title": "Código Limpo",
        "image": null,
        "author": "Robert C. Martin",
        "pages": {
            "total": 422,
            "read": 422
        },
        "review": "O livro Código Limpo fala sobre boas práticas ao escrever código. Li este livro com o intuito de melhorar o meu julgamento técnico em códigos e por sua vez readquirir meu hábito de leitura.\nEu já tinha um bom conhecimento dos assuntos abordados, pricipalemnte do argumento que funções devem fazer apenas 1 coisa, eu discordo parcialmente, acredito que métodos devem ser minimizados a ter o menor número de operações possíveis.\nUm ponto interessante trazido pelo Bob está no tópico sobre comentários ele argumenta que se você esta tendo que escrever um comentário explicando detalhes do que o método faz, possivelmente ele deve estar violando as 'regras' passadas anteriormente. No caso, o nome da função não está explicíto ou o método faz mauito mais que uma coisa.\nPontos interessantes também sobre os métodos que são chamados devem sempre ficar abaixo do consumidor, pois assim deixa um efeito de leitura, onde o nível mais alto começa no inicio do arquivo e conforme vai scrollando vai chegando nas camadas inferiores (que apresentam um nível mais baixo).\nNo final é feito um hands on, no caso o autor pega códigos reais de bibliotecas e realiza a refatoração, demonstando que os conceitos passados possam ser aplicados.",
        "rating": 9
    },
    {
        "slug": "projeto-fenix",
        "title": "Projeto fênix",
        "image": null,
        "author": "Gane Kim, Kevin Behr e George Spafford",
        "pages": {
            "total": 574,
            "read": 574
        },
        "review": "O livro conta a história de Bill, um trabalhador do setor de operações de TI no qual foi promovido para líder do setor de operações do dia para noite, nos seus primeiros dias ele enfrenta problemas que toda pessoa de TI enfrenta, porém, sendo um líder agora esses problemas aparecem em alta escala. Esses problemas aparecem no livro e servem até como alívio cômico, como sempre toda situação é urgente.\nAcompanhando o dia a dia de Bill dentro da empresa é mostrado como um setor de TI é comparado a um chão de fábrica, onde os processos deveriam ser previsíveis e mensuráveis. O personagem 'Erik' é o ponto central neste aspecto, ele apresenta esta ideia que não é muito aceita pelos profissionais de TI obviamente, mas é desenvolvida ao decorrer da história.\nA história mostra como a organização conseguiu transformar o setor de TI em algo previsível, no qual se assemelha ao chão de fábrica. Monitorando tarefas com um quadro kanban, entendendo o fluxo de trabalho e a quantidade de tarefas ou Work in Progress. O livro também satiriza o sabe tudo que existem na área de TI, pois o personagem Brent é exatamente esse tipo de 'gênio', porém com as propostas de melhoria nos processos esses conhecimentos tiveram que ser passados para frente.\nJohn da Seguranda da Informação é outro personagem interessante, no qual é mostrado como uma pessoa considerada chata pode mudar quando o clima da empresa muda. A obra mostra os reais impactos de uma cultura DevOps em uma empresa 'raíz' onde todo o trabalho pode seguir as 3 maneiras: Entender o fluxo de trabalho; Feedback e COmpartilhar conhecimento.\nO livro não tem intuito de ensinar como aplicar DevOps, mas ele mostra a ideia que a cultura DevOps dentro de uma empresa impacta diretamente o setor de forma positiva, consequentemente impactando toda a empresa, pois, como é apresentado no livro o setor de TI é o coração de toda empresa.",
        "rating": 9.5
    } 
];

/**
 * Retorna os livros cadastrados, ignorando itens sem slug (como o modelo vazio).
 *
 * @returns {typeof livros}
 */
export function getLivros() {
  return livros.filter((livro) => livro.slug);
}
