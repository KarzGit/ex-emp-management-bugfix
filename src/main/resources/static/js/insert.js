'use strict'
const password=document.getElementById('password');
const cPassword=document.getElementById('cPassword');
const unconfirm=document.getElementById('unconfirm');
const subBtn=document.getElementById('subBtn');
password.addEventListener("keyup", () => {
	if (password.value!=cPassword.value) {
		unconfirm.textContent='パスワードが一致しません';
		unconfirm.style.color='red';
		subBtn.disabled=true;
	}
	if(password.value==cPassword.value){
		unconfirm.textContent='';
		subBtn.disabled=false;
	}
});