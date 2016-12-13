}catch(e){};ga('send', 'pageview');
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
<script>
$( document ).ready(function() {
$('.password-login > a').unbind("click");
/*---------- step 1 welcome msg ---------*/
setTimeout(function(){
$( ".password__title" ).append( "<p class='console' style='color: limegreen; text-transform: none; font-family: monospace !important; font-size: 20px;'>\
<span id='caption'></span><span id='cursor'>|</span></p>");
setInterval('cursorAnimation()', 600);
$caption = $('#caption');  
setTimeout('showCaptions()', 1000);
}, 2000);
});

var index = 0;
var captionLength = 0;
var captionOptions = ["Welcome to my Shopify store", "But it's password protected :(", "How about we hack it? :)", ""]
function cursorAnimation() {
$('#cursor').animate({
opacity: 0
}, 400).animate({
opacity: 1
}, 400);
}
function type() {
$caption.html(caption.substr(0, captionLength++));
if(captionLength < caption.length+1) {
setTimeout('type()', 70);
}
}
function erase() {
$caption.html(caption.substr(0, captionLength--));
if(captionLength >= 0) {
setTimeout('erase()', 50);
}
}
function showCaptions() {
caption = captionOptions[index];
type();
if (index < (captionOptions.length - 1)) {
index++
setTimeout('erase()', 4000);
setTimeout('showCaptions()', 6000)
} else {
setTimeout(function(){
$('#cursor').remove();
/*------- step 2 hacking pwd / show console logs -------*/
$( ".password-page").css({
'transition-property': 'background-color',
'transition-duration': '5s',
'background-color': 'black'
});
$( ".password__title" ).fadeOut(3000);
$( ".password-login").fadeOut(3000);
$( ".password__input-group").fadeOut(3000);
$( ".password-social-sharing").fadeOut(3000);
$( ".password__form-heading").fadeOut(3000);
$( ".password-powered-by").fadeOut(3000);
setTimeout('hackPwd()', 5000)
setTimeout('hacking()', 5000)
}, 1500)
}
}
/*-- show console logs --*/
function hacking() {
$( ".logo").text('');
$( ".logo").append("<div class='pwdhack'><div class='password hidden'></div><div class='button start'>START PASSWORD HACKING!</div>\
<div class='blink granted hidden'>ACCESS GRANTED! LOGIN NOW...</div></div><div id='console'></div>");
var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");
var txt = [
"FORCE: XX0022. ENCYPT://000.222.2345",
"TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
"RETRY: REINDEER FLOTILLA",
"Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
"================== Linked to Shopify ========================",
"try... store founded...",
"> Shopify Store - https://dalinhuang.myshopify.com/password#",
"Analyzing key...",
"not match...",
"Analyzing key...",
"not match...",
"Analyzing key...",
"not match...",
"Analyzing key...",
"not match...",
"Analyzing key...",
"...",
"key match!...",
"Saving ...",
"Sending to appmean.heroku.com...",
"...",
"done!",
"...",
"...",
"",
"",
"",
"Priority 1 // local / scanning...",
"scanning ports...",
"BACKDOOR FOUND (22.45.23.12.00000000)",
"BACKDOOR FOUND (13.36.23.13.00110000)",
"BACKDOOR FOUND (14.66.23.12.00110044)",
"BACKDOOR FOUND (13.66.23.14.00110055)",
"BACKDOOR FOUND (13.66.23.12.00110025)",
"...",
"...",
"BRUTE.EXE -r -z",
"...locating vulnerabilities...",
"...vulnerabilities found...",
"MCP/> DEPLOY CLU",
"SCAN: __ 0100.0000.0554.0080",
"SCAN: __ 0020.0000.0553.0080",
"SCAN: __ 0020.0000.0553.0080",
"TRYPASS ...",
"BACKDOOR FOUND (13.66.23.15.00123044)",
"BACKDOOR FOUND (13.66.23.16.00124043)",
"BACKDOOR FOUND (13.66.23.19.00110025)",
"...",
"..."
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
txt.push(txt.shift());
txt.forEach(function(e) {
var p = document.createElement("pbox");
p.textContent = e;
docfrag.appendChild(p);
});

while (c && c.firstChild) {
c.removeChild(c.firstChild);
}
if(c){
c.appendChild(docfrag);
}
}
}
/*-- hacking pwd --*/
function hackPwd () {
$( ".logo").text('');
$( ".logo").append("<div class='password hidden'></div><div class='button start'>START PASSWORD HACKING!</div>\
<div class='blink granted hidden'>ACCESS GRANTED!<br> LOGIN NOW...</div><div id='console'></div>");
var passwords = ['shopifypass'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;

var interval = setInterval(function(){
for(i = 0; i < counter; i++) {
characters[i] = password.charAt(i);
}
for(i = counter; i < password.length; i++) {
characters[i] = Math.random().toString(36).charAt(2);
}
$('.password').text(characters.join(''));
}, 25);


function hack() {
counter++;
if(counter == password.length){
$('.granted').removeClass('hidden');
setTimeout(function(){
document.getElementById("Password").value = 'shopifypass';
document.getElementById("login_form").submit();
}, 4000);
}
}

setTimeout(function(){
$('.start').addClass('hidden');
$('.info p:last-child, .password').removeClass('hidden');
setInterval(function(){ hack(); }, 1600);
setTimeout(function(){
setInterval(function(){ hack(); }, 1200);
}, 10000);
}, 3000);

}
</script>
<style media="screen" type="text/css">

body {
margin: 0;
}

* {
box-sizing: border-box;
}

.password-main__inner{
padding: 0;
}

pbox {
text-align: left;
display: block;
font-family: monospace;
font-weight: bold;
font-size: 1.2rem;
margin: 0;
padding: 0;
line-height: 1;
color: limegreen;
text-shadow: 0px 0px 10px limegreen;
}

@keyframes blink {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}
// -------- pwd hack
@-webkit-keyframes blink {
50% {
opacity: 1;
}
100% {
opacity: 0;
}
}
@keyframes blink {
50% {
opacity: 1;
}
100% {
opacity: 0;
}
}
.pwdhack {
background-color: #151515;
color: #eee;
font-family: 'Share Tech Mono', monospace;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.hidden {
display: none;
}

.password {
font-family: 'Share Tech Mono', monospace;
position: absolute;
font-weight: 400;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
font-size: 3rem;
letter-spacing: 5px;
text-transform: uppercase;
background: red;
box-shadow: 0 0 30px red;
text-shadow: 0 0 20px white;
color: white;
width: 30rem;
height: 4rem;
margin-top: -5vh;
text-align: center;
min-width: 30rem;
}

.granted {
padding: 0 0.5rem;
color: white;
font-family: 'Share Tech Mono', monospace;
position: absolute;
top: 75%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
font-size: 1.9rem;
background: red;
min-width: 30rem;
box-shadow: 0 0 30px red;
text-shadow: 0 0 20px white;
}

.info {
position: absolute;
top: 0;
left: 0;
}
.info p {
margin: 10px;
}

.button {
background-color: #111;
border: solid 1px #888;
padding: 8px 25px;
font-size: 26px;
letter-spacing: 2px;
cursor: pointer;
}

.start {
position: absolute;
color: white;
top: 20%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
}

.blink {
-webkit-animation: blink 0.8s steps(1, start) infinite alternate;
-moz-animation: blink 0.8s steps(1, start) infinite alternate;
-ms-transform: blink 0.8s steps(1, start) infinite alternate;
-o-animation: blink 0.8s steps(1, start) infinite alternate;
animation: blink 0.8s steps(1, start) infinite alternate;
}
</style>
<script>