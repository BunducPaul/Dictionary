let dictionary = [];

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function notifyAndclear(where_To_notify, what_To_notify, where_To_delete) {
  setTimeout(function () {
    document.getElementById(where_To_notify).innerHTML = what_To_notify;
  }, 500);

  setTimeout(function () {
    document.getElementById(where_To_notify).innerHTML = "";
    document.getElementById(where_To_delete).value = "";
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
    dictionary.push(newWord);
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
    if (dictionary.indexOf(word) >= 0) {
      notifyAndclear("searchWord", "this word is in the dictionary", "search");
    } else {
      notifyAndclear("searchWord", "this word is not in the dictionary", "search");
    }
  }
}
