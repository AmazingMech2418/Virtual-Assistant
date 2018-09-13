addWord("apiMessages");
thesauruslist.push([]);
addSynonym("apiMessages","messages of");
addSynonym("apiMessages","notifications of");
addKnowledge("apiMessages","getAPI",true);
// Note: jQuery needed

$.noConflict
            function require(url) {
                var rtrn
             jQuery.ajax({async:false,url: url, success: function(result){
                if(url.search(".json")!==-1) {rtrn= result;} else if(url.search(".js")!==-1) {rtrn= eval("function() {"+result+"}");} else {
            rtrn= result;
                }
        }});return rtrn;
            }
function getAPI(e) {
return require("https://api.scratch.mit.edu/users/"+e.split(" ")[e.split(" ").length-1]+"/messages/count").count;
}
