// console.log('hi');
const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
	// createeamillist(e.target);
	// createeamillist(e.target.value);

	// createeamillist(this);
	createeamillist(this.value);
});

function createeamillist(inputtext){
	// console.log(inputtext);

	// split by (",")
	// const eitems = inputtext.split(',');
	// console.log(eitems); //return array

	// remove empty
	// const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
	// console.log(eitems);
					// (OR)
	// const eitems = inputtext.split(',');
	// var abc = eitems.filter(function(rmempt));
	// console.log(abc);

	// remove space/empty
	const emitems = inputtext.split(',').filter(reempty=>reempty.trim() !== '').map(reempty=>reempty.trim());
	// console.log(emitems);

	getemcontainer.innerHTML = '';

	emitems.forEach(function(emitem){
		// console.log(eitems);

		const setnewspan = document.createElement('span');
		setnewspan.textContent = emitem;
		setnewspan.classList.add('email-item');
		// console.log(setnewspan);

		getemcontainer.appendChild(setnewspan);
	});

}

getbtn.addEventListener('click',function(e){

	sendemail();

	e.preventDefault();
});

function sendemail(){
	// console.log('i am working');

	const gettxtvalue = gettextarea.value;
	const getaddresses = document.querySelectorAll('.email-item');
	// console.log(gettxtvalue);
	// console.log(getaddresses);

	var persons = [];

	if(getaddresses.length > 0 && gettxtvalue){

		getaddresses.forEach(function(getaddress){

			persons.push({
				email:getaddress.textContent,
				message:gettxtvalue
			});
		});

		console.log(persons);
	}else{
		window.alert('Enter Message');
		gettextarea.focus();
	}
}

// 7EB