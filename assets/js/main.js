jQuery (function($){
    clickHome();
    widthfeature();
});


function clickHome(){
   var click = $(".click-home");
   var row = $(".row");
   var viewportWidth = $("body").innerWidth();
   var feture = $(".feature-list-content");
   
     click.click(function(){
        if(row.children().hasClass("column-2") ){
            $(".column-2").toggleClass("column-1");
            $(".column-10").toggleClass("column-11");
            if($(".column-1")){
                var total = viewportWidth - $(".column-1").width();
                feture.css("width",total);
            }
            widthfeature();
      } 
     });     
}




function widthfeature (){
   var viewportWidth = $("body").innerWidth();
    var column = $(".column-2");
    var feture = $(".feature-list-content");
    var totalwidth = viewportWidth - column.width();
    feture.css("width",totalwidth);

}



