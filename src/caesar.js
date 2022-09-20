// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        // create an if statement checking for no shift, shift greater than 25, and shift less than -25
        if (!shift || shift > 25 || shift < -25) {
            //if all statements are true return false
            return false
        }
        //create a second if statement checking if encode is not present; if true create an object with shift *= -1
        if (!encode) { shift *= -1 }
        //return input to lower case; then split and map the input
        return input.toLowerCase().split('').map((letter) => {
            //if the letter charCodeAt is less than 97; return letter
            if (letter.charCodeAt(0) < 97) return letter
                // create a variable that adds letter.charCodeAt(0) to parseInt(shift)
            let num = letter.charCodeAt(0) + parseInt(shift)
                //create if statement that checks if num is less than 122
            if (num > 122) {
                //set num to equal 96 plus (num - 122)
                num = 96 + (num - 122)
                    // else if num is less than 97
            } else if (num < 97) {
                //set num to plus/equal 26
                num += 26
            }
            //return String.fromCharCode(num)
            return String.fromCharCode(num)
        }).join('');
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };