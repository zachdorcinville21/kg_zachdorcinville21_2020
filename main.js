const args = process.argv.slice(2);

var s1 = args[0];
var s2 = args[1];


function one_to_one(s1, s2) {
    var str1_len = s1.length;
    var str2_len = s2.length;

    if (str1_len !== str2_len) {
        return false;
    }

    var char_map = {};

    for (let i = 0; i < str1_len; ++i) {
        if (!char_map[s1[i]]) {
            char_map[s1[i]] = s2[i];
        } else if (char_map[s1[i]] !== s2[i]) {
            return false;
        }
    }
    return true;
}


console.log(one_to_one(s1, s2));