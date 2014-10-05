$(document).ready(function(){
  	$("li").click(function(){
          var str = $(this).text();
    	  $(this).hide();
    	  return str;
  	});
});