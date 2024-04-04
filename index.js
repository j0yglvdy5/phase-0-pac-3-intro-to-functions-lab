function shout(string) {
    return string.toUpperCase();
  }
  "Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase('hello!');
}
'hello!'.toLowerCase();

function logShout(string) {
    const spy = 'HELLO'
    console.log (('HELLO'));
}

function logWhisper(string) {
    const spy = 'hello'
    console.log (('hello'));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase())
     return "I can't hear you!";

    if (string === string.toUpperCase())
     return "YES INDEED!";

    if (string === "Let's have dinner together!")
    return "I would love to!";
}