export const DISTRIBUTORS = Object.create({

}, {
    Spain: {
        value: [
            {
                name: "Inser Robotica",
                address: "Derio Bidea, 55, 48100, Mungia, Bizkaia",
                url: "",
                coordinates: { lat: 43.33351116019542, lng: -2.8666334015211787 },
                robots: ["UR"],
                logo: 'inser-robotica.jpg'
            },
            {
                name: "Robot+",
                address: "Calle Londres, 10, Local comercial C-5, 28805, Alcalá de Henares, Madrid",
                url: "https://robotplus.es/",
                coordinates: { lat: 40.498101114071, lng: -3.335358710611812 },
                robots: ["UR", "Fanuc"],
                logo: 'robot-plus.jpg'
            },
            {
                name: "CFZ Cobots",
                address: "C Jose Maria Castano Martinez, 44, 03202, Elch, Alicante",
                url: "https://cfzcobots.com/",
                coordinates: { lat: 38.272596276659044, lng: -0.6865642700038654 },
                robots: ["UR"],
                logo: 'logo-cfz-robots.png'
            },
            {
                name: "Vicosystems",
                address: "Ronda de Ponent, 116, 08201 Sabadell, Barcelona",
                url: "https://vicosystems.com/",
                coordinates: {lat: 41.54754729069235, lng: 2.0992526561056764},
                robots: ["UR"],
                logo: 'logo-vicosystems.png'
            },
            {
                name: "ELEKTRES",
                address: "Crta.Sta.Coloma 82 2b | 17005 Girona",
                url: "https://www.elektres.es/",
                coordinates: { lat: 41.96193270460412, lng: 2.8047136851114516 },
                robots: ["UR"],
                logo: 'logo-itsme-elektres.png'
            },
            {
                name: "Fluitronic",
                address: "C. Gabriel Ramos Bejarano, Parcela 233E, C.P 14014, Cordoba, Spain",
                url: 'https://www.fluitronic.es/',
                coordinates: {lat: 37.90173882388097, lng: -4.708789286310357},
                robots: ['UR'],
                logo: 'fluitronic-map.png'
            }
        ],
        enumerable: true
    },
    Russia: {
        value: [
            {
                name: "ANT Company",
                address: "Saint Perersburg, Glinyanaya st., b .5/1, office 308.",
                url: "http://ant-company.ru/",
                coordinates: { lat: 59.91449926845972, lng: 30.386844974099507 },
                robots: ["UR", "Doosan"]
            },
            {
                name: "Indutech",
                address: "Saint Petersburg, Kondratievski pr., b. 15",
                url: "https://www.indutech.ru/",
                coordinates: {lat: 59.920600209732974, lng: 30.318278982135755},
                robots: ['UR']
              },
              {
                name: "Technored",
                address: "Moscow, Antonova-Ovseenko st., b. 15",
                url: "https://technored.ru/",
                coordinates: {lat: 55.75563294030618, lng: 37.53740408534743},
                robots: ['UR']
              },
              {
                name: "Promenergo",
                address: "Moscow,  Ryazanski pr., 8A, build. 46",
                url: "https://промэнергоавтоматика.рф",
                coordinates: {lat: 55.72600087064534, lng: 37.75515342201022},
                robots: ['UR']
              },
        ],
        enumerable: true
    },
    Mexico: {
        value: [
            {
                name: "Einsrobotics",
                address: 'Torre Cibeles, Monterrey, Nuevo León.',
                url: 'https://einsrobotics.com/',
                robots: ["UR"],
                logo: 'einsrobotics-logo.png',
                coordinates: { lat: 25.629621904968833, lng: -100.30028785353119 }
            },
        ],
        enumerable: true
    },
    UK: {
        value: [
            {
                name: "Native Robotics",
                address: "2 Oscar Wilde Road, Reading",
                url: "https://native-robotics.com/",
                robots: ['UR'],
                logo: 'nr_logo.png',
                coordinates: { lat: 51.456877, lng: -0.957046 }
            }
        ],
        enumerable: true
    },
    Portugal: {
        value: [
            {
                name: "EPL",
                address: "Rua do Visconde de São João da Madeira",
                url: "https://epl-si.com/",
                coordinates: { lat: 40.89117306344268, lng: -8.487444630419958 },
                logo: 'epl_logo.png',
                robots: ['UR']
            }
        ],
        enumerable: true
    },
    Norway: {
        value: [
            {
                name: "Imperietek AS",
                address: "Kvartsvegen 32, 4104, Jorpeland, Rogaland",
                url: "https://www.imperietek.no/",
                coordinates: { lat: 59.03266143311496, lng: 6.043322327779752 },
                logo: 'impertek.png',
                robots: ['UR']
            }
        ],
        enumerable: true
    },
    Denmark: {
        value: [
            {
                name: "Technicon",
                address: "Slagelse, Sjællandsvej 19",
                url: "https://technicon.dk/",
                coordinates: { lat: 55.39700829983938, lng: 11.345022541154226 },
                logo: 'technicon.jpg',
                robots: ['UR']
            }
        ],
        enumerable: true
    },
    Italy: {
        value: [
            {
                name: "PSTSRL",
                address: "Str. Del Portone 131/A, Torino, Italy",
                url: "https://pstsrl.eu/",
                logo: 'pst.jpg',
                coordinates: { lat: 45.04602884672316, lng: 7.587178283178785 },
                robots: ['UR']
            }
        ],
        enumerable: true
    },
    Belarus: {
        value: [
            {
                name: "PNS",
                address: "Cnyanka, Dzerzhinskogo st., b. 75",
                url: "https://www.pns.by/",
                coordinates: { lat: 53.981053474288736, lng: 27.530173367961115 },
                robots: ['UR']
            }
        ],
        enumerable: true
    },
    Lithuania: {
        value: [
            {
                name: "Techvitas",
                address: "Naujoji Riovonių g. 25B, LT-03153 Vilnius",
                coordinates: {lat:54.65176379144168, lng: 25.225296142047103},
                robots: ['UR'],
                url: 'https://www.techvitas.com/',
                logo: 'techvitas.png'
            }
        ]
    },
    Turkey: {
        value: [
            {
                name: "Kenttur",
                address: "Şerifali Mh. Hattat Sok. No: 34 Ümraniye - İstanbul, 34775",
                url: "http://www.kenttur.com",
                logo: '',
                robots: ['UR'],
                coordinates: {lat: 41.001774442619585, lng: 29.15345515794667}
            }
        ],
        enumerable: true
    }
})