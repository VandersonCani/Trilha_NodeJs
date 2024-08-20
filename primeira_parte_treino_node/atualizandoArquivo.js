const fs = require('fs');

fs.readFile('novo.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura
	console.log(data);
});

let data = "Olá Node.JS! UNISENAI 2023";
 
fs.writeFile("novo.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("Olá Node.JS! UNISENAI 2023");
    console.log(fs.readFileSync("novo.txt", "utf8"));
  }
});