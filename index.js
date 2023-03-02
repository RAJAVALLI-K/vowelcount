
//vowels

var vowelName = prompt("Enter a String:");
function vowels() {
    var count = 0, string;
    for (let i = 0; i <= vowelName.length; i++) {
        string = vowelName.charAt(i);
        if ("a" == string || "e" == string || "i" == string || "o" == string || "u" == string) {
            console.log("vowels:" + vowelName);
            console.log(string)
            // console.log("vowelCount:" + count)
            count++;
        }
    }
    return count;
}
console.log(vowels());

