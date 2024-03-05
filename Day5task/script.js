const resume =
{
    FirstName : "Meshil",
    LastName  : "Lenus ",
    Dob       : "03.10.2001",
    Skills    : "Web development,html,css,js,python",
    Languages : "tamil,english,telugu",
    Certficates:"Web development using Html,Css,Js ,Python and Machine learning ,Cloud computing,Data Analytics and Data Science",
    Education : {12:"58%",
                10:"78%",
                clg:"7.91"}
                    
}
//for loop

const objKeys=  Object.keys(resume)
const objValues=Object.values(resume)
console.log("keys",objKeys);
console.log("values",objValues);

for(let i=0;i<=objKeys.length;i++)
{
    console.log(objKeys[i], ":" ,objValues[i]);
   // console.log(objValues[i]);
}

//for in
for (key in resume) {
    console.log(`
    object key : ${key}
    object vaule : ${resume[key]}
    `);
  }

  //for each 
  objKeys.forEach ((value, index, accArr) => {
    console.log(
      `Value : ${value}
          index : ${index}
          accArr : ${accArr}
                     `
    );
  });

  //for off
  for (keys of objKeys) {
    console.log(keys);
  }


