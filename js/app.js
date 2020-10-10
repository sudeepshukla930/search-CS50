function appendUrl(){
	var search =document.getElementsByName("keywords")[0].value;
	var action_src = "https://www.google.com/" + search;
	var my_form = document.getElementById('my_form');
	console.log(action_src)
	my_form.action = action_src;
}