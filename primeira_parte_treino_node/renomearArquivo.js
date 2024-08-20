const fs = require('fs');
//Enviando o caminho do arquivo que queremos renomear e o caminho/nome para sua nova situação
fs.rename('novo.txt', 'arquivoRenomeado.txt', function(err){
    //Caso a execução encontre algum erro
		if(err){
			//A execução irá parar e mostrará o erro
			throw err;	
		}else{
      //Caso não tenha erro, apenas a mensagem será exibida no terminal
      console.log('Arquivo renomeado');
    }
	});