function getLastURL(){
  var pathname = window.location.pathname;
  var pathArray = pathname.split('/');
  pathArray = pathArray[pathArray.length - 1];
  pathArray = pathArray.split('.');
  return pathArray[0].toLowerCase();
 }
   function selectedLink(){
  var url = getLastURL();
  var elements = $(".menuLink");
  $(".menuLink").removeClass("active");
  if(url== "index.html")
   elements[0].classList.add("active");
  if(url=="pendidikan.html")
   elements[1].classList.add("active");
  if(url=="hoby.html")
   elements[1].classList.add("active");
 }
 window.onload=selectedLink();