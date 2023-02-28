const mongoose = require("mongoose") ;
mongoose.set('strictQuery', false);

const connectMongo = () => mongoose.connect(process.env.MONGODB_URL)

module.exports = connectMongo;

[
    {
      "name": "Apple iPhone 14 Pro Max 512GB Or 6,7",
      "description": "Une manière inédite et magique d’interagir avec votre iPhone. Une fonctionnalité de sécurité essentielle conçue pour sauver des vies. Un appareil photo 48 Mpx innovant pour un niveau de détail à couper le souffle. Et toute la puissance de la puce de smartphone ultime. Découvrez Dynamic Island, une innovation signée Apple, conjuguant matériel et logiciel d’une manière totalement inédite. Elle vous présente la musique que vous écoutez, votre appel FaceTime en cours, et tellement plus, sans jamais interrompre ce que vous faites.",
      "price": 2180,
      "images": [
        "/products/mobiles/iphone14/1.png",
        "/products/mobiles/iphone14/2.png",
        "/products/mobiles/iphone14/3.png",
        "/products/mobiles/iphone14/4.png",
        "/products/mobiles/iphone14/5.png",
        "/products/mobiles/iphone14/6.png",
        "/products/mobiles/iphone14/7.png"
      ],
      "category": "mobiles",
      "marque": "iphone",
      "color": ["noir", "rouge", "blanc","gold"],
      "quatity": 25,
    },
    {
      "name": "Apple iPhone 13 128GB Minuit 6,1",
      "description": "L'iPhone est un smartphone haut de gamme signé Apple et compatible 5G. Il embarque le processeur A15 Bionic, 128 Go de stockage au minimum et un double module caméra avec grand-angle et ultra grand-angle. Son écran OLED mesure 6,1 pouces et est compatible HDR Dolby Vision.",
      "price": 900,
      "images": [
        "/products/mobiles/iphone13/1.png",
        "/products/mobiles/iphone13/2.png",
        "/products/mobiles/iphone13/3.png",
        "/products/mobiles/iphone13/4.png",
        "/products/mobiles/iphone13/5.jpg",
        "/products/mobiles/iphone13/6.jpg"
      ],
      "category": "mobiles",
      "marque": "iphone",
      "color": ["noir", "rouge", "blanc","gold"],
      "quatity": 25,
    },
    {
      "name": "Apple iPhone 12 64GB 6,1",
      "description": "Compatible 5G, l'iPhone 12 d'Apple est équipé d'un écran OLED de 6,1 pouces. Ce smartphone dispose de la nouvelle puce A14 Bionic gravée en 5 nm et 4Gb de RAM, en photo, embarque d'un double module caméra avec capteur grand-angle et capteur ultra grand-angle (12 Mpix + 12 Mpix)",
      "price": 790,
      "images": [
        "/products/mobiles/iphone12/1.png",
        "/products/mobiles/iphone12/2.png",
        "/products/mobiles/iphone12/3.png",
        "/products/mobiles/iphone12/4.png",
        "/products/mobiles/iphone12/5.png",
        "/products/mobiles/iphone12/6.png",
        "/products/mobiles/iphone12/7.png",
      ],
      "category": "mobiles",
      "marque": "iphone",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Apple iPhone 11 128GB",
      "description": "l'iPhone 11 se distingue de son prédécesseur par l'utilisation d'un double module caméra. On trouve à son dos un ultra grand angle en complément de l'objectif principal, chacun d'eux étant associé à un capteur de 12 Mpx. L'iPhone 11 est également équipé du nouveau processeur Apple A13 Bionic avec 4Gb de RAM et utilise un capteur Face ID amélioré.",
      "price": 650,
      "images": [
        "/products/mobiles/iphone11/1.jpg",
        "/products/mobiles/iphone11/2.jpg",
        "/products/mobiles/iphone11/3.jpg",
        "/products/mobiles/iphone11/4.jpg",
        "/products/mobiles/iphone11/5.jpg"
      ],
      "category": "mobiles",
      "marque": "iphone",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Samsung Galaxy Z Flip 4 5G 8Gb Ram 128GB",
      "description": "Quatre teintes ne vous suffisent pas ? Nous vous avons. Le Galaxy Z Flip4 5G Bespoke Edition vise à le rendre encore plus personnel, afin que vous puissiez donner votre tour unique à un nouveau téléphone avec une combinaison de couleurs personnalisée.L'ère de la planification des regards autour de votre téléphone est révolue. Petit mais puissant une fois plié, le Galaxy Z Flip4 5G est un smartphone compact de taille normale, et juste la bonne taille pour se glisser dans une poche quand il est temps de tuer. ",
      "price": 800,
      "images": [
        "/products/mobiles/galaxyz/1.jpg",
        "/products/mobiles/galaxyz/2.webp",
        "/products/mobiles/galaxyz/3.jpg",
        "/products/mobiles/galaxyz/4.jpg",
        "/products/mobiles/galaxyz/5.jpg"
      ],
      "category": "mobiles",
      "marque": "samsung",
      "color": ["noir", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Samsung Galaxy S23 6,4 (128GO,8GO)",
      "description": "Sur la nouvelle génération de réseau de données, les vitesses impressionnantes de la 5G modifient totalement les expériences mobiles : du gaming au streaming, en passant par les téléchargements et les partages ultras rapides.Faites-en plus avec moins. Le Galaxy A33 5G est plus intelligent et plus sophistiqué que jamais avec sa finition mate, son cadre élégant et son orifice de caméra intégré avec Ambient Edge.",
      "price": 1290,
      "images": [
        "/products/mobiles/galaxys23/1.png",
        "/products/mobiles/galaxys23/2.png",
        "/products/mobiles/galaxys23/3.png"
      ],
      "category": "mobiles",
      "marque": "samsung",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "XIAOMI Redmi Note 11 Pro 5G Plus",
      "description": "Le Redmi Note 11 Pro 5G Plus  est équipé d’un écran AMOLED FHD+ de 6,67’’ pour profiter de couleurs vives avec une large gamme de couleurs DCI-P3 et un rapport de contraste de 4 500 000:1. Le taux de rafraîchissement de 120Hz permet d’obtenir la fluidité que vous jouiez et que vous parcouriez du contenu et le taux d’échantillonnage tactile est de 360Hz offrant une expérience plus sensible. L’écran est percé afin de laisser la place à la caméra selfie de 16Mp.",
      "price": 560,
      "images": [
        "/products/mobiles/redmi11/1.jpg",
        "/products/mobiles/redmi11/2.jpg",
        "/products/mobiles/redmi11/3.jpg",
        "/products/mobiles/redmi11/4.jpg"
      ],
      "category": "mobiles",
      "marque": "Xiaomi",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 50,
    },
    {
      "name": "Samsung Note 20 Ultra 8GB/256GB",
      "description": "La vidéo 8K vous donne des images nettes avec un niveau de détail incroyable. Quant aux réglages de qualité professionnelle, ils vous donnent un pouvoir créatif en temps réel en vous permettant d’éditer directement dans la caméra. Filmez des scènes d’action très fluides à 120 images, ou isolez des voix avec un micro Bluetooth. Ajoutez ensuite la touche finale en éditant vos vidéos directement sur votre téléphone.",
      "price": 950,
      "images": [
        "/products/mobiles/note20/1.jpg"
      ],
      "category": "mobiles",
      "marque": "samsung",
      "color": ["noir"],
      "quatity": 40,
    },
    {
      "name": "Vivo V25 5G (8 Go+256 Go) - Ultra-Sensible OIS 64 MP",
      "description": "Le Design à Couleurs Changeantes interagit avec la lumière du soleil et d'autres sources de rayons UV et reflète différentes couleurs. Deux couleurs différentes dans un seul téléphone le rendent plus unique et élégant.",
      "price": 480,
      "images": [
        "/products/mobiles/vivo25/1.jpg",
        "/products/mobiles/vivo25/2.jpg",
        "/products/mobiles/vivo25/3.jpg",
        "/products/mobiles/vivo25/4.jpg",
        "/products/mobiles/vivo25/5.jpg"
      ],
      "category": "mobiles",
      "marque": "vivo",
      "color": ["noir", "rouge", "bleu"],
      "quatity": 25,
    },
    {
      "name": "XIAOMI Redmi 9A (2Go/32Go) Dual Sim",
      "description": "Processeur Media Tek Helio G25 RAM 2 GB + ROM 32 GB Écran 6.53 verre 5th Corning Gorilla Résolution : 1560x720 Caméra arrière 13MP main cameraCaméra selfie 5.0 MP Batterie 5000mAh",
      "price": 21180,
      "images": [
        "/products/mobiles/redmi9a/1.jpg",
        "/products/mobiles/redmi9a/2.jpg"
      ],
      "category": "mobiles",
      "marque": "xiami",
      "color": ["noir", "bleu"],
      "quatity": 25,
    },
    {
      "name": "Oppo Reno8 T 5G - 8Go RAM, 256Go ROM",
      "description": "Profitez d'une expérience véritablement immersive sur le grand écran de 6,7 pouces aux bords pratiquement invisibles.Le taux de rafraîchissement ultra-élevé de 120 Hz garantit un affichage fluide et sans effort.",
      "price": 480,
      "images": [
        "/products/mobiles/opporeno8/1.jpg",
        "/products/mobiles/opporeno8/2.jpg",
        "/products/mobiles/opporeno8/3.jpg",
        "/products/mobiles/opporeno8/4.jpg",
        "/products/mobiles/opporeno8/5.jpg"
      ],
      "category": "mobiles",
      "marque": "oppo",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 10,
    },
    {
      "name": "Edifier X3 Écouteur Bluetooth Sans Fil assistant vocal",
      "description": "Edifier est l'une des marques audios les plus célèbres de Chine. Nous nous définissons comme le présentateur de la dernière technologie audio. Fondée à Pékin en 1996, Edifier se spécialise dans les solutions audios haut de gamme qui mettent en valeur l'innovation technologique et l'élégance de la conception. Nous offrons une expérience sonore exceptionnelle grâce à une large gamme de systèmes sonores pour le divertissement personnel et l'excellence professionnelle.  Profitez d'un son exceptionnel grâce aux haut-parleurs de haute qualité, aux écouteurs stéréo vraiment sans fil élégants et aux casques d'Edifier. ",
      "price": 30,
      "images": [
        "/products/casques/edifierx3/1.jpg",
        "/products/casques/edifierx3/2.jpg",
        "/products/casques/edifierx3/3.jpg",
        "/products/casques/edifierx3/4.jpg",
        "/products/casques/edifierx3/5.jpg",
        "/products/casques/edifierx3/6.jpg",
        "/products/casques/edifierx3/7.jpg",
        "/products/casques/edifierx3/8.jpg"
      ],
      "category": "casques",
      "marque": "edifier",
      "color": ["noir"],
      "quatity": 45,
    },
    {
      "name": "iboga Écouteurs Bluetooth 5.3",
      "description": "ous pouvez à tout moment écouter ce qui se passe autour de vous, simplement en appuyant sur le capteur-pression afin de passer en mode « Transparence », pour désactiver la réduction active de bruit. Le mode « Transparence » laisse filtrer les sons extérieurs, pour que vous puissiez échanger facilement avec les personnes proches de vous sans avoir à les retirer.Chaque oreillette est équipée d’un micro orienté vers l’extérieur, ces micros captent les bruits de votre environnement et génèrent alors un « antibruit » qui neutralise les bruits ambiants",
      "price": 45,
      "images": [
        "/products/casques/iphone11/1.jpg",
        "/products/casques/iphone11/2.jpg",
        "/products/casques/iphone11/3.jpg",
        "/products/casques/iphone11/4.jpg",
        "/products/casques/iphone11/5.jpg"
      ],
      "category": "casques",
      "marque": "iboga",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Oraimo FreePods 3 TWS écouteurs sans Fil véritables",
      "description": "Les FreePods 3 possèdent deux modes intelligents différents dans chaque paire. Le mode Bass bloque le bruit ambiant et arrête les fuites d'air pour renforcer les basses. Le mode Awareness vous permet de vous adapter à votre environnement. Vous pouvez toujours écouter de la musique et entendre clairement.",
      "price": 34,
      "images": [
        "/products/casques/oraimo1/1.jpg",
        "/products/casques/oraimo1/2.jpg",
        "/products/casques/oraimo1/3.jpg",
        "/products/casques/oraimo1/4.jpg",
        "/products/casques/oraimo1/5.jpg",
        "/products/casques/oraimo1/6.jpg"
      ],
      "category": "casques",
      "marque": "oraimo",
      "color": ["noir" ,"blanc" ],
      "quatity": 25,
    },
    {
      "name": "TWS Écouteurs sans fil M10 Bluetooth 5.1",
      "description": "Version Bluetooth: 5.1 Protocole: HFP 1.7 / HSP1.2 / A2DP 1 / AVRCP 1.6/ SPP1.2 / PBAP1.0 Version de réduction du bruit: CVC8.0 Gamme de fréquence: 2.402GHZ ~ 2.480GHZ Distance de travail: 10mTension et courant d'entrée de charge: 5V au-dessus de 600mA Capacité de la batterie du casque: 50mAh Capacité de la batterie du compartiment de charge: 2200mA Temps de charge du casque 2 heures Temps de lecture de musique: 4-6hours Temps de conversation: 4-6hours",
      "price": 10,
      "images": [
        "/products/casques/tws/1.jpg",
        "/products/casques/tws/2.jpg",
        "/products/casques/tws/3.jpg",
        "/products/casques/tws/4.jpg"
      ],
      "category": "casques",
      "marque": "tws",
      "color": ["noir", "blanc"],
      "quatity": 75,
    },
    {
      "name": "Deep Bass ecouteurs casque Bluetooth V5.0+EDR sans fil",
      "description": "Le casque stéréo Bluetooth DeepBass R2 est un excellent choix de modèle dans sa gamme de prix, parfaitement adapté à un usage quotidien. L'appareil se distingue par sa qualité sonore époustouflante et son apparence inhabituelle. La batterie de l'appareil offre une autonomie en conversation allant jusqu'à 23 heures. L'accessoire est fait de matériaux durables et dispose d'un assemblage de haute qualité. Les écouteurs ont une coupe ergonomique et offriront à leur porteur une expérience inoubliable tout en écoutant leur musique préférée. Le modèle dispose d'un câble pratique et pratique.Casque stéréo Bluetooth DeepBass R2 - démontrez un son stéréo puissant et offrez à son propriétaire une expérience d'écoute inoubliable sur votre musique préférée. Modèle d'accessoire avec microphone et boutons permettant de répondre à un appel et d'ajuster l'écoute de la musique. L'accessoire est fait de matériaux durables, a une finition de qualité et des accents de design élégants. Le rebord vous permet d'adapter les écouteurs à la forme de la tête de toute personne. L'accessoire dispose d'un câble mini-jack amovible de 3,5 mm. Caractéristiques: Type de casque: sur l'oreille Type de connexion: sans fil Interface de connexion: Aux, Bluetooth, micro-USB Couleur noire Type de monture: avec serre-tête Impédance, Ohm: 32 Matériau des coussinets d'oreille: cuir écologique Temps de travail, h: 9 Rayon d'action, m: 10 Version Bluetooth: Bluetooth 5.0",
      "price": 200,
      "images": [
        "/products/casques/deepbass/1.jpg",
        "/products/casques/deepbass/2.jpg",
        "/products/casques/deepbass/3.jpg",
        "/products/casques/deepbass/4.jpg",
        "/products/casques/deepbass/5.jpg",
        "/products/casques/deepbass/6.jpg"
      ],
      "category": "casques",
      "marque": "deepbass",
      "color": ["noir", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Écouteurs sans fil avec micro RGB LED casque Gamer",
      "description": "1. La fonction Bluetooth + MP3 prend en charge la lecture de musique stéréo, les appels téléphoniques.2. Prend en charge tous les appareils audio dotés d'une capacité Bluetooth, tels que téléphone portable, tablette PC, ordinateur portable, ordinateur, etc.3. Prise audio de 3.5mm, fournit une connexion filaire simple d'une variété d'appareils sans Bluetooth.5. Chargé via USB, batterie rechargeable, pratique et pratique. 6. Temps de lecture jusqu'à 8 ~ 10 heures, et temps de conversation continu jusqu'à 8 heures, temps de veille jusqu'à 148 heures. 7. Bonne qualité, conception pliable et charnières à longueur réglable, très confortable à porter et facile à transporter.8. Meilleur choix pour écouter de la musique, regarder un film, chatter en ligne, etc. 9. Avec insertion de carte SD, sans aucun appareil bluetooth, peut toujours profiter de la musique à tout moment n'importe où. 10. Écouteurs chat couleur arc-en-ciel, écouteurs cadeaux de vacances pour enfants. Écouteurs sans fil avec micro RGB LED casque Gamer bluetooth oreillettes de chat mignonnes,  Casque pour enfants - Oreilles de chat - Sans fil - Pliable - Avec Bluetooth et lumière LED - Oreilles de chat",
      "price": 17,
      "images": [
        "/products/casques/gamer/1.jpg",
        "/products/casques/gamer/2.jpg"
      ],
      "category": "casques",
      "marque": "iboga",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Hp EliteBook 830 G5 Core i5-8350U 8Go DDR4 , 256Go SSD",
      "description": "HP 830 G5 Remis à Neuf Le PC portable HP EliteBook 830 G5 est destiné aux professionnels qui se déplacent souvent. Conçu pour la mobilité, il est à la fois léger, compact et robuste tout en intégrant des fonctionnalités de sécurité avancées En plus de ses composants performants, le PC portable professionnel HP EliteBook 830 G5 bénéficie d'un superbe écran de 13.3 pouces avec résolution Full HD (1920 x 1080). Pour votre confort, il dispose aussi d'un clavier à touches rétroéclairées avec protection anti-éclaboussures. Son système audio Bang & Olufsen offre également une restitution sonore de haute qualité. Bénéficiez d'une protection efficace et d'une gestion simplifiée sur les ordinateurs les plus sécurisés et administrables de HP. HP Sure Start (4e génération) vous protège contre les attaques du BIOS et gère aisément les appareils via Microsoft SCCM avec le kit d'intégration HP Manageability (à télécharger). Le PC portable HP EliteBook 830 G5 offre aussi une sécurité avancée notamment grâce à sa puce TPM 2.0 et offre un accès sécurisé via son lecteur d'empreinte digitale intégré.",
      "price": 340,
      "images": [
        "/products/pc/hpeliteBook/1.jpg",
        "/products/pc/hpeliteBook/2.jpg",
        "/products/pc/hpeliteBook/3.jpg",
        "/products/pc/hpeliteBook/4.jpg"
      ],
      "category": "pc",
      "marque": "hp",
      "color": ["noir", "blanc"],
      "quatity": 30,
    },
    {
      "name": "Acer PC PORTABLE Nitro 5 AN515-45-R4RB Ryzen 9",
      "description": "Acer PC PORTABLE Nitro 5 AN515-45-R4RB Ryzen 9 5900HX – NVIDIA RTX 3080 8G 1T SSD 32G Avec Le ACER NITRO 5 AN515-45-R4RB, Passez à la vitesse supérieure avec un processeur robuste Octa Core AMD Ryzen 9 5900HX Turbo 4.6Ghz, Une mémoire de 32G DDR4, Un disque de stockage Flash avec 1T SSD, un Ecran 15.6 IPS ultra-rapide avec un taux de rafraîchissement de 144Hz Hz et une resolution FULL HD, une carte Graphique performante Nvidia RTX 3080 Avec 8G GDDR6, Un clavier Qwerty rétroéclairer et Une licence windows 11 Famille... sans oublier sa mobilité impressionnante, son refroidissement avancé et ses capacités audio stellaires, vous comprendrez rapidement pourquoi le Nitro 5 donne un coup de grâce à la concurrence ! Avec Le ACER NITRO 5 AN515-45-R4RB, Passez à la vitesse supérieure avec un processeur robuste Octa Core AMD Ryzen 9 5900HX Turbo 4.6Ghz, Une mémoire de 32G DDR4, Un disque de stockage Flash avec 1T SSD, un Ecran 15.6 IPS ultra-rapide avec un taux de rafraîchissement de 144Hz Hz et une resolution FULL HD, une carte Graphique performante Nvidia RTX 3080 Avec 8G GDDR6, Un clavier Qwerty rétroéclairer et Une licence windows 11 Famille... sans oublier sa mobilité impressionnante, son refroidissement avancé et ses capacités audio stellaire",
      "price": 230,
      "images": [
        "/products/pc/acernitro5/1.jpg",
        "/products/pc/acernitro5/2.jpg",
        "/products/pc/acernitro5/3.jpg",
        "/products/pc/acernitro5/4.jpg"
      ],
      "category": "pc",
      "marque": "acer",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
    {
      "name": "Asus Pc portable G713 Ryzen 7-4800H 17,3 8Go 512Go SSD",
      "description": "La série G713 comprend au moins 16 configurations différentes de divers CPU AMD, GPU GeForce, tailles de batterie et même épaisseurs. Il y a de bonnes options à trouver là-dedans, mais la nôtre n'est peut-être pas la meilleure.The Wi-Fi 6-enabled MediaTek MT7921 competes against the more common Intel AX200/201 series. Though reliable in terms of browsing and video streaming, its performance is not as fast as the Intel solution which regularly hits above 1 Gbps. USB-A 3.2 Gen. 1, USB-C 3.2 Gen. 2 w/ DisplayPort + Power Delivery + G-Sync, HDMI 2.0b, Gigabit RJ-45, AC adapter",
      "price": 1500,
      "images": [
        "/products/pc/asusg7/1.jpg",
        "/products/pc/asusg7/2.jpg",
        "/products/pc/asusg7/3.jpg",
        "/products/pc/asusg7/4.jpg"
      ],
      "category": "pc",
      "marque": "asuus",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 10,
    },
    {
      "name": "Hp laptop PAVILION GAMING DUSKERS 21C1 RYZEN 5",
      "description": "Numéro de produit HP Pavilion Gaming Laptop 15-ec2001nk Microprocesseur Processeur AMD Ryzen™ 5 5600H (jusqu’à 4,2 GHz de fréquence Boost maximale, mémoire cache L3 16 Mo , 6 cœurs, 12 threads)Chipset Cartes intégrées AMD Mémoire, standard 8 Go de mémoire RAM DDR4-3200 MHz (2 x 4 Go) Carte graphique Carte graphique NVIDIA® GeForce RTX™ 3050 Ordinateur portable GPU (4 Go de mémoire GDDR6 dédiée) Disque dur SSD 256 GB PCIe® NVMe™ TLC M.2 Lecteur optique Lecteur optique non fourni Écran Écran Full HD d’une diagonale de 39,6 cm (15,6 pouces) (1920 x 1080), micro-bords, antireflet, 250 nits, 45 % NTSC Connectivité sans fil Carte combinée Realtek Wi-Fi CERTIFIED 6™ (2x2) et Bluetooth® 5.2 (prise en charge de taux de données en Gigabits) Interface réseau LAN GbE 10/100/1000 intégré Connecteurs d'extension 1 lecteur de cartes multimédias SD multiformat Ports externes 1 port SuperSpeed USB type-C®, vitesse de transfert de 5 Go/s; 1 port SuperSpeed USB type-A, vitesse de transfert de 5 Go/s; 1 port USB 2.0 type-A (veille et charge HP); 1 port HDMI 2.0; 1 port RJ-45 ; 1 adaptateur secteur Smart Pin; 1 prise combinée casque/microphone",
      "price": 1100,
      "images": [
        "/products/pc/hppavion/1.jpg",
        "/products/pc/hppavion/2.jpg",
        "/products/pc/hppavion/3.jpg",
        "/products/pc/hppavion/4.jpg"
      ],
      "category": "pc",
      "marque": "hp",
      "color": ["noir", "rouge", "blanc"],
      "quatity": 25,
    },
      {
        "name": "Pro6 Écouteurs stéréo Sans Fil Bluetooth",
        "description": "Nos écouteurs sans fil pro6 tws utilisent la dernière technologie Bluetooth V5+EDR pour se connecter à votre appareil rapidement et facilement. Avec des puces Realtek et des haut-parleurs de gros calibre intégrés, le son stéréo 3D vous apportera une expérience nouvelle et formidable. Cela rend les aigus brillants et les basses épaisses. Le trou sonore latéral améliore la stéréo pour éviter un deuxième mixage. Profitez d'un son haute définition pendant un appel.",
        "price": 150,
        "images":[
          "/products/casques/pro6/1.jpg",
          "/products/casques/pro6/2.jpg",
          "/products/casques/pro6/3.jpg",
          "/products/casques/pro6/4.jpg"
        ],
        "category": "casques",
        "marque":"",
        "color":["noir","blanc"],
        "picture": "/products/airpods.png"
      },
      {
        "name": "Msi PC PORTABLE GAMER MSI KATANA ",
        "description": "Processeur Intel Core i7 et NVIDIA GeForce RTX 3050\nLe MSI GF76 Katana 11UC-204FR est un PC portable Gaming équipé d'un processeur Intel Core de 11ème génération, d'une carte graphique NVIDIA GeForce RTX, de RAM DDR4, d'un SSD PCI-E ultra-rapide et d'un écran Full HD 144 Hz.\nDécouvrez Dynamic Island, une innovation signée Apple, conjuguant matériel et logiciel d’une manière totalement inédite. Elle vous présente la musique que vous écoutez, votre appel FaceTime en cours, et tellement plus, sans jamais interrompre ce que vous faites. ",
        "price": 12000,
        "images":[
          "/products/pc/msikatana/1.jpg",
          "/products/pc/msikatana/2.jpg",
          "/products/pc/msikatana/3.jpg",
          "/products/pc/msikatana/4.jpg",
          "/products/pc/msikatana/5.jpg",
        ],
        "category": "pc",
        "marque":"msi",
        "color":["noir","blanc"],
        "picture": "/products/pc/msikatana/3.jpg"
      },
      {
        "name": "Edifier W820NB ANC Casque Bluetooth",
        "description": "Les écouteurs W820NB ont été approuvés par JAS et sont conformes aux normes audio haute résolution. Ils ont une gamme de fréquences de 20 Hz à 40 kHz et vous permettent de profiter de chaque session d'écoute de musique.\nLes écouteurs W820NB sont construits avec un grand pilote à diaphragme dynamique et produisent un son cristallin riche en détails.",
        "price": 650,
        "images":[
          "/products/casques/edifierx4/1.webp",
          "/products/casques/edifierx4/2.webp",
          "/products/casques/edifierx4/3.webp",
          "/products/casques/edifierx4/4.webp",
          "/products/casques/edifierx4/5.webp",
          "/products/casques/edifierx4/6.webp",
          "/products/casques/edifierx4/7.webp",
        ],
        "category": "casques",
        "marque":"edifier",
        "color":["noir","blanc","grey","bleu"],
        "picture": "/products/headset.png"
      }
    
  ]