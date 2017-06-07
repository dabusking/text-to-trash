function emojiConverter() {
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
    "SPACE": ["0000", "0000", "0000", "0000", "0000"],
    "1": ["0100", "1100", "0100", "0100", "1110"],
    "2": ["1110", "0010", "1110", "1000", "1110"],
    "3": ["1110", "0010", "0110", "0010", "1110"],
    "4": ["1010", "1010", "1110", "0010", "0010"],
    "5": ["1110", "1000", "1110", "0010", "1110"],
    "6": ["1110", "1000", "1110", "1010", "1110"],
    "7": ["1110", "0010", "0010", "0010", "0010"],
    "8": ["1110", "1010", "1110", "1010", "1110"],
    "9": ["1110", "1010", "1110", "0010", "1110"],
    "0": ["1110", "1010", "1010", "1010", "1110"]
  };

  var string = document.getElementById("message").value;
  var background = document.getElementById("background").value;
  var foreground = document.getElementById("foreground").value;

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

       finalString = finalString + "\n";
       document.getElementById('result').value = finalString;
  }

  console.log(finalString);
}


//This function validates the message content with regex so it only takes in A-Z, a-z, and 0-9
function validateMessage(value, message){
  var isValid = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9]*$/.test(value);

  if(isValid){
    document.getElementById("errorMessage").style.display = "none";
  }else {
    document.getElementById("errorMessage").style.display = "inline";
  }

  return isValid;
}


//This function coppies the text from the results window to the user's clipboard for ease of use
function copyToClipBoard()
  {
    var copyResultsBtn = document.getElementById('copyResultsBtn');
    copyResultsBtn.addEventListener('click', function(event) {

    var results = document.getElementById('result');
    var range = document.createRange();

    range.selectNode(results);
    window.getSelection().addRange(range);

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy results command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }

    window.getSelection().removeAllRanges();
    });
  }
