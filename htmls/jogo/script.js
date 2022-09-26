var mobile = 0;
window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    	mobile = 1
    }
}

canvas = document.querySelector(".canvas").getContext("2d")
var img = new Image()
var img2 = new Image()
img.src = "neusso_rest_right_0.png"


var pos =  {x:0, y:250}
var direction = "right"
var wstate = 0;
var cam = {x:0, y:0}

var translose = new Image()
var restarti = new Image()
var menu = new Image()
var message_win = new Image()
var message_lose = new Image()
var heart_full = new Image()
var heart_dead = new Image()
translose.src = "transparent_lose.png"
restarti.src = "restart.png"
menu.src = "menu.png"
message_win.src = "message_win.png"
message_lose.src = "message_lose.png"
heart_full.src = "heart.png"
heart_dead.src = "heart_dead.png"

var actuals = 0;
var tac = 0
var diactu = 0;

var imguni = "neusso_rest_right_0.png"

var initact = 0;

var stopu = 1
var stopd = 1

class item{
	constructor(x, y, name, width, height, limleft, limright, limup){
		this.x = x; this.y = y; this.name = name; this.width = width; this.height = height
		this.limright = limright; this.limleft = limleft; this.limup = limup
	}
	get position(){
		return {
			x:this.x,
			y:this.y,
			di:250-this.y,
		 	width:this.width,
		 	height:this.height,
		 	limright: this.limright,
		 	limleft: this.limleft,
		 	limup: this.limup,
		 	name: this.name
			}
	}
	set namei(i){
		this.name = i
	}
	get namei(){
		return this.name
	}
	set widthi(i){
		this.width = i;
	}
	set heighti(i) {
		this.height = i
	}
	set xi(i){
		this.x = i
	}
	
}

var mobdir;
var s;
var posmobi;
var virtuals
var rest;
var colects;

var gram = new Image()
gram.src = "gram.png"

var background = new Image()
background.src = "background.jpg"

var ston = new Image()
var stonchar = new Image()
var mob_right = new Image()
var mob_left = new Image()
ston.src = "stone.png"
stonchar.src = "stone_character_0.png"
mob_right.src = "mob_skull_right.png"  
mob_left.src = "mob_skull_left.png"  

var mobjetr = new Image()
var mobjetl = new Image()
mobjetr.src = "mob_skull_right_jetpack.png"
mobjetl.src = "mob_skull_left_jetpack.png"

var hearts;
var ih;
var lock
function reset(){

colects = 0

lock = 0

pos.x = 0
pos.y = 250

hearts = [
	(new item(cam.x+80, 30, "heart.png", 50, 50, 0, 0)),
	(new item(cam.x+110, 30, "heart.png", 50, 50, 0, 0)),
	(new item(cam.x+140, 30, "heart.png", 50, 50, 0, 0)),
]

ih = 0;

mobdir = 0;

s = [
			(new item(300, 200, "stone.png", 200, 100, 20, 140, 100)),
			(new item(470, 200, "stone.png", 200, 100, 20, 140, 100)),
			(new item(680, 275, "stone.png", 80, 100, 40, 35, 100)),
			(new item(680, 250, "stone.png", 80, 100, 40, 35, 100)),
			(new item(680, 225, "stone.png", 80, 100, 40, 35, 100)),
			(new item(950, 200, "stone.png", 400, 100, -30, 300, 100)),
			(new item(850, 265, "mob_skull_right.png", 64, 64, 40, 20, 100)),
			(new item(950, 265, "mob_skull_right.png", 64, 64, 40, 20, 100)),
			(new item(1140, 160, "mob_skull_right.png", 64, 64, 40, 20, 100)),
			(new item(1425, 175, "mob_skull_right_jetpack.png", 64, 64, 40, 20, 100)),
		]
posmobi = [
	850,
	950,
	1140,
	1425,
]

virtuals = [
	(new item(845, 250, "stone_character_0.png", 60, 70, 0, 0)),
	(new item(1040, 140, "stone_character_0.png", 60, 70, 0, 0)),
	(new item(1425, 125, "stone_character_0.png", 60, 70, 0, 0)),
]

rest = 0;
}

reset()

var actualsgeral;

function dead(){
	if (ih < 3){
		hearts[ih] = (new item(80+(30*ih), hearts[ih].position.y, "heart_dead.png", 50, 50, 0, 0))
	}
	ih = ih+1
	pos.x -=40 
	if(ih == 3) {
	lock = 1;
	}
}


setInterval(repose, 500)
setInterval(up, 15)
setInterval(down, 15)
setInterval(()=>{
	s.slice(6, 10).forEach((z, i)=>{
		if(z != 0 && z.position.x < posmobi[i]+100 && mobdir == 0){
			z.xi = z.position.x+1
			z.position.x == posmobi[i]+100 ? mobdir = 1 : 0
		} else if (z != 0 && z.position.x > posmobi[i]-100 && mobdir == 1){
			z.xi = z.position.x-1
			z.position.x == posmobi[i]-100 ? mobdir = 0 : 0
		}
		if (z.namei != "mob_skull_right_jetpack.png" && z.namei != "mob_skull_left_jetpack.png"){
			z.namei = mobdir == 0 ? "mob_skull_right.png" : "mob_skull_left.png"
		}else{
			z.namei = mobdir == 0 ? "mob_skull_right_jetpack.png" : "mob_skull_left_jetpack.png"
		}
		verify(z)
		if (actuals != 0 && actuals.name[0] == "m"){
			 (pos.x > actuals.x-50) ? (pos.y-50 < actuals.y && pos.y+50 > actuals.y ? dead(): (0)) : 0
			 if (z != 0 && stopu == 1 && stopd == 1 && actuals.name[0] == "m" && pos.y == actuals.y-59 || "mob_skull_left.png" && pos.y == actuals.y-60){
			 	upstart()
			 	posi = s.indexOf(actualsgeral)
			 	if(s[posi].namei != "stone.png"){s[posi] = 0}
			 }
		}
		z != 0 ? desenhar(imguni, z.position.x, z.position.y, false) : desenhar(imguni, -100, -100, false)
	})
}, 30);

function spawnitems(z){
	if (z != 0){
		switch(z.namei) {
		case "stone.png":
			canvas.drawImage(ston, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "mob_skull_right.png":
			canvas.drawImage(mob_right, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "mob_skull_right_jetpack.png":
			canvas.drawImage(mobjetr, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "mob_skull_left_jetpack.png":
			canvas.drawImage(mobjetl, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "mob_skull_left.png":
			canvas.drawImage(mob_left, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "stone_character_0.png":
			canvas.drawImage(stonchar, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "heart_dead.png":
			canvas.drawImage(heart_dead, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		case "heart.png":
			canvas.drawImage(heart_full, z.position.x, z.position.y, z.position.width, z.position.height)
			break
		}
	}
}

function verify(z){
	if (z !=0 && pos.x > z.position.x-z.limleft && pos.x < z.position.x+z.position.limright ){

		actuals =  z.position
		actualsgeral = z
		tac = 1
		diactu = z.position.di
	}
}

function wstatealr(f){
	switch (wstate){
		case 0:
			wstate = 1;
			break
		case 1:
			wstate = 2
			break;
		case 2:
			wstate = 0;
			break
		default:
			wstate = 0;
			break
	}
}

function desenhar(url, x, y, move){
	canvas.clearRect(0, 0, 2000, 600)

	rest = move == true ? 2 : rest

 	img = new Image()
	img.src = url
	canvas.drawImage(img, pos.x, pos.y, 96, 96)

	canvas.drawImage(background, -1, -100, 2000, 600)

	canvas.drawImage(gram, -1, 325, 1200, 600)
	canvas.drawImage(gram, 1199, 325, 1200, 600)

	s.forEach(spawnitems)
	virtuals.forEach(spawnitems)

	hearts.forEach(spawnitems)
	hearts.forEach((z, i)=>{
		hearts[i].xi = cam.x+80+(30*i)
	})

	img2 = new Image()
	img2.src = `house_${colects}.png`
	canvas.drawImage(img2, cam.x, 0, 100, 100)


	if (colects == 3 && ih <=3){
		lock = 1
		canvas.drawImage(translose, 0, 0, 2000, 600)
		canvas.drawImage(message_win, cam.x+200, 0, 400, 400)
		canvas.drawImage(restarti, cam.x+365, 275, 200, 200)
	} else if (ih >= 3){
		lock = 1
		canvas.drawImage(translose, 0, 0, 2000, 600)
		canvas.drawImage(message_lose, cam.x+200, 0, 400, 400)
		canvas.drawImage(restarti, cam.x+365, 275, 200, 200)
	}

	virtuals.forEach((z, i)=> {
	if (z != 0 && pos.x > z.position.x-20 && pos.y == z.position.y && pos.x < z.position.x+20){
		virtuals[i] = 0
		colects += 1
}
});

	cam.x = Math.min(1600 - 800, Math.max(0,pos.x - 800/2));
	cam.y = Math.min(600 - 400, Math.max(0,pos.y - 600/2));
	canvas.setTransform(1,0,0,1,0,0);
	canvas.translate(-cam.x, -cam.y)
	canvas.drawImage(img, pos.x, pos.y, 96,96)
}
function upstart(){
	s.forEach(verify)
	if (actuals == 0){initact = 1}
	if (stopd == 1){
	stopu = 0
	}
}
function rightstart(){
	direction = "right"
	wstatealr()
	s.forEach(verify)
	if (actuals != 0){
		(pos.x > actuals.x-50) ? (pos.y-50 < actuals.y && pos.y+50 > actuals.y ? 0 : (pos.x += pos.x < 1515 ? 5:0)) : 0
	} else {
		pos.x += pos.x < 1515 ? 5: 0
	}
	imguni = `neusso_walk_right_${wstate}.png`	
}

function leftstart(){
	direction = "left"
	wstatealr()
	s.forEach(verify)
	if (actuals != 0){
		(pos.x > actuals.x-50) ? (pos.y-50 < actuals.y && pos.y+50 > actuals.y ? 0: (pos.x -= pos.x > -25 ? 5:0)) : 0
	} else {
		pos.x -= pos.x > -25 ? 5 : 0
	}
	imguni = `neusso_walk_left_${wstate}.png`	
}

document.addEventListener("keydown", (key)=> {
	key = key.key || window.event.key
	if(lock == 0 && mobile == 0){
		switch (key.toLowerCase()){
			case "d":
				rightstart()
				break
			case "a":
				leftstart()
				break
			case "w":
				upstart()
				break
		}} else if(lock == 1){
		switch (key.toLowerCase()){
			case 'r':
				reset()
				break
		}
	}
})

function repose(){
	switch (rest){
		case 0:
			imguni = `neusso_rest_${direction}_0.png`
			rest += 1;
			break
		case 1:
			imguni = `neusso_rest_${direction}_1.png`
			rest -= 1;
			break
		default:
			rest = 0;
			break
	}
}


function up(){
	tac = 0
	s.forEach(verify)
	if (tac == 0) {actuals = 0; diactu = 0}
	if (pos.y > (250-160+(pos.y > actuals.y ? diactu+actuals.limup : (initact == 1 ? -diactu: (pos.y < actuals.y ? -diactu : 25 ) ))) && stopu == 0){
		pos.y -= 5
		imguni = `neusso_up_${direction}_0.png`
	 }
	else if (pos.y <= (250-160+(pos.y > actuals.y ? diactu+actuals.limup : ( initact == 1? -diactu: (pos.y < actuals.y ? -diactu : 25)  ))) ){
		stopd=0;
		stopu=1;
	}
}

function down(){
	tac = 0;
	s.forEach(verify)
	if (tac == 0) {actuals = 0; diactu = 0}
	if (pos.y == (actuals == 0 ? 250 : actuals.y-60) ){
		if (stopd == 0){
			imguni = `neusso_rest_${direction}_0.png`
		}
		stopd=1
		initact = 0
	}
	else if (stopd == 0 && pos.y != 250) {
		pos.y += 2.5
		imguni = `neusso_up_${direction}_0.png`
	}
	else if (actuals == 0 && pos.y < 250 && pos.y != 250){
		stopd = 0
	}
	else {
		stopd = 1
		initact = 0
	
	}
}
