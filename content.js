// ═══════════════════════════════════════════════════════════════════════════
// AnimeEnglish — Conteúdo Completo
// ═══════════════════════════════════════════════════════════════════════════

const EPISODES = [

  // ─────────────────────────────────────────────────────────────────────────
  // VOCABULÁRIO
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 1, type: "vocabulary",
    title: "Saudações do Guerreiro", titleEn: "Warrior Greetings",
    description: "Aprenda as primeiras palavras como um verdadeiro ninja!",
    icon: "⚔️", color: "#ff6b35", xpReward: 50,
    words: [
      { en: "Hello",     pt: "Olá",        emoji: "👋", example: "Hello! I am a ninja!",          examplePt: "Olá! Eu sou um ninja!" },
      { en: "Goodbye",   pt: "Tchau",       emoji: "👋", example: "Goodbye, my friend!",           examplePt: "Tchau, meu amigo!" },
      { en: "Thank you", pt: "Obrigado",    emoji: "🙏", example: "Thank you for training me!",    examplePt: "Obrigado por me treinar!" },
      { en: "Please",    pt: "Por favor",   emoji: "✨", example: "Please, teach me!",             examplePt: "Por favor, me ensine!" },
      { en: "Yes",       pt: "Sim",         emoji: "✅", example: "Yes! I can do it!",             examplePt: "Sim! Eu consigo!" },
      { en: "No",        pt: "Não",         emoji: "❌", example: "No, I won't give up!",          examplePt: "Não, eu não vou desistir!" },
      { en: "Sorry",     pt: "Desculpa",    emoji: "😔", example: "Sorry, I was wrong.",           examplePt: "Desculpa, eu estava errado." },
      { en: "Help",      pt: "Ajuda",       emoji: "🆘", example: "Help! I need power!",           examplePt: "Ajuda! Eu preciso de poder!" },
    ]
  },

  {
    id: 2, type: "vocabulary",
    title: "Cores do Chakra", titleEn: "Chakra Colors",
    description: "Descubra as cores dos poderes elementais!",
    icon: "🌈", color: "#9b59b6", xpReward: 60,
    words: [
      { en: "Red",    pt: "Vermelho", emoji: "🔴", example: "Red is the color of fire!",      examplePt: "Vermelho é a cor do fogo!" },
      { en: "Blue",   pt: "Azul",     emoji: "🔵", example: "Blue water gives me power!",     examplePt: "A água azul me dá poder!" },
      { en: "Green",  pt: "Verde",    emoji: "🟢", example: "Green nature heals me!",          examplePt: "A natureza verde me cura!" },
      { en: "Yellow", pt: "Amarelo",  emoji: "🟡", example: "Yellow lightning is fast!",       examplePt: "O relâmpago amarelo é rápido!" },
      { en: "Black",  pt: "Preto",    emoji: "⚫", example: "Black shadows hide me!",          examplePt: "As sombras pretas me escondem!" },
      { en: "White",  pt: "Branco",   emoji: "⚪", example: "White light protects us!",        examplePt: "A luz branca nos protege!" },
      { en: "Orange", pt: "Laranja",  emoji: "🟠", example: "Orange is my favorite color!",   examplePt: "Laranja é minha cor favorita!" },
      { en: "Purple", pt: "Roxo",     emoji: "🟣", example: "Purple chakra is rare!",          examplePt: "Chakra roxo é raro!" },
    ]
  },

  {
    id: 3, type: "vocabulary",
    title: "O Poder dos Números", titleEn: "The Power of Numbers",
    description: "Conte sua força com os números do poder!",
    icon: "🔢", color: "#2ecc71", xpReward: 60,
    words: [
      { en: "One",   pt: "Um",    emoji: "1️⃣", example: "One warrior stands alone!",        examplePt: "Um guerreiro fica sozinho!" },
      { en: "Two",   pt: "Dois",  emoji: "2️⃣", example: "Two swords, double power!",        examplePt: "Duas espadas, poder dobrado!" },
      { en: "Three", pt: "Três",  emoji: "3️⃣", example: "Three shadows attack!",            examplePt: "Três sombras atacam!" },
      { en: "Four",  pt: "Quatro",emoji: "4️⃣", example: "Four elements unite!",             examplePt: "Quatro elementos se unem!" },
      { en: "Five",  pt: "Cinco", emoji: "5️⃣", example: "Five heroes fight together!",      examplePt: "Cinco heróis lutam juntos!" },
      { en: "Six",   pt: "Seis",  emoji: "6️⃣", example: "Six paths of power!",              examplePt: "Seis caminhos de poder!" },
      { en: "Seven", pt: "Sete",  emoji: "7️⃣", example: "Seven dragon balls!",              examplePt: "Sete esferas do dragão!" },
      { en: "Eight", pt: "Oito",  emoji: "8️⃣", example: "Eight gates are open!",            examplePt: "Oito portões estão abertos!" },
      { en: "Nine",  pt: "Nove",  emoji: "9️⃣", example: "Nine-tailed fox is free!",         examplePt: "A raposa de nove caudas está livre!" },
      { en: "Ten",   pt: "Dez",   emoji: "🔟", example: "Ten thousand punches!",             examplePt: "Dez mil socos!" },
    ]
  },

  {
    id: 4, type: "vocabulary",
    title: "Poderes de Batalha", titleEn: "Battle Powers",
    description: "Aprenda as ações dos heróis em batalha!",
    icon: "💥", color: "#e74c3c", xpReward: 70,
    words: [
      { en: "Run",     pt: "Correr",   emoji: "🏃", example: "Run! The enemy is near!",            examplePt: "Corra! O inimigo está perto!" },
      { en: "Jump",    pt: "Pular",    emoji: "🦘", example: "Jump over the obstacle!",             examplePt: "Pule sobre o obstáculo!" },
      { en: "Fight",   pt: "Lutar",    emoji: "🥊", example: "Fight with all your strength!",       examplePt: "Lute com toda sua força!" },
      { en: "Win",     pt: "Vencer",   emoji: "🏆", example: "I will win this battle!",             examplePt: "Eu vou vencer essa batalha!" },
      { en: "Train",   pt: "Treinar",  emoji: "💪", example: "Train every day to get stronger!",    examplePt: "Treine todo dia para ficar mais forte!" },
      { en: "Protect", pt: "Proteger", emoji: "🛡️", example: "I protect my friends!",              examplePt: "Eu protejo meus amigos!" },
      { en: "Attack",  pt: "Atacar",   emoji: "⚡", example: "Attack with your best move!",         examplePt: "Ataque com seu melhor golpe!" },
      { en: "Defend",  pt: "Defender", emoji: "🛡️", example: "Defend the village!",                examplePt: "Defenda a vila!" },
    ]
  },

  {
    id: 5, type: "vocabulary",
    title: "O Banquete do Herói", titleEn: "The Hero's Feast",
    description: "Todo herói precisa comer! Aprenda as comidas!",
    icon: "🍜", color: "#f39c12", xpReward: 70,
    words: [
      { en: "Water", pt: "Água",  emoji: "💧", example: "Water gives me energy!",              examplePt: "A água me dá energia!" },
      { en: "Rice",  pt: "Arroz", emoji: "🍚", example: "I love rice after training!",          examplePt: "Adoro arroz depois do treino!" },
      { en: "Bread", pt: "Pão",   emoji: "🍞", example: "Bread makes me stronger!",             examplePt: "O pão me deixa mais forte!" },
      { en: "Meat",  pt: "Carne", emoji: "🥩", example: "Meat gives me power!",                 examplePt: "A carne me dá poder!" },
      { en: "Ramen", pt: "Lámen", emoji: "🍜", example: "Ramen is my favorite!",                examplePt: "Lámen é meu favorito!" },
      { en: "Fruit", pt: "Fruta", emoji: "🍎", example: "Eat fruit to be healthy!",             examplePt: "Coma fruta para ser saudável!" },
      { en: "Milk",  pt: "Leite", emoji: "🥛", example: "Milk makes you grow fast!",            examplePt: "Leite faz você crescer rápido!" },
      { en: "Tea",   pt: "Chá",   emoji: "🍵", example: "Tea calms the warrior mind.",          examplePt: "O chá acalma a mente do guerreiro." },
    ]
  },

  {
    id: 6, type: "vocabulary",
    title: "Sentimentos do Ninja", titleEn: "Ninja Feelings",
    description: "Mesmo ninjas têm sentimentos! Aprenda a expressá-los!",
    icon: "😊", color: "#1abc9c", xpReward: 80,
    words: [
      { en: "Happy",   pt: "Feliz",      emoji: "😄", example: "I am happy when I win!",            examplePt: "Fico feliz quando ganho!" },
      { en: "Sad",     pt: "Triste",     emoji: "😢", example: "I am sad when I lose.",             examplePt: "Fico triste quando perco." },
      { en: "Angry",   pt: "Com raiva",  emoji: "😠", example: "Do not make me angry!",             examplePt: "Não me deixe com raiva!" },
      { en: "Scared",  pt: "Com medo",   emoji: "😨", example: "I am scared of nothing!",           examplePt: "Não tenho medo de nada!" },
      { en: "Strong",  pt: "Forte",      emoji: "💪", example: "I feel strong today!",              examplePt: "Me sinto forte hoje!" },
      { en: "Tired",   pt: "Cansado",    emoji: "😴", example: "I am tired after battle.",          examplePt: "Estou cansado depois da batalha." },
      { en: "Excited", pt: "Animado",    emoji: "🤩", example: "I am excited for the tournament!",  examplePt: "Estou animado para o torneio!" },
      { en: "Brave",   pt: "Corajoso",   emoji: "🦁", example: "A true ninja is brave!",            examplePt: "Um verdadeiro ninja é corajoso!" },
    ]
  },

  {
    id: 7, type: "vocabulary",
    title: "Partes da Casa", titleEn: "Parts of the House",
    description: "Aprenda onde os guerreiros descansam e treinam!",
    icon: "🏠", color: "#3498db", xpReward: 70,
    words: [
      { en: "Bedroom",     pt: "Quarto",   emoji: "🛏️", example: "My bedroom is my training room!",        examplePt: "Meu quarto é minha sala de treino!" },
      { en: "Kitchen",     pt: "Cozinha",  emoji: "🍳", example: "I cook in the kitchen every morning.",   examplePt: "Eu cozinho na cozinha toda manhã." },
      { en: "Bathroom",    pt: "Banheiro", emoji: "🚿", example: "I shower after every training session.", examplePt: "Tomo banho depois de cada treino." },
      { en: "Living room", pt: "Sala",     emoji: "🛋️", example: "We watch anime in the living room!",    examplePt: "Assistimos anime na sala!" },
      { en: "Door",        pt: "Porta",    emoji: "🚪", example: "Open the door, the hero is here!",      examplePt: "Abra a porta, o herói chegou!" },
      { en: "Window",      pt: "Janela",   emoji: "🪟", example: "I see the stars from my window.",       examplePt: "Vejo as estrelas pela minha janela." },
      { en: "Garden",      pt: "Jardim",   emoji: "🌿", example: "I train hard in the garden!",           examplePt: "Eu treino muito no jardim!" },
      { en: "Stairs",      pt: "Escada",   emoji: "🪜", example: "Run up the stairs to get stronger!",    examplePt: "Suba as escadas para ficar mais forte!" },
    ]
  },

  {
    id: 8, type: "vocabulary",
    title: "Animais Poderosos", titleEn: "Powerful Animals",
    description: "Os animais mais incríveis que um ninja pode encontrar!",
    icon: "🐉", color: "#8e44ad", xpReward: 70,
    words: [
      { en: "Dragon", pt: "Dragão", emoji: "🐉", example: "The dragon flies over the mountains!",  examplePt: "O dragão voa sobre as montanhas!" },
      { en: "Wolf",   pt: "Lobo",   emoji: "🐺", example: "The wolf runs with the pack!",          examplePt: "O lobo corre com a matilha!" },
      { en: "Eagle",  pt: "Águia",  emoji: "🦅", example: "The eagle sees everything from above!", examplePt: "A águia vê tudo lá de cima!" },
      { en: "Tiger",  pt: "Tigre",  emoji: "🐯", example: "The tiger is fast and strong!",         examplePt: "O tigre é rápido e forte!" },
      { en: "Snake",  pt: "Cobra",  emoji: "🐍", example: "The snake moves silently.",             examplePt: "A cobra se move silenciosamente." },
      { en: "Fox",    pt: "Raposa", emoji: "🦊", example: "The fox is very clever!",               examplePt: "A raposa é muito esperta!" },
      { en: "Bear",   pt: "Urso",   emoji: "🐻", example: "The bear is the strongest animal!",    examplePt: "O urso é o animal mais forte!" },
      { en: "Lion",   pt: "Leão",   emoji: "🦁", example: "The lion is king of the jungle!",      examplePt: "O leão é o rei da selva!" },
    ]
  },

  {
    id: 9, type: "vocabulary",
    title: "Corpo do Guerreiro", titleEn: "Warrior Body",
    description: "Conheça as partes do corpo de um guerreiro poderoso!",
    icon: "💪", color: "#c0392b", xpReward: 75,
    words: [
      { en: "Head",  pt: "Cabeça",   emoji: "🧠", example: "Use your head to think in battle!",  examplePt: "Use sua cabeça para pensar na batalha!" },
      { en: "Eyes",  pt: "Olhos",    emoji: "👀", example: "My eyes see the enemy coming!",      examplePt: "Meus olhos veem o inimigo chegando!" },
      { en: "Hands", pt: "Mãos",     emoji: "✋", example: "My hands are my weapons!",            examplePt: "Minhas mãos são minhas armas!" },
      { en: "Arms",  pt: "Braços",   emoji: "💪", example: "Strong arms defeat every enemy!",    examplePt: "Braços fortes vencem qualquer inimigo!" },
      { en: "Legs",  pt: "Pernas",   emoji: "🦵", example: "Fast legs help me run away!",        examplePt: "Pernas rápidas me ajudam a fugir!" },
      { en: "Heart", pt: "Coração",  emoji: "❤️", example: "My heart never gives up!",           examplePt: "Meu coração nunca desiste!" },
      { en: "Back",  pt: "Costas",   emoji: "🔙", example: "I protect my friends backs!",        examplePt: "Eu protejo as costas dos meus amigos!" },
      { en: "Mouth", pt: "Boca",     emoji: "👄", example: "I shout the battle cry!",            examplePt: "Eu grito o grito de batalha!" },
    ]
  },

  {
    id: 10, type: "vocabulary",
    title: "Família Ninja", titleEn: "Ninja Family",
    description: "A família é a maior força de um ninja!",
    icon: "👨‍👩‍👧", color: "#e67e22", xpReward: 70,
    words: [
      { en: "Father",      pt: "Pai",   emoji: "👨", example: "My father taught me to fight!",          examplePt: "Meu pai me ensinou a lutar!" },
      { en: "Mother",      pt: "Mãe",   emoji: "👩", example: "My mother is my greatest hero!",         examplePt: "Minha mãe é meu maior herói!" },
      { en: "Brother",     pt: "Irmão", emoji: "👦", example: "My brother trains with me every day!",   examplePt: "Meu irmão treina comigo todo dia!" },
      { en: "Sister",      pt: "Irmã",  emoji: "👧", example: "My sister is very brave!",               examplePt: "Minha irmã é muito corajosa!" },
      { en: "Grandfather", pt: "Avô",   emoji: "👴", example: "My grandfather is a legend!",            examplePt: "Meu avô é uma lenda!" },
      { en: "Grandmother", pt: "Avó",   emoji: "👵", example: "My grandmother makes the best food!",    examplePt: "Minha avó faz a melhor comida!" },
      { en: "Friend",      pt: "Amigo", emoji: "🤝", example: "My friend fights by my side!",           examplePt: "Meu amigo luta ao meu lado!" },
      { en: "Master",      pt: "Mestre",emoji: "🧙", example: "My master is very wise!",                examplePt: "Meu mestre é muito sábio!" },
    ]
  },

  {
    id: 11, type: "vocabulary",
    title: "Na Escola dos Heróis", titleEn: "Hero School",
    description: "Todo herói precisa estudar! Vocabulário da escola!",
    icon: "📚", color: "#27ae60", xpReward: 75,
    words: [
      { en: "Book",    pt: "Livro",      emoji: "📖", example: "I read the book about ninja techniques!", examplePt: "Eu li o livro sobre técnicas ninja!" },
      { en: "Pencil",  pt: "Lápis",      emoji: "✏️", example: "I draw battle plans with my pencil!",    examplePt: "Eu desenho planos de batalha com meu lápis!" },
      { en: "Teacher", pt: "Professor",  emoji: "👨‍🏫", example: "My teacher knows everything!",          examplePt: "Meu professor sabe tudo!" },
      { en: "School",  pt: "Escola",     emoji: "🏫", example: "My school is the best ninja academy!",   examplePt: "Minha escola é a melhor academia ninja!" },
      { en: "Study",   pt: "Estudar",    emoji: "📝", example: "I study to become stronger!",            examplePt: "Eu estudo para ficar mais forte!" },
      { en: "Learn",   pt: "Aprender",   emoji: "🧠", example: "I learn something new every day!",       examplePt: "Eu aprendo algo novo todo dia!" },
      { en: "Write",   pt: "Escrever",   emoji: "✍️", example: "I write my training notes every day.",   examplePt: "Eu escrevo minhas anotações de treino todo dia." },
      { en: "Read",    pt: "Ler",        emoji: "👁️", example: "I read the secret scroll!",              examplePt: "Eu li o pergaminho secreto!" },
    ]
  },

  {
    id: 12, type: "vocabulary",
    title: "Clima da Batalha", titleEn: "Battle Weather",
    description: "Ninjas lutam em qualquer clima! Aprenda sobre o tempo!",
    icon: "⛈️", color: "#2980b9", xpReward: 75,
    words: [
      { en: "Sun",       pt: "Sol",        emoji: "☀️",  example: "The sun gives me energy to fight!",   examplePt: "O sol me dá energia para lutar!" },
      { en: "Rain",      pt: "Chuva",      emoji: "🌧️",  example: "I train even in the rain!",           examplePt: "Eu treino até mesmo na chuva!" },
      { en: "Wind",      pt: "Vento",      emoji: "💨",  example: "The wind carries my speed!",           examplePt: "O vento carrega minha velocidade!" },
      { en: "Storm",     pt: "Tempestade", emoji: "⛈️",  example: "I was born in the storm!",            examplePt: "Eu nasci na tempestade!" },
      { en: "Snow",      pt: "Neve",       emoji: "❄️",  example: "Snow makes the battlefield silent.",  examplePt: "A neve torna o campo de batalha silencioso." },
      { en: "Cloud",     pt: "Nuvem",      emoji: "☁️",  example: "I hide in the clouds like a ninja!",  examplePt: "Eu me escondo nas nuvens como um ninja!" },
      { en: "Lightning", pt: "Relâmpago",  emoji: "⚡",  example: "I am as fast as lightning!",          examplePt: "Eu sou tão rápido quanto o relâmpago!" },
      { en: "Fog",       pt: "Neblina",    emoji: "🌫️",  example: "Ninjas disappear in the fog!",        examplePt: "Ninjas desaparecem na neblina!" },
    ]
  },

  {
    id: 13, type: "vocabulary",
    title: "Opostos de Poder", titleEn: "Power Opposites",
    description: "Aprenda os opostos — como yin e yang!",
    icon: "☯️", color: "#7f8c8d", xpReward: 75,
    words: [
      { en: "Big",    pt: "Grande",  emoji: "🏔️", example: "The dragon is big and powerful!",   examplePt: "O dragão é grande e poderoso!" },
      { en: "Small",  pt: "Pequeno", emoji: "🐭", example: "Even small heroes are strong!",     examplePt: "Até heróis pequenos são fortes!" },
      { en: "Fast",   pt: "Rápido",  emoji: "⚡", example: "I am fast like the wind!",          examplePt: "Eu sou rápido como o vento!" },
      { en: "Slow",   pt: "Devagar", emoji: "🐌", example: "A slow enemy is an easy target!",  examplePt: "Um inimigo devagar é um alvo fácil!" },
      { en: "Hot",    pt: "Quente",  emoji: "🔥", example: "Fire is very hot!",                 examplePt: "O fogo é muito quente!" },
      { en: "Cold",   pt: "Frio",    emoji: "🧊", example: "Ice is cold and sharp!",            examplePt: "O gelo é frio e afiado!" },
      { en: "Light",  pt: "Leve",    emoji: "🪶", example: "A ninja must be light on his feet!", examplePt: "Um ninja deve ser leve nos pés!" },
      { en: "Heavy",  pt: "Pesado",  emoji: "⚓", example: "My training weights are heavy!",   examplePt: "Meus pesos de treino são pesados!" },
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRAMÁTICA
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 14, type: "grammar",
    title: "To Be — Eu Sou um Ninja!", titleEn: "To Be — Affirmative",
    description: "Aprenda a dizer 'sou', 'é' e 'somos' em inglês!",
    icon: "🔵", color: "#3498db", xpReward: 90,
    grammarOptions: ["am", "is", "are", "be"],
    grammarTip: "I → am | He/She/It → is | You/We/They → are",
    words: [
      { en: "I ___ a ninja",      pt: "am",  emoji: "🥷", example: "I am a ninja! I am strong!", examplePt: "Eu sou um ninja! Eu sou forte!", rule: "Com 'I' → sempre 'am'" },
      { en: "You ___ my friend",  pt: "are", emoji: "🤝", example: "You are my best friend!",    examplePt: "Você é meu melhor amigo!",      rule: "Com 'You' → sempre 'are'" },
      { en: "He ___ the hero",    pt: "is",  emoji: "🦸", example: "He is the hero of the village!", examplePt: "Ele é o herói da vila!",   rule: "Com 'He' → sempre 'is'" },
      { en: "She ___ very fast",  pt: "is",  emoji: "⚡", example: "She is very fast in battle!", examplePt: "Ela é muito rápida na batalha!", rule: "Com 'She' → sempre 'is'" },
      { en: "We ___ warriors",    pt: "are", emoji: "⚔️", example: "We are the strongest warriors!", examplePt: "Nós somos os guerreiros mais fortes!", rule: "Com 'We' → sempre 'are'" },
      { en: "They ___ powerful",  pt: "are", emoji: "💥", example: "They are very powerful enemies!", examplePt: "Eles são inimigos muito poderosos!", rule: "Com 'They' → sempre 'are'" },
      { en: "It ___ a dragon",    pt: "is",  emoji: "🐉", example: "It is a huge dragon!",       examplePt: "É um dragão enorme!",            rule: "Com 'It' → sempre 'is'" },
      { en: "I ___ the champion", pt: "am",  emoji: "🏆", example: "I am the champion!",         examplePt: "Eu sou o campeão!",              rule: "Com 'I' → sempre 'am'" },
    ]
  },

  {
    id: 15, type: "grammar",
    title: "To Be — Negativo!", titleEn: "To Be — Negative",
    description: "Aprenda a negar com o verbo To Be — 'Não sou fraco!'",
    icon: "🔴", color: "#e74c3c", xpReward: 90,
    grammarOptions: ["am not", "is not", "are not", "was not"],
    grammarTip: "I am not | He/She/It is not | You/We/They are not",
    words: [
      { en: "I ___ weak",           pt: "am not",  emoji: "💪", example: "I am not weak! I am strong!",          examplePt: "Eu não sou fraco! Eu sou forte!",    rule: "I + am not = negativo" },
      { en: "He ___ my enemy",      pt: "is not",  emoji: "🤜", example: "He is not my enemy!",                  examplePt: "Ele não é meu inimigo!",             rule: "He/She + is not = negativo" },
      { en: "We ___ afraid",        pt: "are not", emoji: "🦁", example: "We are not afraid of anything!",       examplePt: "Não temos medo de nada!",            rule: "We/They + are not = negativo" },
      { en: "She ___ the villain",  pt: "is not",  emoji: "😇", example: "She is not the villain!",              examplePt: "Ela não é a vilã!",                  rule: "She + is not = negativo" },
      { en: "They ___ our allies",  pt: "are not", emoji: "⚔️", example: "They are not our allies! Attack!",     examplePt: "Eles não são nossos aliados! Ataque!", rule: "They + are not = negativo" },
      { en: "I ___ giving up",      pt: "am not",  emoji: "🔥", example: "I am not giving up! Never!",           examplePt: "Eu não vou desistir! Nunca!",         rule: "I + am not = negativo" },
      { en: "You ___ alone",        pt: "are not", emoji: "🤝", example: "You are not alone! I am here!",        examplePt: "Você não está sozinho! Estou aqui!", rule: "You + are not = negativo" },
      { en: "It ___ over yet",      pt: "is not",  emoji: "⏳", example: "It is not over yet! Keep fighting!",   examplePt: "Ainda não acabou! Continue lutando!", rule: "It + is not = negativo" },
    ]
  },

  {
    id: 16, type: "grammar",
    title: "To Be — Perguntas!", titleEn: "To Be — Questions",
    description: "Aprenda a fazer perguntas com o verbo To Be!",
    icon: "❓", color: "#8e44ad", xpReward: 90,
    grammarOptions: ["Am I", "Is he", "Is she", "Are you", "Are they", "Are we"],
    grammarTip: "Para perguntar: inverta sujeito e verbo → Are you...? / Is he...?",
    words: [
      { en: "___ ready?",          pt: "Are you",  emoji: "🎯", example: "Are you ready for the battle?",    examplePt: "Você está pronto para a batalha?", rule: "Pergunta com 'you' → Are you...?" },
      { en: "___ strong?",         pt: "Am I",     emoji: "💪", example: "Am I strong enough to fight?",    examplePt: "Eu sou forte o suficiente para lutar?", rule: "Pergunta com 'I' → Am I...?" },
      { en: "___ the hero?",       pt: "Is he",    emoji: "🦸", example: "Is he the real hero?",            examplePt: "Ele é o verdadeiro herói?",         rule: "Pergunta com 'he' → Is he...?" },
      { en: "___ a villain?",      pt: "Is she",   emoji: "😈", example: "Is she a villain or a hero?",     examplePt: "Ela é uma vilã ou uma heroína?",    rule: "Pergunta com 'she' → Is she...?" },
      { en: "___ ninjas?",         pt: "Are they", emoji: "🥷", example: "Are they real ninjas?",           examplePt: "Eles são ninjas de verdade?",        rule: "Pergunta com 'they' → Are they...?" },
      { en: "___ a good team?",    pt: "Are we",   emoji: "⚔️", example: "Are we a good team?",            examplePt: "Nós somos uma boa equipe?",          rule: "Pergunta com 'we' → Are we...?" },
      { en: "___ the strongest?",  pt: "Is he",    emoji: "🏆", example: "Is he the strongest warrior?",   examplePt: "Ele é o guerreiro mais forte?",      rule: "Pergunta com 'he' → Is he...?" },
      { en: "___ winning?",        pt: "Are we",   emoji: "🎉", example: "Are we winning this fight?",     examplePt: "Estamos vencendo essa luta?",        rule: "Pergunta com 'we' → Are we...?" },
    ]
  },

  {
    id: 17, type: "grammar",
    title: "Verbo To Have — Ter Poder!", titleEn: "Verb To Have",
    description: "Aprenda a dizer o que você tem e possui!",
    icon: "🟢", color: "#27ae60", xpReward: 90,
    grammarOptions: ["have", "has", "had", "having"],
    grammarTip: "I/You/We/They → have | He/She/It → has",
    words: [
      { en: "I ___ a sword",       pt: "have", emoji: "⚔️", example: "I have a powerful sword!",           examplePt: "Eu tenho uma espada poderosa!",        rule: "I → have" },
      { en: "He ___ a dragon",     pt: "has",  emoji: "🐉", example: "He has a dragon as his partner!",    examplePt: "Ele tem um dragão como parceiro!",      rule: "He → has" },
      { en: "She ___ great power", pt: "has",  emoji: "✨", example: "She has great power inside her!",    examplePt: "Ela tem um grande poder dentro dela!",  rule: "She → has" },
      { en: "We ___ friends",      pt: "have", emoji: "🤝", example: "We have great friends by our side!", examplePt: "Temos ótimos amigos ao nosso lado!",    rule: "We → have" },
      { en: "They ___ a plan",     pt: "have", emoji: "📋", example: "They have a secret plan!",           examplePt: "Eles têm um plano secreto!",            rule: "They → have" },
      { en: "It ___ sharp claws",  pt: "has",  emoji: "🐾", example: "It has very sharp claws!",           examplePt: "Ele tem garras muito afiadas!",         rule: "It → has" },
      { en: "You ___ my trust",    pt: "have", emoji: "🙏", example: "You have my complete trust!",        examplePt: "Você tem minha total confiança!",       rule: "You → have" },
      { en: "He ___ no fear",      pt: "has",  emoji: "😤", example: "He has no fear at all!",             examplePt: "Ele não tem medo algum!",               rule: "He → has" },
    ]
  },

  {
    id: 18, type: "grammar",
    title: "Presente Simples — Ações!", titleEn: "Simple Present",
    description: "Ações de rotina! 'He trains' ou 'He train'? Descubra!",
    icon: "🟡", color: "#f39c12", xpReward: 95,
    grammarOptions: ["train", "trains", "run", "runs"],
    grammarTip: "I/You/We/They → verbo normal | He/She/It → verbo + S",
    words: [
      { en: "I ___ every day",         pt: "train",  emoji: "💪", example: "I train every day to get stronger!",   examplePt: "Eu treino todo dia para ficar mais forte!", rule: "'I' → sem 's' (train)" },
      { en: "He ___ very hard",        pt: "trains", emoji: "🏋️", example: "He trains very hard!",                 examplePt: "Ele treina muito!",                        rule: "'He' → com 's' (trains)" },
      { en: "She ___ every morning",   pt: "runs",   emoji: "🏃", example: "She runs every morning!",              examplePt: "Ela corre toda manhã!",                     rule: "'She' → com 's' (runs)" },
      { en: "We ___ together",         pt: "run",    emoji: "👥", example: "We run together as a team!",           examplePt: "Nós corremos juntos como uma equipe!",      rule: "'We' → sem 's' (run)" },
      { en: "They ___ in the park",    pt: "run",    emoji: "🌳", example: "They run in the park every day!",      examplePt: "Eles correm no parque todo dia!",           rule: "'They' → sem 's' (run)" },
      { en: "He ___ faster than me",   pt: "runs",   emoji: "⚡", example: "He runs faster than me!",              examplePt: "Ele corre mais rápido que eu!",             rule: "'He' → com 's' (runs)" },
      { en: "She ___ at the gym",      pt: "trains", emoji: "🥋", example: "She trains at the dojo!",              examplePt: "Ela treina no dojo!",                       rule: "'She' → com 's' (trains)" },
      { en: "You ___ with me",         pt: "train",  emoji: "🤜", example: "You train with me every week!",        examplePt: "Você treina comigo toda semana!",           rule: "'You' → sem 's' (train)" },
    ]
  },

  {
    id: 19, type: "grammar",
    title: "Artigos: A / An / The", titleEn: "Articles: A / An / The",
    description: "Aprenda quando usar 'a', 'an' e 'the' em inglês!",
    icon: "🟠", color: "#e67e22", xpReward: 90,
    grammarOptions: ["a", "an", "the", "—"],
    grammarTip: "a + consoante | an + vogal (a,e,i,o,u) | the = específico/único",
    words: [
      { en: "I am ___ ninja",             pt: "a",   emoji: "🥷", example: "I am a ninja! A real one!",        examplePt: "Eu sou um ninja! Um de verdade!",      rule: "'ninja' começa com 'n' → use 'a'" },
      { en: "He has ___ eagle",           pt: "an",  emoji: "🦅", example: "He has an eagle as companion!",    examplePt: "Ele tem uma águia como companheira!",  rule: "'eagle' começa com 'e' (vogal) → use 'an'" },
      { en: "I see ___ dragon over there",pt: "the", emoji: "🐉", example: "I see the dragon over there!",     examplePt: "Eu vejo o dragão lá!",                 rule: "Dragão específico → use 'the'" },
      { en: "She is ___ hero",            pt: "a",   emoji: "🦸", example: "She is a real hero!",              examplePt: "Ela é uma heroína de verdade!",        rule: "'hero' começa com 'h' → use 'a'" },
      { en: "Look at ___ sun!",           pt: "the", emoji: "☀️", example: "Look at the sun! It is bright!",   examplePt: "Olha para o sol! Ele está brilhante!", rule: "Só existe um sol → use 'the'" },
      { en: "I need ___ ally",            pt: "an",  emoji: "🤝", example: "I need an ally in this battle!",   examplePt: "Preciso de um aliado nessa batalha!",  rule: "'ally' começa com 'a' (vogal) → use 'an'" },
      { en: "He found ___ sword",         pt: "a",   emoji: "⚔️", example: "He found a magical sword!",        examplePt: "Ele encontrou uma espada mágica!",     rule: "'sword' começa com 's' → use 'a'" },
      { en: "I pet ___ wolf",             pt: "the", emoji: "🐺", example: "I pet the wolf every morning!",    examplePt: "Eu afago o lobo toda manhã!",          rule: "Lobo específico → use 'the'" },
    ]
  },

  {
    id: 20, type: "grammar",
    title: "Perguntas: What / Where / Who", titleEn: "Question Words",
    description: "Aprenda a fazer perguntas em inglês como um detetive ninja!",
    icon: "🟣", color: "#9b59b6", xpReward: 95,
    grammarOptions: ["What", "Where", "Who", "When"],
    grammarTip: "What = O quê/Qual | Where = Onde | Who = Quem | When = Quando",
    words: [
      { en: "___ is your power?",    pt: "What",  emoji: "✨", example: "What is your special power?",           examplePt: "Qual é o seu poder especial?",            rule: "Coisa/poder → What" },
      { en: "___ is the enemy?",     pt: "Where", emoji: "🗺️", example: "Where is the enemy hiding?",            examplePt: "Onde está o inimigo se escondendo?",      rule: "Lugar → Where" },
      { en: "___ is the strongest?", pt: "Who",   emoji: "🏆", example: "Who is the strongest warrior here?",    examplePt: "Quem é o guerreiro mais forte aqui?",     rule: "Pessoa → Who" },
      { en: "___ is your name?",     pt: "What",  emoji: "📛", example: "What is your name, warrior?",           examplePt: "Qual é o seu nome, guerreiro?",           rule: "Nome/coisa → What" },
      { en: "___ is the master?",    pt: "Who",   emoji: "🧙", example: "Who is the master of this dojo?",       examplePt: "Quem é o mestre deste dojo?",             rule: "Pessoa → Who" },
      { en: "___ do you train?",     pt: "Where", emoji: "🏠", example: "Where do you train every day?",         examplePt: "Onde você treina todo dia?",              rule: "Lugar → Where" },
      { en: "___ is a ninja?",       pt: "What",  emoji: "🥷", example: "What is a true ninja?",                 examplePt: "O que é um verdadeiro ninja?",            rule: "Definição/coisa → What" },
      { en: "___ is the battle?",    pt: "When",  emoji: "⏰", example: "When is the final battle?",             examplePt: "Quando é a batalha final?",               rule: "Tempo → When" },
    ]
  },

  {
    id: 21, type: "grammar",
    title: "Plural — Mais Guerreiros!", titleEn: "Plural Forms",
    description: "Aprenda como transformar uma palavra em muitas!",
    icon: "👥", color: "#16a085", xpReward: 95,
    grammarOptions: ["ninjas", "wolves", "heroes", "dragons", "enemies", "swords", "allies", "warriors"],
    grammarTip: "Maioria: + s (ninja→ninjas) | Especial: wolf→wolves, hero→heroes",
    words: [
      { en: "one ninja → two ___",    pt: "ninjas",   emoji: "🥷", example: "Two ninjas protect the village!", examplePt: "Dois ninjas protegem a vila!",         rule: "ninja + s = ninjas" },
      { en: "one wolf → three ___",   pt: "wolves",   emoji: "🐺", example: "Three wolves attack at night!",   examplePt: "Três lobos atacam à noite!",           rule: "wolf → wolves (irregular!)" },
      { en: "one hero → five ___",    pt: "heroes",   emoji: "🦸", example: "Five heroes stand together!",     examplePt: "Cinco heróis ficam juntos!",           rule: "hero → heroes (irregular!)" },
      { en: "one dragon → two ___",   pt: "dragons",  emoji: "🐉", example: "Two dragons fly over us!",        examplePt: "Dois dragões voam sobre nós!",         rule: "dragon + s = dragons" },
      { en: "one enemy → many ___",   pt: "enemies",  emoji: "😈", example: "Many enemies surround us!",       examplePt: "Muitos inimigos nos cercam!",          rule: "enemy → enemies (y→ies)" },
      { en: "one sword → ten ___",    pt: "swords",   emoji: "⚔️", example: "Ten swords light up the sky!",   examplePt: "Dez espadas iluminam o céu!",          rule: "sword + s = swords" },
      { en: "one ally → four ___",    pt: "allies",   emoji: "🤝", example: "Four allies join the fight!",     examplePt: "Quatro aliados entram na luta!",       rule: "ally → allies (y→ies)" },
      { en: "one warrior → six ___",  pt: "warriors", emoji: "🛡️", example: "Six warriors block the gate!",   examplePt: "Seis guerreiros bloqueiam o portão!", rule: "warrior + s = warriors" },
    ]
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// Conquistas
// ─────────────────────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  // Progresso
  { id: "first_lesson",   title: "Primeiro Passo",         desc: "Complete sua primeira lição!",              icon: "🌟", condition: s => s.lessonsCompleted >= 1 },
  { id: "three_lessons",  title: "Em Treinamento",         desc: "Complete 3 lições!",                        icon: "🥋", condition: s => s.lessonsCompleted >= 3 },
  { id: "ten_lessons",    title: "Guerreiro Dedicado",     desc: "Complete 10 lições!",                       icon: "⚔️", condition: s => s.lessonsCompleted >= 10 },
  { id: "all_vocab",      title: "Mestre do Vocabulário",  desc: "Complete todos os episódios de vocabulário!", icon: "📚", condition: s => EPISODES.filter(e => e.type === "vocabulary").every(e => s.completedEpisodes.includes(e.id)) },
  { id: "first_grammar",  title: "Estudante de Gramática", desc: "Complete sua primeira lição de gramática!",  icon: "📝", condition: s => EPISODES.filter(e => e.type === "grammar").some(e => s.completedEpisodes.includes(e.id)) },
  { id: "all_grammar",    title: "Mestre da Gramática",    desc: "Complete todos os episódios de gramática!",  icon: "🎓", condition: s => EPISODES.filter(e => e.type === "grammar").every(e => s.completedEpisodes.includes(e.id)) },
  { id: "all_episodes",   title: "Lenda Ninja",            desc: "Complete todos os 21 episódios!",            icon: "👑", condition: s => s.completedEpisodes.length >= EPISODES.length },
  // Desempenho
  { id: "perfect_score",  title: "Perfeição Suprema",      desc: "Acerte tudo em uma lição!",                 icon: "💯", condition: s => s.perfectLessons >= 1 },
  { id: "three_perfect",  title: "Mestre da Precisão",     desc: "Faça 3 lições perfeitas!",                  icon: "🎯", condition: s => s.perfectLessons >= 3 },
  { id: "streak_5",       title: "Série de Fogo",          desc: "Acerte 5 seguidos!",                        icon: "🔥", condition: s => s.bestStreak >= 5 },
  { id: "streak_10",      title: "Série Imparável",        desc: "Acerte 10 seguidos!",                       icon: "⚡", condition: s => s.bestStreak >= 10 },
  // XP
  { id: "xp_100",         title: "Poder Crescente",        desc: "Alcance 100 XP!",                           icon: "💫", condition: s => s.totalXP >= 100 },
  { id: "xp_500",         title: "Guerreiro Poderoso",     desc: "Alcance 500 XP!",                           icon: "🌀", condition: s => s.totalXP >= 500 },
  { id: "xp_1000",        title: "Lenda Imortal",          desc: "Alcance 1000 XP!",                          icon: "🏆", condition: s => s.totalXP >= 1000 },
];
