
// getting input value and changing the text
$("#myButton").on("click",function(){
    var x= $("#myInput").val();
    $("#changedText").html(x).removeClass().addClass("type1");
});

$("#myButton2").on("click",function(){
    var x= $("#myInput").val();
    $("#changedText").html(x).removeClass().addClass("type2");
});

$("#myButton3").on("click",function(){
    var x= $("#myInput").val();
    $("#changedText").html(x).removeClass().addClass("type3");
});

$("#myButton4").on("click",function(){
    var x= $("#myInput").val();
    $("#changedText").html(x).removeClass().addClass("type4");
});