var lib = {
  "A": ["0100", "1010", "1110", "1010", "1010"],
  "B": ["1100", "1010", "1100", "1010", "1100"],
  "C": ["0110", "1000", "1000", "1000", "0110"],
  "D": ["1100", "1010", "1010", "1010", "1100"],
  "E": ["1110", "1000", "1100", "1000", "1110"],
  "F": ["1110", "1000", "1100", "1000", "1000"],
  "G": ["0110", "1000", "1010", "1010", "0110"],
  "H": ["1010", "1010", "1110", "1010", "1010"],
  "I": ["1110", "0100", "0100", "0100", "1110"],
  "J": ["0110", "0010", "0010", "1010", "0100"],
  "K": ["1010", "1010", "1100", "1010", "1010"],
  "L": ["1000", "1000", "1000", "1000", "1110"],
  "M": ["1010", "1110", "1110", "1010", "1010"],
  "N": ["1110", "1010", "1010", "1010", "1010"],
  "O": ["0100", "1010", "1010", "1010", "0100"],
  "P": ["1100", "1010", "1100", "1000", "1000"],
  "Q": ["0100", "1010", "1010", "0110", "0010"],
  "R": ["1100", "1010", "1100", "1010", "1010"],
  "S": ["0110", "1000", "0100", "0010", "1100"],
  "T": ["1110", "0100", "0100", "0100", "0100"],
  "U": ["1010", "1010", "1010", "1010", "1110"],
  "V": ["1010", "1010", "1010", "1010", "0100"],
  "W": ["1010", "1010", "1110", "1110", "1010"],
  "X": ["1010", "1010", "0100", "1010", "1010"],
  "Y": ["1010", "1010", "0100", "0100", "0100"],
  "Z": ["1110", "0010", "0100", "1000", "1110"],
  "SPACE": ["0000", "0000", "0000", "0000", "0000"]
};

var string = process.argv[2];

    // string = "help";

var background = process.argv[3];

var foreground = process.argv[4];


var string = string.toUpperCase();
var stringAsArr = [];
for(var i = 0, len = string.length; i < len; i++) {
  var char = string[i];

  if(char == ' '){
      stringAsArr.push(lib["SPACE"]);
  }else{
      stringAsArr.push(lib[char]);
  }


}

// console.log(stringAsArr);

var finalString = "";
var  charLineMax = 5;

for(var i = 0; i < charLineMax; i++) {

    for(var j = 0; j < stringAsArr.length; j++) {
        var currentChar = stringAsArr[j][i];

        for(var k = 0; k < currentChar.length; k++) {
            if(currentChar.charAt(k) == '0'){
                 finalString = finalString + background;
            }else{
                 finalString = finalString + foreground;
            }
        }
    }
    //letter space
    // finalString = finalString + background;

     finalString = finalString + "\n";

}

console.log(finalString);

//
// for(var i = 0; i < charLineMax; i++) {
//
//     for(var j = 0; j < stringAsArr.length; j++) {
//         var currentChar = stringAsArr[j];
//         finalString = finalString + currentChar[i];
//
//         //letter space
//         finalString = finalString + "0";
//     }
//
//      finalString = finalString + "\n";
//
// }
