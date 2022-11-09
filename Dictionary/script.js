let list = [];

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function notifyAndclear(where, what, whertodelete) {
  setTimeout(function () {
    document.getElementById(where).innerHTML = what;
  }, 500);

  setTimeout(function () {
    document.getElementById(where).innerHTML = "";
    document.getElementById(whertodelete).value = "";
  }, 2000);
}

function addWords() {
  let newWord = document.getElementById("word").value;
  if (newWord == "") {
    notifyAndclear("mesajAdd", "empty", "word");
    return;
  } else if (onlyLetters(newWord) == false) {
    notifyAndclear("mesajAdd", "only Letters", "word");
    return;
  } else {
    list.push(newWord);
    notifyAndclear("mesajAdd", "the word was added successfully", "word");
  }
}

function searchWord() {
  let word = document.getElementById("search").value;
  if (word == "") {
    notifyAndclear("searchWord", "empty", "search");
    return;
  } else if (onlyLetters(word) == false) {
    notifyAndclear("searchWord", "only Letters", "search");
    return;
  } else {
    if (list.indexOf(word) >= 0) {
      notifyAndclear("searchWord", "this word is in the dictionary", "search");
    } else {
      notifyAndclear("searchWord", "this word is not in the dictionary", "search");
    }
  }
}
