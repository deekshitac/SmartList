 //<script src="//code.jquery.com/jquery-1.10.2.js"></script>
 function addItemToList(){
	var listItem = document.getElementById('listItem').value;
	var itemTime = document.getElementById('itemTime').value;
	document.getElementById('boldStuff2').innerHTML = listItem + " for " + itemTime + " days";
	var node=document.createElement("LI");
	var textnode=document.createTextNode(listItem);
	node.appendChild(textnode);
	document.getElementById("demo").appendChild(node);

//	var x = document.createElement("INPUT");
 //    x.setAttribute("type", "checkbox");
    document.getElementById("demo").appendChild(x);

	// var itemArray = new Array(2^32-1);
	// var timeArray = new Array(2^32-1);
	var itemArray = [];
	var timeArray = [];
	itemArray.push(listItem);
	itemArray.push(itemTime);

 }

 	$(document).ready(function(){
  		$("li").click(function(){
   			$(this).hide();
  		});
  	});	

