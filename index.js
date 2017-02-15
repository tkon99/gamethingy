$(document).ready(function(){
	for(x = 0; x < 50; x++){
		for(y = 0; y < 50; y++){
			$("#app").append('<div class="block" style="left: '+x*2+'%;top:'+(y*2)+'%" data-crds="'+x+'-'+y+'"></div>');
		}
	}

	doGame();
});

function c(crds){
    return $("div[data-crds='"+crds.join("-")+"']");
}

function a(crds, color){
    if(color == undefined){
        color = "green";
    }
	$("div[data-crds='"+crds.join("-")+"']").addClass(color);
}
function p(crds, color){
    if(color == undefined){
        color = "green";
    }
	$("div[data-crds='"+crds.join("-")+"']").removeClass(color);
}

var previous = [];
function doGame(){
	a([24,24]);
	previous = [24,24];
    generateMap();
}

function drawLineBetween(crd1, crd2, color){
    //Handle X-axis
    if(crd1[0] < crd2[0]){
        for(i = crd1[0]; i <= crd2[0]; i++){
            a([i,crd1[1]], "blue");
        }
    }else if(crd1[0] == crd2[0]){
        //No need
    }else{
        for(i = crd1[0]; i >= crd2[0]; i--){
            a([i,crd1[1]], "blue");
        }
    }

    //Handle Y-axis
    if(crd1[1] < crd2[1]){
        for(h = crd1[1]; h <= crd2[1]; h++){
            a([crd2[0],h], "blue");
        }
    }else if(crd1[1] == crd2[1]){
        //No need
    }else{
        for(h = crd1[1]; h >= crd2[1]; h--){
            a([crd2[0],h], "blue");
        }
    }
}

function generateMap(){
    let ppoint = [Math.floor(Math.random()*49) + 1,Math.floor(Math.random()*49) + 1];
    let spoint = [Math.floor(Math.random()*49) + 1,Math.floor(Math.random()*49) + 1];
    let tpoint = [Math.floor(Math.random()*49) + 1,Math.floor(Math.random()*49) + 1];
    //a(ppoint, "blue");
    //Choose a direction
    drawLineBetween(ppoint, spoint, "blue");
    drawLineBetween(spoint, tpoint, "blue");
    drawLineBetween(tpoint, ppoint, "blue");
}

$(document).keydown(function(e){
    if (e.keyCode == 87){ //W Up
    	if(previous[1] !== 0 && c([previous[0],previous[1]-1]).hasClass("blue") == false){
        	p(previous);
        	let nieuw = previous;
        	nieuw[1]--;
        	previous = nieuw;
        	a(nieuw);
    	}
    }
    if (e.keyCode == 68 && c([previous[0]+1,previous[1]]).hasClass("blue") == false){ //D Right
        if(previous[0] !== 49){
    		p(previous);
    		let nieuw = previous;
    		nieuw[0]++;
    		previous = nieuw;
    		a(nieuw);
    	}
    }
    if (e.keyCode == 83){ //S Down
        if(previous[1] !== 49 && c([previous[0],previous[1]+1]).hasClass("blue") == false){
    		p(previous);
    		let nieuw = previous;
    		nieuw[1]++;
    		previous = nieuw;
    		a(nieuw);
    	}
    }
    if (e.keyCode == 65){ //A Left
        if(previous[0] !== 0 && c([previous[0]-1,previous[1]]).hasClass("blue") == false){
    		p(previous);
    		let nieuw = previous;
    		nieuw[0]--;
    		previous = nieuw;
    		a(nieuw);
    	}
    }
});