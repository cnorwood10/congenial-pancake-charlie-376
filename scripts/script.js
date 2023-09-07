$( document ).ready(function() {
    $('#dogeBread').click(function(){
      //code goes here
      console.log("position: ", $('#dogeBread').position());
    });
  
  $("#dogeBread").draggable({axis: 'x', cursor: "crosshair", cursorAt: {top: 200, left: 300}});
      $( "#dogeBread" ).draggable({
      stop: function() {
        if($('#dogeBread').position().left > 800){
          $('#outputMsg').text("Bred is done")
         $('#dogeBread').attr('src','https://pbs.twimg.com/media/BaacRpaCcAA8eRI?format=jpg&name=900x900')
        }
        else if(800 > $('#dogeBread').position().left && $('#dogeBread').position().left  > 300){
          $('#outputMsg').text("you loafin, keep going");
          
        }
        else{
          $('#outputMsg').text("quit loafin, get goin");

        }
        }
    }); 
});