/* Lista dos 50 produtos da Anjoy's.
   Campos: id (único), nome, categoria (padronizada), descricao, preco (número), destaque (true/false), imagem, alt.
   Imagens: ilustrações retiradas de fontes como Pinterest e Google. */
const produtos = [
  {
    "id": 1,
    "nome": "Panetone Trufado de Chocolate",
    "categoria": "Panetones",
    "descricao": "Massa fofinha com recheio de trufa belga e cobertura crocante.",
    "preco": 59.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/1200x/69/d0/57/69d0576fa44d09c3c9525f124e1111a1.jpg",
    "alt": "Ilustração do produto Panetone Trufado de Chocolate"
  },
  {
    "id": 2,
    "nome": "Panetone de Frutas Cristalizadas",
    "categoria": "Panetones",
    "descricao": "Receita clássica com frutas cristalizadas e toque de baunilha.",
    "preco": 49.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/6a/03/e7/6a03e7403c22bb73a04dbc2a829c6e68.jpg",
    "alt": "Ilustração do produto Panetone de Frutas Cristalizadas"
  },
  {
    "id": 3,
    "nome": "Panetone de Doce de Leite",
    "categoria": "Panetones",
    "descricao": "Massa amanteigada com fios de doce de leite cremoso.",
    "preco": 54.9,
    "destaque": false,
    "imagem": "https://gkpb.com.br/wp-content/uploads/2023/11/159404-800-auto.jpg",
    "alt": "Ilustração do produto Panetone de Doce de Leite"
  },
  {
    "id": 4,
    "nome": "Panetone de Pistache",
    "categoria": "Panetones",
    "descricao": "Creme de pistache e pedacinhos de castanha em massa aerada.",
    "preco": 69.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/736x/ad/79/69/ad79693262bb0b653d7ec43220099b1e.jpg",
    "alt": "Ilustração do produto Panetone de Pistache"
  },
  {
    "id": 5,
    "nome": "Panetone de Laranja e Gotas",
    "categoria": "Panetones",
    "descricao": "Casca de laranja confeitada e gotas de chocolate meio amargo.",
    "preco": 52.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/bd/ea/0c/bdea0cd09fe92182e972498258fa9e90.jpg",
    "alt": "Ilustração do produto Panetone de Laranja e Gotas"
  },
  {
    "id": 6,
    "nome": "Mini Panetones Trio",
    "categoria": "Panetones",
    "descricao": "Três mini panetones de sabores sortidos, ideais para presentear.",
    "preco": 34.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/51/e1/ba/51e1ba701e077f3d4e0002f2daf43838.jpg",
    "alt": "Ilustração do produto Mini Panetones Trio"
  },
  {
    "id": 7,
    "nome": "Chocotone de Brigadeiro",
    "categoria": "Panetones",
    "descricao": "Chocotone recheado com brigadeiro de panela e granulado dourado.",
    "preco": 57.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/ef/cc/86/efcc8660868bfe3af980735e4f9c04fa.jpg",
    "alt": "Ilustração do produto Chocotone de Brigadeiro"
  },
  {
    "id": 8,
    "nome": "Panetone de Nozes e Mel",
    "categoria": "Panetones",
    "descricao": "Nozes tostadas e mel de flores em uma massa aromática.",
    "preco": 56.9,
    "destaque": false,
    "imagem": "https://images.pexels.com/photos/19287214/pexels-photo-19287214/free-photo-of-bolo-de-panetone-com-pedacos-de-chocolate-entre-nozes-e-frutas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alt": "Ilustração do produto Panetone de Nozes e Mel"
  },
  {
    "id": 9,
    "nome": "Trufas de Champanhe",
    "categoria": "Chocolates",
    "descricao": "Caixa com 8 trufas de ganache aveludada e notas de espumante.",
    "preco": 38.0,
    "destaque": true,
    "imagem": "https://i.pinimg.com/1200x/23/0a/63/230a63cb4fe5396921f158a86ff480ae.jpg",
    "alt": "Ilustração do produto Trufas de Champanhe"
  },
  {
    "id": 10,
    "nome": "Barra de Chocolate ao Leite com Avelã",
    "categoria": "Chocolates",
    "descricao": "Chocolate cremoso com avelãs inteiras caramelizadas.",
    "preco": 24.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/c6/96/57/c696573314b4c0b5dc16ace9a3efd17c.jpg",
    "alt": "Ilustração do produto Barra de Chocolate ao Leite com Avelã"
  },
  {
    "id": 11,
    "nome": "Bombons de Cereja",
    "categoria": "Chocolates",
    "descricao": "Cereja macerada envolta em ganache e casquinha crocante.",
    "preco": 42.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/38/d5/cb/38d5cb90f47089fe8b6d66a713947351.jpg",
    "alt": "Ilustração do produto Bombons de Cereja"
  },
  {
    "id": 12,
    "nome": "Chocolate Quente Cremoso",
    "categoria": "Chocolates",
    "descricao": "Pote de mistura para chocolate quente denso e aveludado.",
    "preco": 29.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/ef/db/cb/efdbcb639d3d15327691fba12ea3cf96.jpg",
    "alt": "Ilustração do produto Chocolate Quente Cremoso"
  },
  {
    "id": 13,
    "nome": "Pirulito Papai Noel",
    "categoria": "Chocolates",
    "descricao": "Pirulito de chocolate branco decorado à mão.",
    "preco": 9.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/15/18/1f/15181f1ee548e738554dbb106a5017c9.jpg",
    "alt": "Ilustração do produto Pirulito Papai Noel"
  },
  {
    "id": 14,
    "nome": "Rena de Chocolate",
    "categoria": "Chocolates",
    "descricao": "Figura de chocolate ao leite com chifres de pretzel.",
    "preco": 14.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/0d/dc/d6/0ddcd647c86e7b422387bb072cc113ff.jpg",
    "alt": "Ilustração do produto Rena de Chocolate"
  },
  {
    "id": 15,
    "nome": "Barra Meio Amargo 70%",
    "categoria": "Chocolates",
    "descricao": "Cacau intenso com finalização de flor de sal.",
    "preco": 27.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/22/5e/48/225e487c27f0ee24dadd725c6a8bbc90.jpg",
    "alt": "Ilustração do produto Barra Meio Amargo 70%"
  },
  {
    "id": 16,
    "nome": "Bombons de Pistache",
    "categoria": "Chocolates",
    "descricao": "Recheio verde cremoso com cobertura de chocolate branco.",
    "preco": 44.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/a3/0f/3c/a30f3c3dc9076b962e5bbec485ddf485.jpg",
    "alt": "Ilustração do produto Bombons de Pistache"
  },
  {
    "id": 17,
    "nome": "Caixa de Bombons Sortidos",
    "categoria": "Chocolates",
    "descricao": "Doze bombons artesanais em caixa dourada.",
    "preco": 64.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/736x/7f/c7/4c/7fc74cf0f1f80d1d812bd81961392863.jpg",
    "alt": "Ilustração do produto Caixa de Bombons Sortidos"
  },
  {
    "id": 18,
    "nome": "Gingerbread Clássico",
    "categoria": "Biscoitos",
    "descricao": "Boneco de gengibre crocante com glacê delicado.",
    "preco": 7.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/5e/74/9e/5e749e1d2f4c82a8ea8986663a447c0e.jpg",
    "alt": "Ilustração do produto Gingerbread Clássico"
  },
  {
    "id": 19,
    "nome": "Casinha de Gengibre",
    "categoria": "Biscoitos",
    "descricao": "Kit para montar a casinha, com glacê e confeitos.",
    "preco": 48.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/1200x/09/1e/79/091e79f593436c9990bcaf4220428760.jpg",
    "alt": "Ilustração do produto Casinha de Gengibre"
  },
  {
    "id": 20,
    "nome": "Estrelas Amanteigadas",
    "categoria": "Biscoitos",
    "descricao": "Biscoitos amanteigados em formato de estrela com açúcar de confeiteiro.",
    "preco": 21.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/9a/3f/c9/9a3fc99ad78ed1d116327b74f67bd51c.jpg",
    "alt": "Ilustração do produto Estrelas Amanteigadas"
  },
  {
    "id": 21,
    "nome": "Cookie Red Velvet Natalino",
    "categoria": "Biscoitos",
    "descricao": "Cookie macio com gotas de chocolate branco.",
    "preco": 8.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/b6/0c/04/b60c04ec916712201deb5033c29169c4.jpg",
    "alt": "Ilustração do produto Cookie Red Velvet Natalino"
  },
  {
    "id": 22,
    "nome": "Biscoito Floco de Neve",
    "categoria": "Biscoitos",
    "descricao": "Glacê real com floco de neve desenhado à mão.",
    "preco": 9.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/a6/13/bf/a613bf76ac50392da7be939a7f955c6e.jpg",
    "alt": "Ilustração do produto Biscoito Floco de Neve"
  },
  {
    "id": 23,
    "nome": "Biscoitos de Canela",
    "categoria": "Biscoitos",
    "descricao": "Pacote de biscoitos finos de canela e açúcar mascavo.",
    "preco": 16.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/77/66/84/7766849937501bcb0f94a284ac8d21a0.jpg",
    "alt": "Ilustração do produto Biscoitos de Canela"
  },
  {
    "id": 24,
    "nome": "Alfajor Natalino",
    "categoria": "Biscoitos",
    "descricao": "Alfajor recheado com doce de leite.",
    "preco": 7.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/e1/7f/56/e17f567916dccdbab4cfa6ea49eea577.jpg",
    "alt": "Ilustração do produto Alfajor Natalino"
  },
  {
    "id": 25,
    "nome": "Macarons de Natal",
    "categoria": "Biscoitos",
    "descricao": "Seis macarons em tons de vermelho, dourado e creme.",
    "preco": 39.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/bf/8d/1c/bf8d1c6a97f7aabc8f07db4e7ecc7967.jpg",
    "alt": "Ilustração do produto Macarons de Natal"
  },
  {
    "id": 26,
    "nome": "Palitos de Amêndoa",
    "categoria": "Biscoitos",
    "descricao": "Biscoitinhos finos com lascas de amêndoa e mel.",
    "preco": 15.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/c9/19/ef/c919effc5a5cefd7237251e8eaaa9501.jpg",
    "alt": "Ilustração do produto Palitos de Amêndoa"
  },
  {
    "id": 27,
    "nome": "Bolo de Natal de Frutas Secas",
    "categoria": "Bolos e Tortas",
    "descricao": "Bolo úmido com frutas secas e especiarias natalinas.",
    "preco": 46.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/cb/81/95/cb8195de9304731d637fc1d862ca2e42.jpg",
    "alt": "Ilustração do produto Bolo de Natal de Frutas Secas"
  },
  {
    "id": 28,
    "nome": "Bolo Red Velvet Natalino",
    "categoria": "Bolos e Tortas",
    "descricao": "Camadas aveludadas com cream cheese e flocos dourados.",
    "preco": 72.0,
    "destaque": true,
    "imagem": "https://i.pinimg.com/736x/69/1a/67/691a67bd194f4787bb5697136c036f49.jpg",
    "alt": "Ilustração do produto Bolo Red Velvet Natalino"
  },
  {
    "id": 29,
    "nome": "Torta de Nozes",
    "categoria": "Bolos e Tortas",
    "descricao": "Massa amanteigada com recheio caramelizado de nozes.",
    "preco": 58.0,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/a8/6d/7a/a86d7af3b4b95d8d3d213b5c2230622e.jpg",
    "alt": "Ilustração do produto Torta de Nozes"
  },
  {
    "id": 30,
    "nome": "Torta de Maçã e Canela",
    "categoria": "Bolos e Tortas",
    "descricao": "Maçãs assadas com canela sobre massa crocante.",
    "preco": 49.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/b1/28/87/b12887ac319289485ce22580a1fdf9d8.jpg",
    "alt": "Ilustração do produto Torta de Maçã e Canela"
  },
  {
    "id": 31,
    "nome": "Rocambole de Doce de Leite",
    "categoria": "Bolos e Tortas",
    "descricao": "Massa leve enrolada com doce de leite e coco.",
    "preco": 41.0,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/48/7b/12/487b124e88d34c26c69c2cf6d1d12d55.jpg",
    "alt": "Ilustração do produto Rocambole de Doce de Leite"
  },
  {
    "id": 32,
    "nome": "Bolo Floresta Branca",
    "categoria": "Bolos e Tortas",
    "descricao": "Chocolate branco, cereja e chantilly em camadas.",
    "preco": 68.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/44/e0/ce/44e0ce7d011518f8a3a02545ebc901f0.jpg",
    "alt": "Ilustração do produto Bolo Floresta Branca"
  },
  {
    "id": 33,
    "nome": "Cupcakes de Papai Noel",
    "categoria": "Bolos e Tortas",
    "descricao": "Quatro cupcakes de baunilha com cobertura decorada.",
    "preco": 32.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/8c/24/6b/8c246b8129c6b99183a7f14e8b18a929.jpg",
    "alt": "Ilustração do produto Cupcakes de Papai Noel"
  },
  {
    "id": 34,
    "nome": "Brownie de Menta",
    "categoria": "Bolos e Tortas",
    "descricao": "Brownie denso com camada de creme suave de menta.",
    "preco": 12.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/75/98/c1/7598c13553de1241eea0f4a497a844f4.jpg",
    "alt": "Ilustração do produto Brownie de Menta"
  },
  {
    "id": 35,
    "nome": "Brigadeiro Gourmet Natalino",
    "categoria": "Doces Finos",
    "descricao": "Chocolate belga com cobertura de granulado dourado.",
    "preco": 4.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/d3/9b/08/d39b0833efb76e2b78c50c4d50f71e75.jpg",
    "alt": "Ilustração do produto Brigadeiro Gourmet Natalino"
  },
  {
    "id": 36,
    "nome": "Beijinho com Cereja",
    "categoria": "Doces Finos",
    "descricao": "Coco cremoso com uma cereja ao centro.",
    "preco": 4.2,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/8f/a5/eb/8fa5eb882b330127553549e4260fdc56.jpg",
    "alt": "Ilustração do produto Beijinho com Cereja"
  },
  {
    "id": 37,
    "nome": "Cajuzinho de Amêndoa",
    "categoria": "Doces Finos",
    "descricao": "Doce de amêndoas e cacau enrolado em açúcar cristal.",
    "preco": 4.8,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/05/36/74/05367418d25b8a3b71e9bb463ae6faa4.jpg",
    "alt": "Ilustração do produto Cajuzinho de Amêndoa"
  },
  {
    "id": 38,
    "nome": "Rabanada Recheada",
    "categoria": "Doces Finos",
    "descricao": "Rabanada dourada com recheio de doce de leite.",
    "preco": 11.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/c6/5c/c2/c65cc2224655fa18c1a4feb18c283f8b.jpg",
    "alt": "Ilustração do produto Rabanada Recheada"
  },
  {
    "id": 39,
    "nome": "Pudim Mini de Leite",
    "categoria": "Doces Finos",
    "descricao": "Pudim cremoso individual com calda de caramelo.",
    "preco": 13.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/87/46/4c/87464c3edeb78a64672a056e733376d3.jpg",
    "alt": "Ilustração do produto Pudim Mini de Leite"
  },
  {
    "id": 40,
    "nome": "Pavê de Chocolate Branco",
    "categoria": "Doces Finos",
    "descricao": "Camadas de creme e biscoito em potinho elegante.",
    "preco": 19.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/97/7d/da/977dda7014ee7b600f7eddf5b1749fa2.jpg",
    "alt": "Ilustração do produto Pavê de Chocolate Branco"
  },
  {
    "id": 41,
    "nome": "Cocada Cremosa de Forno",
    "categoria": "Doces Finos",
    "descricao": "Coco fresco gratinado com textura macia.",
    "preco": 12.5,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/51/71/c0/5171c005e800dd63a7ed9853f92a2caf.jpg",
    "alt": "Ilustração do produto Cocada Cremosa de Forno"
  },
  {
    "id": 42,
    "nome": "Cookie de Neve",
    "categoria": "Biscoitos",
    "descricao": "Cookie macio polvilhado com ninho e recheado de nutella.",
    "preco": 15.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/5c/19/5d/5c195d8e15b9ec1cc01f1501e1651954.jpg",
    "alt": "Ilustração do produto Cookie de Neve"
  },
  {
    "id": 43,
    "nome": "Cesta Noite Feliz",
    "categoria": "Kits e Presentes",
    "descricao": "Cesta com panetone, bombons, biscoitos e chá especial.",
    "preco": 189.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/736x/74/d5/29/74d5298a5024c1e0ce877775366b5adb.jpg",
    "alt": "Ilustração do produto Cesta Noite Feliz"
  },
  {
    "id": 44,
    "nome": "Cheesecake de Frutas Vermelhas",
    "categoria": "Bolos e Tortas",
    "descricao": "Torta com recheio cremoso de queijo fresco e cobertura de frutas vermelhas.",
    "preco": 62.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/b8/54/de/b854de764b4c50bedaec15149e0fdb77.jpg",
    "alt": "Ilustração do produto Cheesecake de Frutas Vermelhas"
  },
  {
    "id": 45,
    "nome": "Caixa Presente Dourada",
    "categoria": "Kits e Presentes",
    "descricao": "Seleção de doces finos em caixa rígida com laço.",
    "preco": 129.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/ef/a9/34/efa9347167b24026a4a09ac15f91f627.jpg",
    "alt": "Ilustração do produto Caixa Presente Dourada"
  },
  {
    "id": 46,
    "nome": "Kit Chocolate Quente",
    "categoria": "Kits e Presentes",
    "descricao": "Caneca, mistura cremosa e marshmallows.",
    "preco": 74.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/17/bc/51/17bc5183a1b799f06ad080f2b3d087da.jpg",
    "alt": "Ilustração do produto Kit Chocolate Quente"
  },
  {
    "id": 47,
    "nome": "Meia de Natal Recheada",
    "categoria": "Kits e Presentes",
    "descricao": "Meia decorativa com pequenos doces variados.",
    "preco": 39.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/1200x/44/63/44/446344ef3a480f5fc546f343a935029c.jpg",
    "alt": "Ilustração do produto Meia de Natal Recheada"
  },
  {
    "id": 48,
    "nome": "Calendário do Advento Doce",
    "categoria": "Kits e Presentes",
    "descricao": "Vinte e quatro mimos para a contagem até o Natal.",
    "preco": 99.9,
    "destaque": true,
    "imagem": "https://i.pinimg.com/1200x/a0/b7/63/a0b763c764ee613ed100df30ff42d8cf.jpg",
    "alt": "Ilustração do produto Calendário do Advento Doce"
  },
  {
    "id": 49,
    "nome": "Cartão Presente da Loja",
    "categoria": "Kits e Presentes",
    "descricao": "Cartão presente promocional para presentear amigos e familiares.",
    "preco":  49.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/55/ed/08/55ed086604900b8c1f59462e18de1321.jpg",
    "alt": "Ilustração do produto Kit Ceia Doce da Família"
  },
  {
    "id": 50,
    "nome": "Cartão Postal Natalino",
    "categoria": "Kits e Presentes",
    "descricao": "Cartão postal para enviar recados e muito carinho.",
    "preco": 19.9,
    "destaque": false,
    "imagem": "https://i.pinimg.com/736x/27/f9/b2/27f9b288c3177d45e518e399772ad408.jpg",
    "alt": "Ilustração do produto Cartão com Mini Bombons"
  }
];
