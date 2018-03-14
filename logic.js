
var giphyResponse;

//selects #submit adds event listner(click)executes function
//Retrieves Value of searchTerm 
//var btn <Creates> new button
//btn.text adds text and attribute of "data"
//appends new button to #btnholder
$("#submit").on("click",function(){
   var inputValue = $("#searchTerm").val();
    var btn = $("<button>");
    btn.text(inputValue);
    btn.attr("data-term",inputValue);
    $("#btnHolder").append(btn);

})
//
$("#btnHolder").on("click","button", function(){
//this is relative to button clicked
    var data = $(this).attr("data-term");
    var apiKey = "cnvVfq7XSIKMKEvBcaV7y9oFTHegmF6X",
    request = "https://api.giphy.com/v1/gifs/search?q=" + data + "&api_key=" + apiKey + "&limit=25";

   $.ajax({
       method:"GET",
       url:request
   }).then(function(response){
       giphyResponse = response;
        console.log(response);
        $(".imgHolder").empty();
        for (var i = 0; i<response.data.length; i++){
            var image = $("<img>");
            image.attr({
                src: response.data[i].images.fixed_height_still.url,
                alt:data,
                index : i
            });
            $(".imgHolder").append(image);
        };
   });

})
//
$(".imgHolder").on("click","img", function(){
    var index = $(this).attr("index");
    if ($(this).attr("src") === giphyResponse.data[index].images.fixed_height_still.url){
        $(this).attr("src", giphyResponse.data[index].images.fixed_height.url);
    }else {
        $(this).attr("src", giphyResponse.data[index].images.fixed_height_still.url)
    }
})
