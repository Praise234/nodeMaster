var crypto= require('crypto');


var helpers= {};




helpers.hash= function(str){
	if(typeof(str)== 'string' && str.length > 0){
		var hash= crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
		return hash;
	}else{
		return false;
	}
};





















modules.exports= helpers;