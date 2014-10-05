 //<script src="//code.jquery.com/jquery-1.10.2.js"></script>
 var ref = new Firebase("https://smart-list.firebaseio.com/");

 function addItemToList(){
	var listItem = document.getElementById('listItem').value;
	var itemTime = document.getElementById('itemTime').value;
	ref.push({item: listItem, time: itemTime});
	document.getElementById('boldStuff2').innerHTML = listItem + " for " + itemTime + " days";
	var node=document.createElement("LI");
	var textnode=document.createTextNode(listItem);
	node.appendChild(textnode);
	document.getElementById("demo").appendChild(node);

//	var x = document.createElement("INPUT");
 //    x.setAttribute("type", "checkbox");
    // document.getElementById("demo").appendChild(x);

	// var itemArray = new Array(2^32-1);
	// var timeArray = new Array(2^32-1);
	var itemArray = [];
	var timeArray = [];
	itemArray.push(listItem);
	itemArray.push(itemTime);
 }

 //Firebase event listener
 ref.on("child_added", function (snapshot) {
 	var item = snapshot.val();
 	console.log(item);
 });

 //Firebase User Authentiacation with email and password
 ref.createUser({
   var email = document.getElementBySelector('itemTime').value;	
   email    : "bobtony@firebase.com",
   password : "correcthorsebatterystaple"
 }, function(error) {
   if (error === null) {
     console.log("User created successfully");
   } else {
     console.log("Error creating user:", error);
   }
 });



 	$(document).ready(function(){
  		$("li").click(function(){
   			$(this).hide();
  		});
  	});	

