function showMessage(){
  alert("أهلا بكم في قسم التقنية بمدينة الخبر🚀");
}

function foundingMessage() {
  alert("🇸🇦يوم التأسيس يمثل العمق التاريخي والحضاري للمملكة العربية السعودية");
}

function toggleMenu() {
  var menu = document.getElementById("navMenu");
  
  if (menu.style.display === "block") {
  menu.style.display = "none" ;  
  } else{
  menu.style.display = "block" ;  
  }
  }
  function showNews(){
  document.getElementById("message").innerHTML="أهلاّ بكم في أخبار مدينة الخبر ، مدينة التطور والجمال في المنطقةالشرقية ";
  }