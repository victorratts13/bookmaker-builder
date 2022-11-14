// aHR0cHM6Ly9zdGF0cy5mbi5zcG9ydHJhZGFyLmNvbS8=

class Core {
    OpenHeaders() {
        return {
            "accept": "*/*",
            // "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "pt-BR,pt;q=0.9",
            "cache-control": "max-age=0",
            // "cookie": "truendo_cc=%7B%22ack%22%3Atrue%2C%22version%22%3A2%2C%22user_id%22%3A%228ea89e33-e924-25c9-5938-ecdadff64aae%22%2C%22websiteid%22%3A%22c99b7f14-ddf6-4d67-aaa6-f157d9dbb251%22%2C%22prodirversion%22%3A71%2C%22panellanguage%22%3A%22en%22%2C%22preferences%22%3Afalse%2C%22marketing%22%3Atrue%2C%22necessary%22%3Atrue%2C%22statistics%22%3Atrue%2C%22social_content%22%3Atrue%2C%22social_sharing%22%3Atrue%2C%22add_features%22%3Afalse%2C%22exp%22%3A%222023-10-10T05%3A07%3A16.920Z%22%2C%22svc%22%3A%22H4sIAAAAAAAAAy3LuQ3AMAwEwV4YOxB%2F2q0J6l0G7qIJFrtFbeTTR9QLRsJecKBbUPSoRYsOfSG%2F5JdlsPv3XKv2GGt5AAAA%22%7D",
            // "if-modified-since": "Thu, 03 Nov 2022 14:20:39 GMT",
            // "if-none-match": 'W/"31dff4f3a3581b5b2cbbf627e426c5d708ffc8a1"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        }
    }

    OpenPatern(status = 200, info = '', data = {}){
        return {
            status: (status == 200 ? 'success' : 'Error'),
            data: {
                info: info,
                result: []
            }
        }
    }
}

export default Core;