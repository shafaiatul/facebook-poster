


var cnv = document.getElementById("cnv1");
var ctx = cnv.getContext("2d");
//setting maximum line width, line height and x / y cordinates for text
var maxWidth = cnv1.width - 10;
var lineHeight = 22;

var x_pos = 2;
var y_pos = 15;



    var clearCanvas = function (cnv) {
      ctx.beginPath(); //clear existing drawing path
      ctx.save(); // store the current transformation matrix
      ctx.setTransform(1, 0, 0, 1, 0, 0); //use the identity matrix while clearing the canvas
      ctx.clearRect(0, 0, cnv.width, cnv.height); //to clear a rectangle (erase that area to transparent black)
      ctx.restore(); //redevelop the transform
    };
    
    function processTextcolor(c1) {
        var chosenTextColor = document.getElementById(c1).value;
        alert(chosenTextColor);   
        alert(typeof(chosenTextColor));
        ctx.fillStyle = chosenTextColor;
    }
    function processPostercolor(c2) {
        var chosenPosterColor = document.getElementById(c2).value;
        cnv.style.background = chosenPosterColor;
    }
    
    
    function addTextCnv(ctx, text, x, y, maxWidth, lineHeight){
        //split the text in words
        var words = text.split(" ");
        var nr_w = words.length
        var addtxt = " ";

  //set: adding the text and rows
        for(var n = 0; n < nr_w; n++){
          var txtLine = addtxt +words[n]+ " ";
          var metrics = ctx.measureText(txtLine); //takes a string as an argument and returns a metric
          var txtWidth = metrics.width; // width in pixel of the needed boundary
            if (txtWidth > maxWidth){
              ctx.fillText(addtxt, x, y);
              addtxt = words[n] + " ";
              y += lineHeight;
            }
            else addtxt = txtLine;
          }

      //adding the text in canvas(set the text color, font type, size)
          
          ctx.font = "bold 17px sans-serif";
          ctx.fillText(addtxt, x, y);

      }

    $("#text_cnv").on("keyup",function() {
    clearCanvas(cnv);      // clears the canvas
    addTextCnv(ctx, this.value, x_pos, y_pos, maxWidth, lineHeight);
  });

  //Rendering a dropdown lost for font-size 
   for (var i=1; i<=50; i++) {
        $(".fontSize").append($('<option></option>').val(i).html(i));
    }



    

    

    
