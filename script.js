var lista = [
  {nome: "Alex"},
  {nome: "Evoney"},
  {nome: "Daniel"},
  {nome: "Julio"},
  {nome: "João Paulo"}
];

for(var indice = 0; indice < lista.length; indice++){
  if(lista[indice].nome === "Evoney"){
    console.log(lista[indice].nome);
  }
}