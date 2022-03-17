window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 4px #aaaaaa";
  } else {
    document.getElementById("navbar").style.padding = "30px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px";
  }
}

function showModal() {
	var modal = document.getElementById('modal');

	if (modal.style.display === "block") {
		modal.style.display = "none";
	}
	else{
		modal.style.display = "block";
	}
}

function showImg() {
	var e1 = document.getElementById('e1');
	var e2 = document.getElementById('e2');

	if (e1.style.display === "flex") {
		e1.style.display = "none";
	}
	else{
		e1.style.display = "flex";
	}
	if (e2.style.display === "flex") {
		e2.style.display = "none";
	}
	else{
		e2.style.display = "flex";
	}
}