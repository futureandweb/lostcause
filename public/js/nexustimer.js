/*
*  Nexustimer.js
*
*   A Timer to countdown through each nexus time
* 
 */
var NexusTimer = (function(){
	var my = {},
		currentTime,
		nextNexusIn,
		el;

	var config = {
        'Sunday':[2,9,19],
        'Monday':[2,19],
        'Tuesday':[2],
        'Wednesday':[1],
        'Thursday':[],
        'Friday':[1,19],
        'Saturday':[2,9,19],
        'message':'Nexus is Now!'
      }

	my.initialize = function(element){
		el = element;
		run();
	}

	function print(){
		var total_seconds = nextNexusIn/1000;
		var hours = Math.floor(total_seconds / 3600);
  		total_seconds = total_seconds % 3600;
  		var minutes = Math.floor(total_seconds / 60);
  		total_seconds = total_seconds % 60;
  		var seconds = Math.floor(total_seconds);
  		hours = doubleDigits(hours);
  		minutes = doubleDigits(minutes);
  		seconds = doubleDigits(seconds);
  		$(el).html(hours + ":" + minutes + ":" + seconds);
	}

	function doubleDigits(num) {
    	return ( num < 10 ? "0" : "" ) + num;
  	}

	function run(){
		nextNexusIn = getNextTime(0);
		if(nextNexusIn == -1){return;}
		countDown();
	}

	function countDown(){
		if(nextNexusIn <= 999) {
			NexusNow(run, 60*60*1000); // wait an hour
		}
		nextNexusIn -= 1000;
		print();
		setTimeout(countDown, 1000);
	}

	function NexusNow(until){
		$(el).html(config.message)
		setTimeout(run, until);
	}

	function getNextTime(nt){
		currentTime = new Date();
		var hour = currentTime.getUTCHours();
		var nextTime = (nt == 0)? new Date() : nt;
		switch(currentTime.getUTCDay()){
			case 0:
				for(var i = 0; i < config.Sunday.length; i++){
					if(config.Sunday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Sunday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));
						return -1;
					}
					if(config.Sunday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Sunday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 1:
				for(var i = 0; i < config.Monday.length; i++){
					if(config.Monday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Monday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));
						return -1;
					}
					if(config.Monday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Monday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 2:
				for(var i = 0; i < config.Tuesday.length; i++){
					if(config.Tuesday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Tuesday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));
						return -1;
					}
					if(config.Tuesday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Tuesday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 3:
				for(var i = 0; i < config.Wednesday.length; i++){
					if(config.Wednesday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Wednesday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));
						return -1;
					}
					if(config.Wednesday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Wednesday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 4:
				for(var i = 0; i < config.Thursday.length; i++){
					if(config.Thursday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Thursday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));return -1;
					}
					if(config.Thursday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Thursday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 5:
				for(var i = 0; i < config.Friday.length; i++){
					if(config.Friday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Friday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));return -1;
					}
					if(config.Friday[i] > hour|| nextTime.getUTCDate() !== currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Friday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}	
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
			case 6:
				for(var i = 0; i < config.Saturday.length; i++){
					if(config.Saturday[i] === hour && nextTime.getUTCDate() === currentTime.getUTCDate()){
						nextTime.setUTCHours(config.Saturday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						NexusNow(getTimeDifference(currentTime, nextTime));return -1;
					}
					if(config.Saturday[i] > hour|| nextTime.getUTCDay() !== currentTime.getUTCDay()){
						nextTime.setUTCHours(config.Saturday[i]);
						nextTime.setUTCMinutes(0);
						nextTime.setUTCSeconds(0);
						return getTimeDifference(currentTime,nextTime);
					}
				}
				nextTime.setUTCDate(nextTime.getUTCDate()+1);
				getNextTime(nextTime);
		}
	}

	function getTimeDifference(now, then){
		return then - now;
	}



	return my;
})(NexusTimer || {});