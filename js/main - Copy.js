$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Super_Smash_Bros.&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $("<div id='cactus'></div>").html(markup);
            $('#wikiInfo').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});
