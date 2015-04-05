(function($) {
	'use strict';
	var text = ' ';
	function draw(){
	  	var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
		var fontColor = $('#textColor').spectrum('get').toHexString();
		var backgroundColor = $('#backgroundColor').spectrum('get').toHexString();
		var fontSize = $('#fontSize').val();
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = fontColor;
		canvas.style.background = backgroundColor;
		context.font = fontSize + 'px sans-serif';
		//------------------------------------------
		var maxWidth = canvas.width - 10;
		var lineHeight = 22;
		var x = 5;
		var y = 50;

		var words = text.split(' ');
		var nr_w = words.length;
		var addtxt = ' ';
		
	//set: adding the text and rows
		for(var n = 0; n < nr_w; n++) {
		var txtLine = addtxt +words[n]+ ' ';
		var metrics = context.measureText(txtLine); //takes a string as an argument and returns a metric
		var txtWidth = metrics.width; // width in pixel of the needed boundary
		  
		    if (txtWidth > maxWidth){
		      context.fillText(addtxt, x, y);
		      addtxt = words[n] + ' ';
		        if(fontSize > 26){
		        y += lineHeight * 2;
		       } else {
		        y += lineHeight;
		       }
		    }
		    else addtxt = txtLine;
		}
		
		context.fillText (addtxt, x, y);
		
		

	}
	
	function bindEvents(){
		$('#typeHere').on('keyup', function () {
			text = $(this).val();
		 	draw();
		});

		$('#textColor').on('change',function(){
		 	draw();
		});

		$('#backgroundColor').on('change',function(){
		 	draw();
		});

		for (var i = 12; i <= 50; i++) {
          $('#fontSize').append($('<option></option>').val(i).html(i));
      	}
		$('#fontSize').on('change',function(){
		 	draw();
		});
	}

	function initialize(){
		$('#textColor').spectrum({
			color: '#22E'
		});

		$('#backgroundColor').spectrum({
		    color: '#fff'
		});

		bindEvents();
	}

	initialize();

})(this.jQuery);



