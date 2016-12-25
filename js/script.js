$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=Super_Smash_Bros.&prop=text&format=json&callback=?', function(json) {
     var jtxt=json.parse.text['*'].replace("External links","");
     /*if (jtxt.includes("References")==true){
     	jtxt="I removed it";
     }*/
    //$('#wikiInfo').html(json.parse.text['*']);
    $('#wikiInfo').html(json.parse.text['*']);
    $('#wikiInfo').find("a:not(.references a)").attr("href", function()
    	{ return "http://www.wikipedia.org" + $(this).attr("href");
    });
    $("#See_also").html("");
    if ($("h2").html()==""){
        console.log("true");
    }
    //$('#wikiInfo').find("h2").html(function(){
       /*
        if ($("h2").includes($("#External_links"))==true){
            $("h2").html("");
        }
        if ($("h2").includes($("#References"))==true){
            $("h2").html("");
        }
    	
        $("#External_links").css("display","none;");
        $("#References").css("display: none;");*/
//});
   /* $('#wikiInfo').find($("#External_links")).html(function(){
        if ($("#External_links").html().includes("External links")){
            return "";
    }    
});*/

    //$("#wikiInfo").find("a").attr("target", "_blank");
     });