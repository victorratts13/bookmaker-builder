import client from "./api/api.js";
import ObjectFilter from "./controller/ObjectFilter.js";
import SetGamesInPlay from "./controller/SetGamesInPlay.js";
import Core from "./core/core.js";
import General from "./utils/General.js";

const core = new Core();
class BookMaker {
    constructor(config = {
        provider: 'sportradar',
        lang: 'en',
        server: 'America:Montevideo',
        index: '/41/0'
    }) {
        this.config = config;
    }

    async Sports() {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/config_sports/${this.config.index}`);
        var patern = core.OpenPatern(status, 'sports', data);
        var a = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            for (var dt of doc.data) {
                dt = ObjectFilter(dt);
                a.push(dt);
            }
            doc.data = a;
            patern.data.result = doc;
        }
        return patern;
    }

    async CountryBySport(SportId = 1) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/config_tree_mini/${this.config.index}/${SportId}`);
        var patern = core.OpenPatern(status, 'Country', data);
        var a = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            for (var dt of doc.data) {
                dt = ObjectFilter(dt);
                for (var category of dt.realcategories) {
                    category = ObjectFilter(category);
                    if (category.cc) {
                        category.cc = ObjectFilter(category.cc);
                    }
                    a.push(category);
                }
            }
            doc.data = a;
            patern.data.result = doc;
        }
        return patern;
    }

    async TournamentByCountry(SportId = 1, CountryId = 13) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/config_tree_mini/${this.config.index}/${SportId}/${CountryId}`);
        var patern = core.OpenPatern(status, 'Seasons', data);
        var a = [], t = [], p = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            for (var dt of doc.data) {
                dt = ObjectFilter(dt);
                for (var category of dt.realcategories) {
                    category = ObjectFilter(category);
                    var unique = Object.keys(category.uniquetournaments);

                    if (category.cc) {
                        category.cc = ObjectFilter(category.cc);
                    }

                    for (var tournament of category.tournaments) {
                        tournament = ObjectFilter(tournament);
                        t.push(tournament);
                    }

                    for (var uq of unique) {
                        category.uniquetournaments[uq] = ObjectFilter(category.uniquetournaments[uq])
                    }

                    category.tournaments = t;
                    a.push(category);
                }
            }

            doc.data = a[0];
            patern.data.result = doc;
        }
        return patern;
    }

    async TournamentInfo(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_meta/${seasonId}`);
        var patern = core.OpenPatern(status, 'SeasonInfo', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                doc.data[skey] = ObjectFilter(doc.data[skey]);
                var under = Object.keys(doc.data[skey]);
                for (var ud of under) {
                    if (typeof doc.data[skey][ud] == 'object') {
                        doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonTable(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_formtable/${seasonId}`);
        var patern = core.OpenPatern(status, 'SeasonTable', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                doc.data[skey] = ObjectFilter(doc.data[skey]);
                var under = Object.keys(doc.data[skey]);
                for (var ud of under) {
                    if (typeof doc.data[skey][ud] == 'object') {
                        doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonStats(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_goals/${seasonId}/main`);
        var patern = core.OpenPatern(status, 'SeasonStats', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                doc.data[skey] = ObjectFilter(doc.data[skey]);
                var under = Object.keys(doc.data[skey]);
                for (var ud of under) {
                    if (typeof doc.data[skey][ud] == 'object') {
                        doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonPosition(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_tables/${seasonId}`);
        var patern = core.OpenPatern(status, 'SeasonPosition', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (typeof doc.data[skey] == 'object') {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SumarySeason(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_leaguesummary/${seasonId}/main`);
        var patern = core.OpenPatern(status, 'SumarySeason', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (typeof doc.data[skey] == 'object') {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonTeams(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_uniqueteamstats/${seasonId}`);
        var patern = core.OpenPatern(status, 'SeasonTeams', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (typeof doc.data[skey] == 'object') {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonTeamStats(seasonId = 90975) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_uniqueteamstats/${seasonId}`);
        var patern = core.OpenPatern(status, 'TeamsStats', data);
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (typeof doc.data[skey] == 'object') {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                            if (ud == 'uniqueteams') {
                                var arr = [];
                                var teams = Object.keys(doc.data[skey][ud]);
                                for (var tm of teams) {
                                    if (typeof doc.data[skey][ud][tm] == 'object') {
                                        doc.data[skey][ud][tm].uniqueteam = ObjectFilter(doc.data[skey][ud][tm].uniqueteam)
                                        arr.push(doc.data[skey][ud][tm])
                                    }
                                }
                                doc.data[skey][ud] = arr;
                            }
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonGameHistory(seasonId = 90975, qnt = 10) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_lastx/${seasonId}/${qnt}`);
        var patern = core.OpenPatern(status, 'SumarySeason', data);
        var arr = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonNextGames(seasonId = 90975, qnt = 10) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_nextx/${seasonId}/${qnt}`);
        var patern = core.OpenPatern(status, 'SumarySeason', data);
        var arr = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async SeasonMatchs(SeasonId = 0) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_fixtures2/${SeasonId}`);
        var patern = core.OpenPatern(status, 'SumaryMatches', data);
        var arr = [];
        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }
        return patern;
    }

    async liveGames(SeasonId = 0) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_season_fixtures2/${SeasonId}`);
        var patern = core.OpenPatern(status, 'liveGames', data);
        var arr = [];

        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (skey == 'matches') {
                    doc.data[skey] = SetGamesInPlay(doc.data[skey]);
                }
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }

        return patern;
    }

    async eventMatch(eventId = 0) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_match_get/${eventId}`);
        var patern = core.OpenPatern(status, 'EventMatch', data);
        var arr = [];

        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (skey == 'matches') {
                    doc.data[skey] = SetGamesInPlay(doc.data[skey]);
                }
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {

                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = (doc.data[skey] !== null ? Object.keys(doc.data[skey]) : []);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }

        return patern;
    }

    async positionOdds(awayUid = 0, homeUid = 0, eventId = 0) {
        var { data, status } = await client.get(`${this.config.provider}/${this.config.lang}/${this.config.server}/gismo/stats_h2h_versus/${awayUid}/${homeUid}/${eventId}`);
        var patern = core.OpenPatern(status, 'PositionOdds', data);
        var arr = [];

        for (var doc of data.doc) {
            doc = ObjectFilter(doc);
            doc.data = ObjectFilter(doc.data);
            var seasonKeys = Object.keys(doc.data);
            for (var skey of seasonKeys) {
                if (skey == 'matches') {
                    doc.data[skey] = SetGamesInPlay(doc.data[skey]);
                }
                if (Array.isArray(doc.data[skey])) {
                    for (var obj of doc.data[skey]) {
                        var arKeys = Object.keys(obj);
                        for (var ar of arKeys) {
                            if (typeof obj[ar] == 'object' && Array.isArray(obj[ar]) !== true && obj[ar] !== null) {
                                obj[ar] = ObjectFilter(obj[ar]);
                            }
                        }
                        arr.push(ObjectFilter(obj));
                    }
                    doc.data[skey] = arr;
                }
                if (typeof doc.data[skey] == 'object' && Array.isArray(doc.data[skey]) !== true) {
                    doc.data[skey] = ObjectFilter(doc.data[skey]);
                    var under = Object.keys(doc.data[skey]);
                    for (var ud of under) {
                        if (typeof doc.data[skey][ud] == 'object') {
                            doc.data[skey][ud] = ObjectFilter(doc.data[skey][ud]);
                        }
                    }
                }
            }
            patern.data.result = doc;
        }

        return patern;
    }

    MktOpt(lg = this.config.lang) {
        var patern = core.OpenPatern('200', 'MarketOptions', {});
        patern.data.result = General.markets[lg];
        return patern;
    }

    OddBuilder(MarketTitle = '', MarketOpt = [
        {
            name: '',
            numberOfBets: 0,
            bets: []
        }
    ]){
        var patern = core.OpenPatern('200', 'OddBuilder', {});
        var builder = General.OddMaker(MarketOpt);
        patern.data.result = {};
        patern.data.result.title = MarketTitle;
        patern.data.result.data = builder;
        return patern;
    }

}

export default BookMaker;