/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    // if(s.length <= 1){
    //     return s.length;
    // }

    // function Counter(str){
    //     const counter = new Map();
    //     for(let char of str){
    //         counter.set(char, (counter.get(char) || 0) + 1)
    //     }
    //     return counter;
    // }
    // const s_counter = Counter(s);
    // let longest_plaindrom_len = 0;
    // let is_odd_count = false;

    // for(let count of s_counter.values()){
    //     if(count % 2 == 0){
    //         longest_plaindrom_len += count;
    //     } else {
    //         is_odd_count = true;
    //         longest_plaindrom_len += count - 1;
    //     }
    // }
    // // Add one odd character to the center
    // return is_odd_count? longest_plaindrom_len += 1 : longest_plaindrom_len;

    if(s.length <= 1){
        return s.length;
    }
    let seen = new Set();
    let longest_plaindrom_len = 0;

    for(let char of s){
        if(seen.has(char)){
            longest_plaindrom_len +=2;
            seen.delete(char);
        } else {
            seen.add(char);
        }
    }
    return seen.size > 0 ? longest_plaindrom_len + 1 : longest_plaindrom_len;
};
