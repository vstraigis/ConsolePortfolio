//Heavily inspired by: ForrestKnight

banner = [
  '<span class="index">Valentinas Straigis. My rights neither reserved neither deserved.</span>',
  "   __      __        _____ _             _       _        ",
  "   \\ \\    / /       / ____| |           (_)     (_)       ",
  "    \\ \\  / /       | (___ | |_ _ __ __ _ _  __ _ _ ___    ",
  "     \\ \\/ /         \\___ \\| __| '__/ _` | |/ _` | / __| ",
  "      \\  /     _    ____) | |_| | | (_| | | (_| | \\__ \\   ",
  "       \\/     (_)   |_____/\\__|_|  \\__,_|_|\\__, |_|___/   ",
  "                                            __/ |         ",
  "                                           |___/          ",
  "                                                            ",
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
  "<span class=\"color2\">And good luck finding some hidden ones:)</span>",
  "</br>",
];

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

const command1 = document.getElementById("command")
let c = 0

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);


window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("guest@straigis.com:~$ " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";

  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}


function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "sudo":
      loopLines(su, "color2 margin", 80);
      break;
    case "su":
      loopLines(su, "color2 margin", 80);
      break;
    case "passwd":
      loopLines(su, "color2 margin", 80);
      break;
    case "passwd root":
      loopLines(su, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:straigiz@gmail.com">straigiz@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "linkedin":
      addLine("Oops, not there yet...", "color2", 0);
      //newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "rick":
      addLine("Gotcha...", "color2", 0);
      newTab(rick);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");

    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    command1.scrollIntoView({ behavior: "smooth", block: "end" });
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
cursor = $("cursor");
cursor.style.left = "0px";
}

function nl2br(txt) {
return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
e = e || window.event;
var w = $("typer");
var tw = from.value;
w.innerHTML = nl2br(tw);
}

function moveIt(count, e) {
e = e || window.event;
var keycode = e.keyCode || e.which;
if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
  cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
  cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
}
}

function alert(txt) {
console.log(txt);
}
