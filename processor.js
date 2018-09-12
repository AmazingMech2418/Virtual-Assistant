var words = [];
var thesauruslist = [[]];
function run(f,params) {
window[f](params);
}
function process(txt) {


}
var p = [".",",",'?','!'];
function split(txt,str) {
var t = new Array();
for(var i=0; i<txt.length; i++) {
if(p.indexOf(txt[i])==-1) {

t.push(txt[i].toLowerCase());

}
}
return t.join("").split(str);
} 

function thesaurus(word) {
return thesauruslist[words.indexOf(word)];
}

function checkWord(txt,tlist) {
var s = split(txt," ");
var s = s.join(" ");
for(var i=0; i<tlist.length; i++) {
if(s.search(tlist[i])!=-1) {
return true;
}
}
return false;
}
