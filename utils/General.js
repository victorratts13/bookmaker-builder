export default {
    checkOffset: function (timestamp = 0, TimeOffset = '') {
        if (TimeOffset.includes('-')) {
            TimeOffset = TimeOffset.replace('-', '');
            var timer = timestamp - TimeOffset;
        } else {
            var timer = timestamp + TimeOffset;
        }

        return timer;
    },

    calcMin: function (timestamp = 0, reference = 0) {
        return parseInt((timestamp - reference) / 60);
    },

    markets: {
        pt: [
            {
                id: 1,
                name: 'resultado final',
                description: 'Resultado final entre o time da casa e o time visitante.',
                options: ['casa', 'empate', 'visitante']
            },
            {
                id: 2,
                name: 'dupla chance',
                description: 'Resultado entre 2 possibilidade.',
                options: ['casa-visitante', 'empate-casa', 'empate-visitante']
            },
            {
                id: 3,
                name: 'Para ganhar o trofel',
                description: 'Resultado para Finais de ligas, torneios e competições.',
                options: ['casa', 'visitante']
            },
            {
                id: 4,
                name: '1º Gol',
                description: 'Time a marcar o primeiro Gol da partida',
                options: ['casa', 'visitante']
            },
            {
                id: 5,
                name: 'Gols',
                description: 'Time a marcar o maior numero de Gols da partida',
                options: ['casa', 'visitante']
            },
            {
                id: 6,
                name: 'Gols - mais opções',
                description: 'Numero de Gols da partida.',
                options: ['mais de', 'menos de']
            },
            {
                id: 7,
                name: 'encontro - escanteios',
                description: 'Encontros em cantos / escanteios',
                options: ['mais de', 'exatamente', 'menos de']
            },
            {
                id: 8,
                name: 'Handcap',
                description: 'Calcula a desvantagem entre dois times.',
                options: ['casa', 'visitante']
            },
            {
                id: 9,
                name: 'Handcap Asiatico',
                description: 'Calcula o equilibrio entre 2 times.',
                options: ['casa', 'visitante']
            },
            {
                id: 10,
                name: 'Resultado Correto',
                description: 'Resultado final correto (em numero de Gols)',
                options: ['casa', 'visitante']
            },
            {
                id: 11,
                name: 'Escanteios asiaticos',
                description: 'Numero de escanteios baseado no Handcap de cada time.',
                options: ['casa', 'visitante']
            },
            {
                id: 12,
                name: 'Primeiro a cobrar',
                description: 'Primeiro time a cobrar um Escanteio',
                options: ['casa', 'visitante']
            },
            {
                id: 13,
                name: 'Escanteio',
                description: 'Numero de escanteios de cada time',
                options: ['casa', 'visitante']
            },
            {
                id: 14,
                name: 'Empate anula aposta',
                description: 'Caso haja empate, O resultado será de:',
                options: ['casa', 'visitante']
            },
            {
                id: 15,
                name: '1º Gol (primeiro tempo)',
                description: 'Primeiro gol do Primeiro tempo',
                options: ['casa', 'visitante']
            },
            {
                id: 16,
                name: 'Ultimo a marcar',
                description: 'Ultimo time a marcar um gol',
                options: ['casa', 'visitante']
            },
            {
                id: 17,
                name: 'Ímpar/Par Gols',
                description: 'Numero de gols em Impar ou par',
                options: ['casa', 'visitante']
            },
            {
                id: 18,
                name: '1º Gol (segundo tempo)',
                description: 'Primeiro gol do segundo tempo.',
                options: ['casa', 'visitante']
            }
        ],
        en: [
            {
                "id": 1,
                "name": "final result",
                "description": "Final result between the home team and the visiting team.",
                "options": [
                    "home", "away", "draw"
                ]
            },
            {
                "id": 2,
                "name": "double chance",
                "description": "Result between 2 possibility.",
                "options": [
                    "home-away",
                    "draw-home",
                    "draw-away"
                ]
            },
            {
                "id": 3,
                "name": "Para ganhar o trofél",
                "description": "To win the trophy",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 4,
                "name": "1st Goal",
                "description": "Team to score the first goal of the match",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 5,
                "name": "Goals",
                "description": "Team to score the most goals in the match",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 6,
                "name": "Goals Total",
                "description": "Number of goals in the match.",
                "options": [
                    "Over",
                    "under"
                ]
            },
            {
                "id": 7,
                "name": "meeting - corners",
                "description": "Encounters in corners",
                "options": [
                    "over",
                    "Exactly",
                    "under"
                ]
            },
            {
                "id": 8,
                "name": "Handicap",
                "description": "Calculates the handicap between two teams.",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 9,
                "name": "Asian Handicap",
                "description": "Calculates the balance between 2 teams.",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 10,
                "name": "Correct Result",
                "description": "Correct final result (in number of goals)",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 11,
                "name": "asian corners",
                "description": "Number of corners based on each team's Handicap.",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 12,
                "name": "first to collect",
                "description": "First team to take a corner kick",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 13,
                "name": "Corner kick",
                "description": "Number of corners by each team",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 14,
                "name": "draw cancels bet",
                "description": "If there is a draw, the result will be:",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 15,
                "name": "1st Goal (first half)",
                "description": "First goal of the first half",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 16,
                "name": "Ultimo a marcar",
                "description": "last to score",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 17,
                "name": "Odd/Even Goals",
                "description": "Number of goals in odd or even",
                "options": [
                    "home",
                    "away"
                ]
            },
            {
                "id": 18,
                "name": "1st Goal (second half)",
                "description": "First goal of the second half.",
                "options": [
                    "home",
                    "away"
                ]
            }
        ]
    },

    calcTotal: function (arr = []) {
        return arr.reduce((arr, i) => {
            return arr + i;
        });
    },

    OddMaker: function (args = [], descimalNumber = 2) {
        var sorted = args.map(lp => {
            return this.calcTotal(lp.bets);
        })

        var featured = this.calcTotal(sorted);

        var all = args.map(mp => {
            var total = this.calcTotal(mp.bets);
            var odd = (featured / total).toFixed(descimalNumber);
            return {
                name: mp.name,
                odd: odd
            };
        })

        return all;
    },

    timezones: [
        "Africa/Abidjan",
        "Africa/Accra",
        "Africa/Algiers",
        "Africa/Bissau",
        "Africa/Cairo",
        "Africa/Casablanca",
        "Africa/Ceuta",
        "Africa/El_Aaiun",
        "Africa/Johannesburg",
        "Africa/Juba",
        "Africa/Khartoum",
        "Africa/Lagos",
        "Africa/Maputo",
        "Africa/Monrovia",
        "Africa/Nairobi",
        "Africa/Ndjamena",
        "Africa/Sao_Tome",
        "Africa/Tripoli",
        "Africa/Tunis",
        "Africa/Windhoek",
        "America/Adak",
        "America/Anchorage",
        "America/Araguaina",
        "America/Argentina/Buenos_Aires",
        "America/Argentina/Catamarca",
        "America/Argentina/Cordoba",
        "America/Argentina/Jujuy",
        "America/Argentina/La_Rioja",
        "America/Argentina/Mendoza",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Salta",
        "America/Argentina/San_Juan",
        "America/Argentina/San_Luis",
        "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia",
        "America/Asuncion",
        "America/Atikokan",
        "America/Bahia",
        "America/Bahia_Banderas",
        "America/Barbados",
        "America/Belem",
        "America/Belize",
        "America/Blanc-Sablon",
        "America/Boa_Vista",
        "America/Bogota",
        "America/Boise",
        "America/Cambridge_Bay",
        "America/Campo_Grande",
        "America/Cancun",
        "America/Caracas",
        "America/Cayenne",
        "America/Chicago",
        "America/Chihuahua",
        "America/Costa_Rica",
        "America/Creston",
        "America/Cuiaba",
        "America/Curacao",
        "America/Danmarkshavn",
        "America/Dawson",
        "America/Dawson_Creek",
        "America/Denver",
        "America/Detroit",
        "America/Edmonton",
        "America/Eirunepe",
        "America/El_Salvador",
        "America/Fort_Nelson",
        "America/Fortaleza",
        "America/Glace_Bay",
        "America/Goose_Bay",
        "America/Grand_Turk",
        "America/Guatemala",
        "America/Guayaquil",
        "America/Guyana",
        "America/Halifax",
        "America/Havana",
        "America/Hermosillo",
        "America/Indiana/Indianapolis",
        "America/Indiana/Knox",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Tell_City",
        "America/Indiana/Vevay",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Inuvik",
        "America/Iqaluit",
        "America/Jamaica",
        "America/Juneau",
        "America/Kentucky/Louisville",
        "America/Kentucky/Monticello",
        "America/La_Paz",
        "America/Lima",
        "America/Los_Angeles",
        "America/Maceio",
        "America/Managua",
        "America/Manaus",
        "America/Martinique",
        "America/Matamoros",
        "America/Mazatlan",
        "America/Menominee",
        "America/Merida",
        "America/Metlakatla",
        "America/Mexico_City",
        "America/Miquelon",
        "America/Moncton",
        "America/Monterrey",
        "America/Montevideo",
        "America/Nassau",
        "America/New_York",
        "America/Nipigon",
        "America/Nome",
        "America/Noronha",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/Nuuk",
        "America/Ojinaga",
        "America/Panama",
        "America/Pangnirtung",
        "America/Paramaribo",
        "America/Phoenix",
        "America/Port-au-Prince",
        "America/Port_of_Spain",
        "America/Porto_Velho",
        "America/Puerto_Rico",
        "America/Punta_Arenas",
        "America/Rainy_River",
        "America/Rankin_Inlet",
        "America/Recife",
        "America/Regina",
        "America/Resolute",
        "America/Rio_Branco",
        "America/Santarem",
        "America/Santiago",
        "America/Santo_Domingo",
        "America/Sao_Paulo",
        "America/Scoresbysund",
        "America/Sitka",
        "America/St_Johns",
        "America/Swift_Current",
        "America/Tegucigalpa",
        "America/Thule",
        "America/Thunder_Bay",
        "America/Tijuana",
        "America/Toronto",
        "America/Vancouver",
        "America/Whitehorse",
        "America/Winnipeg",
        "America/Yakutat",
        "America/Yellowknife",
        "Antarctica/Casey",
        "Antarctica/Davis",
        "Antarctica/DumontDUrville",
        "Antarctica/Macquarie",
        "Antarctica/Mawson",
        "Antarctica/Palmer",
        "Antarctica/Rothera",
        "Antarctica/Syowa",
        "Antarctica/Troll",
        "Antarctica/Vostok",
        "Asia/Almaty",
        "Asia/Amman",
        "Asia/Anadyr",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Atyrau",
        "Asia/Baghdad",
        "Asia/Baku",
        "Asia/Bangkok",
        "Asia/Barnaul",
        "Asia/Beirut",
        "Asia/Bishkek",
        "Asia/Brunei",
        "Asia/Chita",
        "Asia/Choibalsan",
        "Asia/Colombo",
        "Asia/Damascus",
        "Asia/Dhaka",
        "Asia/Dili",
        "Asia/Dubai",
        "Asia/Dushanbe",
        "Asia/Famagusta",
        "Asia/Gaza",
        "Asia/Hebron",
        "Asia/Ho_Chi_Minh",
        "Asia/Hong_Kong",
        "Asia/Hovd",
        "Asia/Irkutsk",
        "Asia/Jakarta",
        "Asia/Jayapura",
        "Asia/Jerusalem",
        "Asia/Kabul",
        "Asia/Kamchatka",
        "Asia/Karachi",
        "Asia/Kathmandu",
        "Asia/Khandyga",
        "Asia/Kolkata",
        "Asia/Krasnoyarsk",
        "Asia/Kuala_Lumpur",
        "Asia/Kuching",
        "Asia/Macau",
        "Asia/Magadan",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Nicosia",
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk",
        "Asia/Oral",
        "Asia/Pontianak",
        "Asia/Pyongyang",
        "Asia/Qatar",
        "Asia/Qostanay",
        "Asia/Qyzylorda",
        "Asia/Riyadh",
        "Asia/Sakhalin",
        "Asia/Samarkand",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Singapore",
        "Asia/Srednekolymsk",
        "Asia/Taipei",
        "Asia/Tashkent",
        "Asia/Tbilisi",
        "Asia/Tehran",
        "Asia/Thimphu",
        "Asia/Tokyo",
        "Asia/Tomsk",
        "Asia/Ulaanbaatar",
        "Asia/Urumqi",
        "Asia/Ust-Nera",
        "Asia/Vladivostok",
        "Asia/Yakutsk",
        "Asia/Yangon",
        "Asia/Yekaterinburg",
        "Asia/Yerevan",
        "Atlantic/Azores",
        "Atlantic/Bermuda",
        "Atlantic/Canary",
        "Atlantic/Cape_Verde",
        "Atlantic/Faroe",
        "Atlantic/Madeira",
        "Atlantic/Reykjavik",
        "Atlantic/South_Georgia",
        "Atlantic/Stanley",
        "Australia/Adelaide",
        "Australia/Brisbane",
        "Australia/Broken_Hill",
        "Australia/Darwin",
        "Australia/Eucla",
        "Australia/Hobart",
        "Australia/Lindeman",
        "Australia/Lord_Howe",
        "Australia/Melbourne",
        "Australia/Perth",
        "Australia/Sydney",
        "CET",
        "CST6CDT",
        "EET",
        "EST",
        "EST5EDT",
        "Etc/GMT",
        "Etc/GMT+1",
        "Etc/GMT+10",
        "Etc/GMT+11",
        "Etc/GMT+12",
        "Etc/GMT+2",
        "Etc/GMT+3",
        "Etc/GMT+4",
        "Etc/GMT+5",
        "Etc/GMT+6",
        "Etc/GMT+7",
        "Etc/GMT+8",
        "Etc/GMT+9",
        "Etc/GMT-1",
        "Etc/GMT-10",
        "Etc/GMT-11",
        "Etc/GMT-12",
        "Etc/GMT-13",
        "Etc/GMT-14",
        "Etc/GMT-2",
        "Etc/GMT-3",
        "Etc/GMT-4",
        "Etc/GMT-5",
        "Etc/GMT-6",
        "Etc/GMT-7",
        "Etc/GMT-8",
        "Etc/GMT-9",
        "Etc/UTC",
        "Europe/Amsterdam",
        "Europe/Andorra",
        "Europe/Astrakhan",
        "Europe/Athens",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Brussels",
        "Europe/Bucharest",
        "Europe/Budapest",
        "Europe/Chisinau",
        "Europe/Copenhagen",
        "Europe/Dublin",
        "Europe/Gibraltar",
        "Europe/Helsinki",
        "Europe/Istanbul",
        "Europe/Kaliningrad",
        "Europe/Kiev",
        "Europe/Kirov",
        "Europe/Lisbon",
        "Europe/London",
        "Europe/Luxembourg",
        "Europe/Madrid",
        "Europe/Malta",
        "Europe/Minsk",
        "Europe/Monaco",
        "Europe/Moscow",
        "Europe/Oslo",
        "Europe/Paris",
        "Europe/Prague",
        "Europe/Riga",
        "Europe/Rome",
        "Europe/Samara",
        "Europe/Saratov",
        "Europe/Simferopol",
        "Europe/Sofia",
        "Europe/Stockholm",
        "Europe/Tallinn",
        "Europe/Tirane",
        "Europe/Ulyanovsk",
        "Europe/Uzhgorod",
        "Europe/Vienna",
        "Europe/Vilnius",
        "Europe/Volgograd",
        "Europe/Warsaw",
        "Europe/Zaporozhye",
        "Europe/Zurich",
        "HST",
        "Indian/Chagos",
        "Indian/Christmas",
        "Indian/Cocos",
        "Indian/Kerguelen",
        "Indian/Mahe",
        "Indian/Maldives",
        "Indian/Mauritius",
        "Indian/Reunion",
        "MET",
        "MST",
        "MST7MDT",
        "PST8PDT",
        "Pacific/Apia",
        "Pacific/Auckland",
        "Pacific/Bougainville",
        "Pacific/Chatham",
        "Pacific/Chuuk",
        "Pacific/Easter",
        "Pacific/Efate",
        "Pacific/Enderbury",
        "Pacific/Fakaofo",
        "Pacific/Fiji",
        "Pacific/Funafuti",
        "Pacific/Galapagos",
        "Pacific/Gambier",
        "Pacific/Guadalcanal",
        "Pacific/Guam",
        "Pacific/Honolulu",
        "Pacific/Kiritimati",
        "Pacific/Kosrae",
        "Pacific/Kwajalein",
        "Pacific/Majuro",
        "Pacific/Marquesas",
        "Pacific/Nauru",
        "Pacific/Niue",
        "Pacific/Norfolk",
        "Pacific/Noumea",
        "Pacific/Pago_Pago",
        "Pacific/Palau",
        "Pacific/Pitcairn",
        "Pacific/Pohnpei",
        "Pacific/Port_Moresby",
        "Pacific/Rarotonga",
        "Pacific/Tahiti",
        "Pacific/Tarawa",
        "Pacific/Tongatapu",
        "Pacific/Wake",
        "Pacific/Wallis",
        "WET"
    ]
}