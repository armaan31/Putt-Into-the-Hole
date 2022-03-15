var canvas=new fabric.Canvas("myCanvas");
var bx=0;
var by=0; //Ball position
var hx=600;
var hy=400; //position of hole
bw = 5;
bh = 5; //WIDTH AND HEIGHT OF BALL
var h=""
var b=""
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){ 
        h=Img;
        h.scaleToWidth(50);
        h.scaleToHeight(50);//above, sizing the image hight and width 
        h.set({
            top: hy,
            left: hx
        });
	canvas.add(h);
	});
	new_image();
}
function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
        b=Img;
        b.scaleToWidth(50);
        b.scaleToHeight(50);
        b.set({
            top: by,
            left: bx
        });// ABOVE, positioning image
        canvas.add(b); //Adding the image
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	keyPressed = e.keyCode;
	if (bx==hx && by==hy){
		canvas.remove(b);
		document.getElementById("hd3").innerHTML="You Have Hit the Goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	} else{
		if(keyPressed == '38'){
			up();
		}
		if(keyPressed == '40'){
			down();
		}
		if(keyPressed == '37'){
			left();
		}
		if(keyPressed == '39'){
			right();
		}
	}
	
	function up(){
		if (by>=5){
			by=by-bh;
			canvas.remove(b);
			new_image();
		}
	}
	function down(){
		if (by<=450){
			by=by+bh;
			canvas.remove(b);
			new_image();
		}
	}
	function left(){
		if (bx>=5){
			bx=bx-bh;
			canvas.remove(b);
			new_image();
		}
	}
	function right(){
		if (bx<=800){
			bx=bx+bh;
			canvas.remove(b);
			new_image();
		}
	}
}

