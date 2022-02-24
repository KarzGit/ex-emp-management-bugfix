'use strict'
$(function(){
	$(document).on('keyup', '#cPassword', function(){
		let hostUrl='http://localhost:8080/toInsert/check';
		let inputPassword=$('#password').val();
		let inputCPassword=$('#cPassword').val();
		$.ajax({
			url:hostUrl,
			type:'post',
			dataType:'json',
			data:{
				password:inputPassword,
				cPassword:inputCPassword
			},
			async:true,
		}).done(function(data){
			console.log(data);
			console.dir(JSON.stringify(data));
			$('#duplicateMessage').text(data.duplicateMessage);	
		}).fail(function(XMLHttpRequest, textStatus, errorThrown){
			alert('エラーが発生しました');
			console.log('XMLHttpRequest:'+XMLHttpRequest.status);
			console.log('textStatus:'+textStatus);
			console.log('errorThrown:'+errorThrown.message);
		});
	});
});