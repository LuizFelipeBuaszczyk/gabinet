const animes = [
  {
    slug: "aot",
    title: "Attack on Titan",
    image: "data/images/animes/aot.webp",
    episodes: { total: 97, watched: 97 },
    review: "Attack on Titan é o melhor anime que já assisti. Antes dele, eu realmente não gostava de animes e achava que nunca gostaria de fato. Porém, AOT provou o contrário! Para ter uma ideia, cheguei a assistir 50 episódios em 1 final de semana.",
    rating: 10,
 },
 {
    slug: "frieren",
    title: "Frieren",
    image: "data/images/animes/frieren.webp",
    episodes: { total: 38, watched: 38 },
    review: "Assisti Frieren logo após AOT, todos os meus amigos estavam assistindo e falando muito bem. E de fato todos eles estavam certos!\nFrieren para mim teve muito significado, pois, sou uma pessoa bastante nostálgica e Frieren remete bastante nos momentos que ficam marcados na memóeria.",
    rating: 10,
  },
  {
    slug: "serial-experiments-lain",
    title: "Serial Experiments Lain",
    image: "data/images/animes/serial_experiments_lain.webp",
    episodes: { total: 13, watched: 13 },
    review: "Serial Experiments Lain é uma obra que não deve ser assisitida como um anime comum, você deve assitir e prestar a atenção nos detalhes das cenas e nos dialogos entre os personagens. Este é mais uma daqueles animes que fazem você ficar refletindo na vida após terminar.\nSerial Experiments Lain te faz questionar sobre problemas que existem atualmente com a nossa sociedade em relação aos meios digitais, alguns pontos que me fizeram refletir por um tempo é o tal das 'duas caras' onde você é uma pessoa na internet e na vida real você é outra (completamente diferente).\nNo fim do anime ainda é levantada uma questão filosófica com a frase 'Quem não é lembrado, nunca existiu.'. Por mais que o sentido literal da frase não faça sentido cientificamente, ela me fe questionar sobre a nossa existência e o que fazemos para nos lembrarmos dos que já foram. Para mim, essa frase me deu mais sentido sobre os cemitérios e as tais postagens existentes na internet das pessoas que já morreram, tudo isso é a prova que eles existiram.\nA história do anime é bem 'viajada' utiliza bastante teorias da conspiração da época que foi feito e todo o anime é explicado no último episódio, mas eu acho que o ponto central da obra não é na história.",
    rating: 8.7,
  },
  {
    slug: "eighty-six",
    title: "86: Eighty Six",
    image: "data/images/animes/eighty_six.webp",
    episodes: { total: 23, watched: 23 },
    review: "Eighty Six é um anime tem um ar de segunda guerra mundial. A história se baseia em dois cenários totalmente distintos (porém unidos). O primeiro cenário é onde a Vladilena Milizé está, basicamente o lado do 'opressor', o anime mostra como a sociedade é manipulada e pode ser cruel com pessoas de diferentes características esse cenário lembra muito extremistas do século passado. O segundo lado é o lado 'oprimido' onde o personagem Shinei Nouzen vive e é mostrado as dificuldades que eles sofrem.",
    rating: 9.1,
  },
];
/**
 * Retorna os animes cadastrados, ignorando itens sem slug (como o modelo vazio).
 *
 * @returns {typeof animes}
 */
export function getAnimes() {
  return animes.filter((anime) => anime.slug);
}

