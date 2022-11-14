import UnderscoreFilter from "./UnderscoreFilter.js";

export default function (obj = {}) {
    var schedule = {}
    if (obj == null) {
        return obj;
    } else {
        var keys = Object.keys(obj);
        for (var ks of keys) {
            var k = UnderscoreFilter(ks);
            schedule[k] = obj[ks];
        }

        return schedule;
    }
}