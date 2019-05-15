var fs= require('fs');

var path= require('path');

var lib={};

lib.baseDir= path.join(__dirname, '/../.data/');

lib.create= function(dir, file, data, callback){
	fs.open(lib.baseDir+dir+'/'+file+'.json','wx', function(err,fileDescriptor){

	if(!err && fileDescriptor){
		var stringData= JSON.stringify(data);

		fs.writeFile(fileDescriptor,stringData,function(err){
			if(!err){
				fs.close(fileDescriptor,function(err){
					if(!err){
						callback(false);
					}else{
						callback("Error 1002: Error closing this files");
					}
				});
			}else{
				callback("Error 1001: Error wirting to new file");
			}
		});
	} else{
		callback('Err 1000: Could not create new file, it may already exist');
	}
	});
};


lib.read= function(dir,file,callback){
	fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf-8', function(err,data){
		callback(err,data);
	});
};

lib.update= function(dir,file,data,callback){
	fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', function(err, fileDescriptor){
		if(!err && fileDescriptor){
			var stringData= JSON.stringify(data);

			fs.close(fileDescriptor,function(err){
				if(!err){
					callback(false);
				}else{
					callback("Error 1006: Error truncating file");
				}
			});
		}else{
			callback("Error 1005: Could not open file for updating, it may not exist");
		}
	})
}


lib.delete= function(dir,file, callback){
	fs.unlink(lib.baseDir+dir+'/'+file+'.json', function(err){
		if(!err){
			callback(false);
		}
		else{
			callback('Error 1006: Error deleting the file');
		}

	})
}




module.exports= lib;