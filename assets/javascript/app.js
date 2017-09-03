$(document).ready(function(){

    var shownGifs = ["Vampire", "Werewolf", "Zombie", "Witch", "Ghost", "Demon", "Hellhound", "Monster"];
    

function searchGiphy() {
    //Set up initial gifs to display on site load
    console.log("gif-input: " + $("#gif-input").val());
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + gif + "&api_key=1e91fe5c8cee4fdeb30896944371bd74&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){

        $("#gif-display").html(" ");

        var rArray = response.data.length;
        
        for (let i = 0; i < rArray; i++) {

            console.log(response);
            
            var gifRating = response.data[i].rating;
            var gifImage = response.data[i].images.downsized.url;
            
            $("#gif-display").append("<div class = 'col-4'> <p> Rating: " + gifRating + "</p> <img src = '" + gifImage + "'></div>");

        }

       

        //$("#gif-display").append("<p>" + gifRating + "</p> <img src='" + gifImage + "'>" );
       // $("#gif-display").append("<img src='" + response.data[1].images.downsized.url + "'>" );
        //$("#gif-display").append("<img src='" + response.data[2].images.downsized.url + "'>" );
        
    })
} //End searchGiphy Function

function renderButtons() {

    $("#buttons-display").empty();

    for(var i = 0; i < shownGifs.length; i++) {
        
        console.log("shownGifs length: " + shownGifs.length);

        var b = $("<button>");
        
        b.addClass("gif");
        b.attr("data-name", shownGifs[i]);
        b.text(shownGifs[i]);
        $("#buttons-display").append(b);

        console.log(b);
    }
}

$("#select-gif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();
    console.log("Gif input = " + gif);

    shownGifs.push(gif);

    console.log(shownGifs);

    renderButtons();
    
});

$(document).on("click", ".gif", searchGiphy);

renderButtons();


});