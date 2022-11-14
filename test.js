import BookMaker from "./index.js";

const book = new BookMaker({
    provider: 'sportradar',
    lang: 'pt',
    server: 'America:Montevideo',
    index: '/41/0'
});

(async () => {
    // get Sports
    var sports = await book.Sports();
    // get Country
    var country = await book.CountryBySport(1);
    // get Tournaments
    var tournament = await book.TournamentByCountry(1, 13);
    // get Tournament Info
    var season = await book.TournamentInfo(90975);
    // get Season table
    var table = await book.SeasonTable(90975);
    // get Season Teams Position
    var position = await book.SeasonPosition(90975);
    // sumary Season
    var sumary = await book.SumarySeason(90975);
    // get Season Teams by Season
    var teams = await book.SeasonTeams(90975);
    // get Teams by Season League
    var SeasonTeam = await book.SeasonTeamStats(90975)
    // game History
    var lastGames = await book.SeasonGameHistory(90975, 2);
    // Next games
    var nextGames = await book.SeasonNextGames(90975, 2);
    // Matchs List
    var Matchs = await book.SeasonMatchs(90975);
    // liveGames
    var live = await book.liveGames(95967);
    // get Event Match
    var liveMatch = await book.eventMatch(34169879);
    // get Event Overcast
    var EvoverCast = await book.positionOdds(2541, 2573, 34169879)
    // market Options
    var Mkt = book.MktOpt();
    // Odd Builder
    var MarkInfo = [
        {
            name: 'home',
            numberOfBets: 15,
            bets: [12.40, 23.50, 9.75, 6.05, 9, 19, 30, 33.76, 9.80, 44.87, 23.30, 32.90, 66.90, 1.50, 2.20]
        },
        {
            name: 'draw',
            numberOfBets: 21,
            bets: [20.80, 22.50, 19.40, 63.05, 10, 2, 2.90, 35.10, 19.89, 70.77, 22.15, 10.90, 12.50, 11.5, 3.50, 7.80, 92.1, 100, 4.50, 5.85, 12.10]
        },
        {
            name: 'away',
            numberOfBets: 9,
            bets: [2.90, 72.10, 3.20, 4.40, 12.80, 24.40, 50.5, 10, 15, 40]
        }
    ];
    var odds = book.OddBuilder('Resultado final', MarkInfo);
    console.log(JSON.stringify(odds));
})();