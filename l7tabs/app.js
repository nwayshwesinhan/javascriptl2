// console.log('hi');

var gettablinks = document.getElementsByClassName('tablinks'); // HTML Collection
var gettabpanes = document.getElementsByClassName('tab-pane'); // HTML Collection
// console.log(gettabpanes);
var getbtncloses = document.querySelectorAll('.btn-close'); // Nodelist

var tappanes = Array.from(gettabpanes);


function gettab(evn,linkid){

	// console.log(evn.target);
	// console.log(linkid);

	// for(var x=0;x < gettabpanes.length ; x++){
	// 	gettabpanes[x].style.display = "none";
	// } OR

	tappanes.forEach(function(tappane){
		tappane.style.display = "none";
	});

	for(var x=0; x < gettablinks.length; x++){
		gettablinks[x].className = gettablinks[x].className.replace(" active","");
		
		getbtncloses[x].addEventListener('click',function(){
			this.parentElement.style.display = "none";
		});
	}

	// for(var y=0; y < getbtncloses.length;y++){
	// 	getbtncloses[x].addEventListener('click',function(){
	// 		this.parentElement.style.display = "none";
	// 	});
	// }

	document.getElementById(linkid).style.display = "block";

	// evn.target.className += " active";
	// evn.target.className = evn.target.className.replace("tablinks","tablinks active");
	// evn.target.classList.add('active');

	// console.log(evn);
	// console.log(evn.target);
	// console.log(evn.currentTarget);
	evn.currentTarget.className += " active";
}

document.getElementById('autoclick').click();
