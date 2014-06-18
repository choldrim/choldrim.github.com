function format_twitter(twitters, count) {
  var statusHTML = [];
  
  //for (var i=0; i<twitters.length; i++){
  for (var i = 0; i < count; i++){
	  var username = twitters[i].user.screen_name;
	  var text = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
		  return '<a href="'+url+'">'+url+'</a>';
	  }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
		  return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
	  });
	  statusHTML.push('<ul class="tweet_' + i + '">');
	  statusHTML.push('	<li>@'+username+'</li>');
	  statusHTML.push('	<li>'+text+'</li>');
	  statusHTML.push('	<li><a class="grey" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></li>');
	  statusHTML.push('</ul>');
  }
  
  return statusHTML.join('');

}

function relative_time(time_value) {
	var values = time_value.split(" ");
	time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
	var parsed_date = Date.parse(time_value);
	var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
	var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	delta = delta + (relative_to.getTimezoneOffset() * 60);

	if (delta < 60) {
		return 'minder dan een minuut geleden';
	} else if(delta < 120) {
		return 'ongeveer een minuut geleden';
	} else if(delta < (60*60)) {
		return (parseInt(delta / 60)).toString() + ' minuten geleden';
	} else if(delta < (120*60)) {
		return 'ongeveer een uur geleden';
	} else if(delta < (24*60*60)) {
		return 'ongeveer ' + (parseInt(delta / 3600)).toString() + ' uur geleden';
	} else if(delta < (48*60*60)) {
		return '1 dag geleden';
	} else {
		return (parseInt(delta / 86400)).toString() + ' dagen gelegen';
	}
}
