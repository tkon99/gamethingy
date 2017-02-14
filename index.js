$(document).ready(function(){
	for(x = 0; x < 50; x++){
		for(y = 0; y < 50; y++){
			$("#app").append('<div class="block" style="left: '+x*2+'%;top:'+(y*2)+'%" data-crds="'+x+'-'+y+'"></div>');
		}
	}

	doGame();
});

function setActive(crds){
	$("div[data-crds='"+crds.join("-")+"']").addClass("green");
}
function unsetActive(crds){
	$("div[data-crds='"+crds.join("-")+"']").removeClass("green");
}

var previous = [];
function doGame(){
	setActive([24,24]);
	previous = [24,24];
}

$(document).keydown(function(e){
    if (e.keyCode == 87){ //W Up
    	if(previous[1] !== 0){
    		unsetActive(previous);
    		let nieuw = previous;
    		nieuw[1]--;
    		previous = nieuw;
    		setActive(nieuw);
    	}
    }
    if (e.keyCode == 68){ //D Right
        if(previous[0] !== 49){
    		unsetActive(previous);
    		let nieuw = previous;
    		nieuw[0]++;
    		previous = nieuw;
    		setActive(nieuw);
    	}
    }
    if (e.keyCode == 83){ //S Down
        if(previous[1] !== 49){
    		unsetActive(previous);
    		let nieuw = previous;
    		nieuw[1]++;
    		previous = nieuw;
    		setActive(nieuw);
    	}
    }
    if (e.keyCode == 65){ //A Left
        if(previous[0] !== 0){
    		unsetActive(previous);
    		let nieuw = previous;
    		nieuw[0]--;
    		previous = nieuw;
    		setActive(nieuw);
    	}
    }
});