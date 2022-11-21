function openNav() {
    var object = document.getElementById("mySidenav");

    if (object.style.right == "-100%") 
	{
		object.style.right = "0%";
	}
    else{
        object.style.right = "-100%";
    }
}
function closeNav() {
    var object = document.getElementById("mySidenav");

    if (object.style.right == "-100%") 
	{
		object.style.right = "0%";
	} 
    else {
      object.style.right = "-100%";
    }
}