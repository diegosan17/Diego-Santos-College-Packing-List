$(".to-pack-button").click(function() {
    var mild=$(".to-pack-input").val();
    $(".packing-list").append("<li>"+"I'm going to pack " + mild+ "</li>");
    
});
$(".to-take-button").click(function() {
    var mild=$(".to-take-input").val();
    $(".course-list").append("<li>"+"I'm going to take " + mild+ "</li>");
    
});