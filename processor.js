var words = [];
var thesauruslist = [[]];
function run(f,params) {
window[f](params);
}
var inlist = [];
var outlist = [];
function newIn(word) {
inlist.push(word);
}
function newOut(f,isFunction) {
outlist.push({val:f,f:isFunction});
}
var rtrn;
function process(txt) {
  rtrn = "";
for(var zz=0; zz<inlist.length;zz++){
if(checkWord(txt,inlist[zz])){
  if(outlist[zz].f) {
run(outlist[zz].val,txt);
  } else {
  run("say",outlist[zz].val);
  }
}
}
return rtrn;
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

// Adding Info
function addWord(word) {
words.push(word);
}

function addSynonym(word,syn) {
thesauruslist[words.indexOf(word)].push(syn);
}

function addKnowledge(inin,outout,isFunction) {
newIn(inin);
  newOut(outout,isFunction);
}
