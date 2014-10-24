$(function(){
	$('#ipt').val('hello');
	$.ajax({
		type: 'GET',
		url: 'http://twittersearchapi.herokuapp.com/search',
		success: function(response){
			var resObj = JSON.parse(response);
			
			$.each(resObj, function(index,value){
				$('#ulTweets').append('<li class="list-group-item"><span class="badge">'+ resObj[index].retweet_count +'</span>'+resObj[index].text+'</li>');
				
			});
		},
		error: function(error){
			console.log(error);
		}
	});
});
