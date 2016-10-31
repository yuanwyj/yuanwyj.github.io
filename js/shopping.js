/*
* author: yuanzp
* date: 2016/10/31
*/

window.onload = function() {
	var piclist =document.getElementsByClassName("show");
	change(piclist);

}
function change(item) {
	var t;
	item.className = 'item';
	item.nextSibling.className = "show";

	t = setTimeout('change()',2000);
}