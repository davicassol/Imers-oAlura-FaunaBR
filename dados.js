let dados = [
  {
    titulo: "Onça-Pintada",
    descricao:
      "Maior felino das Américas, a onça-pintada vive em florestas tropicais como a Amazônia. Ela é uma predadora de topo e tem um papel essencial no controle das populações de suas presas. A espécie está ameaçada devido à perda de habitat e à caça.",
    link: "https://pt.wikipedia.org/wiki/On%C3%A7a-pintada",
    tags: [
      "Floresta tropical",
      "Amazônia",
      "Em extinção",
      "Predador, extincao, amazonia",
    ],
  },
  {
    titulo: "Tucano-Toco",
    descricao:
      "Com seu bico longo e colorido, o tucano-toco é uma ave icônica das florestas tropicais e cerrados. Sua dieta variada inclui frutas, insetos e até pequenos vertebrados. Ele é conhecido por ajudar na dispersão de sementes, contribuindo para o ecossistema.",
    link: "https://pt.wikipedia.org/wiki/Tucano-toco",
    tags: ["Floresta tropical", "Cerrado", "Amazônia", "Ave, amazonia"],
  },
  {
    titulo: "Mico-Leão-Dourado",
    descricao:
      "Este pequeno primata de pelagem dourada é nativo da Mata Atlântica. O mico-leão-dourado está criticamente ameaçado de extinção devido à perda de seu habitat natural. Projetos de conservação têm sido fundamentais para sua sobrevivência.",
    link: "https://pt.wikipedia.org/wiki/Mico-le%C3%A3o-dourado",
    tags: ["Mata Atlântica", "Primata", "Em extinção, extincao, atlantica"],
  },
  {
    titulo: "Arara-Azul",
    descricao:
      "A arara-azul, com sua plumagem de coloração intensa, habita o cerrado e o Pantanal. A espécie é vítima do tráfico de animais e da destruição de seu habitat, o que a colocou em risco de extinção. Ela também tem um papel importante na dispersão de sementes.",
    link: "https://pt.wikipedia.org/wiki/Arara-azul",
    tags: ["Cerrado", "Pantanal", "Em extinção", "Ave, extincao"],
  },
  {
    titulo: "Tamanduá-Bandeira",
    descricao:
      "Este grande mamífero se alimenta principalmente de formigas e cupins, utilizando sua língua comprida para capturá-los. Habita o cerrado e o Pantanal, e é considerado vulnerável devido à perda de habitat e atropelamentos.",
    link: "https://pt.wikipedia.org/wiki/Tamandu%C3%A1-bandeira",
    tags: ["Cerrado", "Pantanal", "Mamífero"],
  },
  {
    titulo: "Capivara",
    descricao:
      "A capivara é o maior roedor do mundo, vivendo em grupos perto de áreas aquáticas no Pantanal e na Amazônia. É um animal extremamente social e adaptado a uma variedade de habitats, sendo frequentemente avistada em regiões urbanas.",
    link: "https://pt.wikipedia.org/wiki/Capivara",
    tags: ["Pantanal", "Amazônia", "Roedor", "Aquático amazonia"],
  },
  {
    titulo: "Boto-Cor-de-Rosa",
    descricao:
      "Golfinho de água doce, o boto-cor-de-rosa vive nos rios da Amazônia. É uma das poucas espécies de golfinhos adaptados a água doce e enfrenta a ameaça de extinção devido à destruição dos rios e à pesca acidental.",
    link: "https://pt.wikipedia.org/wiki/Boto-cor-de-rosa",
    tags: ["Amazônia", "Rio", "Aquático", "Em extinção, extincao, amazonia"],
  },
  {
    titulo: "Pirarucu",
    descricao:
      "Um dos maiores peixes de água doce do mundo, o pirarucu é nativo dos rios da Amazônia e pode atingir até 3 metros de comprimento. Ele é uma espécie-chave na pesca regional e também uma parte importante da dieta local.",
    link: "https://pt.wikipedia.org/wiki/Pirarucu",
    tags: ["Amazônia", "Rio", "Peixe, amazonia"],
  },
  {
    titulo: "Jararaca",
    descricao:
      "Essa serpente venenosa é encontrada em diversas regiões do Brasil, incluindo a Mata Atlântica. Embora sua picada seja perigosa, o veneno da jararaca é estudado para o desenvolvimento de medicamentos, como anti-hipertensivos.",
    link: "https://pt.wikipedia.org/wiki/Jararaca",
    tags: ["Mata Atlântica", "Serpente", "Venenosa, atlantica"],
  },
  {
    titulo: "Lobo-Guará",
    descricao:
      "Com suas longas pernas e pelagem alaranjada, o lobo-guará habita o cerrado brasileiro. Ele é solitário e desempenha um papel importante no controle de pequenos mamíferos, mas está vulnerável à extinção devido à perda de habitat.",
    link: "https://pt.wikipedia.org/wiki/Lobo-guar%C3%A1",
    tags: ["Cerrado", "Em extinção", "Mamífero, extincao"],
  },
  {
    titulo: "Puma",
    descricao:
      "Felino solitário e ágil, o puma habita áreas de florestas e montanhas no Brasil, incluindo o Pantanal e a Mata Atlântica. Ele é um predador de topo que regula a população de herbívoros, mas é ameaçado pela caça e destruição de habitats.",
    link: "https://pt.wikipedia.org/wiki/Puma_concolor",
    tags: ["Pantanal", "Mata Atlântica", "Predador, atlantica"],
  },
  {
    titulo: "Preguiça-de-Três-Dedos",
    descricao:
      "Este mamífero arborícola é conhecido por sua vida lenta e pacífica, vivendo nas florestas da Amazônia. Sua dieta consiste de folhas, e seu metabolismo lento é uma adaptação às baixas necessidades energéticas.",
    link: "https://pt.wikipedia.org/wiki/Pregui%C3%A7a-de-tr%C3%AAs-dedos",
    tags: ["Floresta", "Mamífero", "Amazônia, amazonia"],
  },
  {
    titulo: "Ariranha",
    descricao:
      "A ariranha, ou lontra gigante, é encontrada em rios da Amazônia e do Pantanal, vivendo em grupos familiares. A destruição de seu habitat e a poluição dos rios a colocam em risco de extinção.",
    link: "https://pt.wikipedia.org/wiki/Ariranha",
    tags: [
      "Amazônia",
      "Pantanal",
      "Aquático",
      "Em extinção, extincao, amazonia",
    ],
  },
  {
    titulo: "Jacaré-Açu",
    descricao:
      "O jacaré-açu é um dos maiores répteis da América do Sul, podendo atingir até 6 metros de comprimento. Ele habita os rios da Amazônia e é um predador no topo da cadeia alimentar, controlando populações de peixes e pequenos mamíferos.",
    link: "https://pt.wikipedia.org/wiki/Jacar%C3%A9-a%C3%A7u",
    tags: ["Amazônia", "Rio", "Répteis, amazonia"],
  },
  {
    titulo: "Peixe-Boi da Amazônia",
    descricao:
      "Este mamífero aquático é encontrado nos rios e lagos da Amazônia. Ele é uma espécie vulnerável, ameaçada pela caça e pela destruição de habitats devido à expansão agrícola e construção de barragens.",
    link: "https://pt.wikipedia.org/wiki/Peixe-boi-da-Amaz%C3%B4nia",
    tags: ["Amazônia", "Aquático", "Em extinção, extincao, amazonia"],
  },
  {
    titulo: "Sapo-cururu",
    descricao:
      "O sapo-cururu é um anfíbio adaptado a diferentes ambientes, desde florestas até áreas urbanas. Ele tem um papel importante no controle de pragas, pois sua dieta inclui insetos, e sua presença é comum no Pantanal e na Mata Atlântica.",
    link: "https://pt.wikipedia.org/wiki/Rhinella_marina",
    tags: ["Anfíbio", "Pantanal", "Mata Atlântica, atlantica"],
  },
  {
    titulo: "Jabuti",
    descricao:
      "Este réptil terrestre vive em florestas e cerrados do Brasil. O jabuti é conhecido por sua longevidade e cascos resistentes, sendo uma espécie comum em áreas de vegetação densa.",
    link: "https://pt.wikipedia.org/wiki/Jabuti",
    tags: ["Amazônia", "Cerrado", "Répteis, amazonia"],
  },
  {
    titulo: "Cobra-Sucuri",
    descricao:
      "Uma das maiores serpentes do mundo, a sucuri habita rios e áreas alagadas da Amazônia e do Pantanal. Apesar de temida por muitos, é uma predadora essencial, alimentando-se de presas como capivaras e jacarés menores.",
    link: "https://pt.wikipedia.org/wiki/Sucuri",
    tags: ["Amazônia", "Pantanal", "Aquático", "Serpente, amazonia"],
  },
  {
    titulo: "Veado-Campeiro",
    descricao:
      "Este cervídeo de porte médio vive em áreas abertas do cerrado e do Pantanal. Sua população está ameaçada pela caça e pela expansão agrícola, o que tem reduzido drasticamente seu habitat natural.",
    link: "https://pt.wikipedia.org/wiki/Veado-campeiro",
    tags: ["Cerrado", "Pantanal", "Mamífero"],
  },
  {
    titulo: "Quati",
    descricao:
      "O quati é um mamífero onívoro sociável, encontrado em florestas e áreas abertas. Ele se adapta facilmente a diferentes ambientes e pode ser visto em parques e reservas de vida selvagem, especialmente na Mata Atlântica.",
    link: "https://pt.wikipedia.org/wiki/Quati",
    tags: ["Mata Atlântica", "Cerrado", "Onívoro", "Mamífero, atlantica"],
  },
  {
    titulo: "Tatú-Canastra",
    descricao:
      "O maior dos tatus, o tatú-canastra vive em áreas de cerrado e florestas, cavando tocas profundas. Ele está ameaçado de extinção pela destruição de seu habitat e pela caça, sendo uma espécie extremamente rara.",
    link: "https://pt.wikipedia.org/wiki/Tatu-canastra",
    tags: [
      "Cerrado",
      "Mata Atlântica",
      "Em extinção",
      "Mamífero, extincao, atlantica",
    ],
  },
  {
    titulo: "Arara-Vermelha",
    descricao:
      "Com suas cores vibrantes, a arara-vermelha habita florestas e cerrados. Ela está ameaçada pelo tráfico de animais e pela destruição de seu habitat, mas ainda pode ser vista em algumas regiões conservadas.",
    link: "https://pt.wikipedia.org/wiki/Arara-vermelha",
    tags: ["Floresta", "Cerrado", "Ave"],
  },
  {
    titulo: "Paca",
    descricao:
      "A paca é um roedor grande, encontrado em florestas e áreas abertas do Brasil. É apreciada em algumas regiões como fonte de alimento, mas sua caça descontrolada pode afetar as populações selvagens.",
    link: "https://pt.wikipedia.org/wiki/Paca",
    tags: ["Mata Atlântica", "Cerrado", "Roedor, atlantica"],
  },
  {
    titulo: "Cotia",
    descricao:
      "Pequeno roedor, a cotia é comum em florestas e cerrados. Ela se alimenta principalmente de frutas e sementes, desempenhando um papel importante na dispersão de sementes por onde passa.",
    link: "https://pt.wikipedia.org/wiki/Cotia",
    tags: ["Mata Atlântica", "Cerrado", "Roedor, atlantica"],
  },
];
