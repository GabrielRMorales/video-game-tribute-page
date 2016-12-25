$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=Super_Smash_Bros.&prop=text&format=json&callback=?', function(json) {
   
    $('#wikiInfo').html(json.parse.text['*']);
    $('#wikiInfo').find("a:not(.references a)").attr("href", function()
    	{ return "http://www.wikipedia.org" + $(this).attr("href");
    });

    $("#See_also").parent().css("display","none");
    $("#References").parent().css("display","none");
    $("#External_links").parent().css("display","none");
     });