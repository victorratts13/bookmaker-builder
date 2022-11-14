import General from "../utils/General.js";

export default function (matches = []) {
    var result = [];
    for (var mt of matches) {
        var time = parseInt(new Date().getTime() / 1000);
        var actual = parseInt(General.checkOffset(time, mt.time.tzoffset.toString()))
        var status = parseInt(General.checkOffset(mt.time.uts, mt.time.tzoffset.toString()));
        var ends = (status + (100 * 60 ));
        if (status <= actual && ends >= actual && mt.periods == null) {
            // console.log('atual:     ', actual)
            // console.log('status:    ', status)
            // console.log('end:       ', ends)
            // console.log('-----------------')
            // mt.time.min = General.calcMin(actual, status);
            result.push(mt);
        }
    }
    return result;
}