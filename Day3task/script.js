//Display all the country's Flags,name ,regions , sub_regions,populations;

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  for (let i=0;i< data.length;i++ ){
  console.log("Name:" ,data[i].name.common);
  console.log("Flags:", data[i].flags);
  console.log("Region",data[i].region);
  console.log("Sub-Region",data[i].subregion);
  console.log("Population",data[i].population);
  
}

};


