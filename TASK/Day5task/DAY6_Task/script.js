
//Write a “person” class to hold all the details


function GetPersonalDEtails(name,age,emailId,phonenumber){
    return {
        name,age,emailId,phonenumber,
    };
}
const person1 = GetPersonalDEtails("Meshil",23,"abc@gmail.com",123456789);
const person2 = GetPersonalDEtails("lenus",23,"abc@gmail.com",123456789);

console.log(person1);
console.log(person2);

//write a class to calculate the Uber price.
function UberRide(passenger_name,phnumber,start_location,end_location,kms_covered){
    return {
        passenger_name,phnumber,start_location,end_location, kms_covered
         ,
        Details : function(){
            
            console.log(`
            Passenger Name: ${passenger_name}
            Phone NUmber  : ${phnumber}
            Start Location: ${start_location}
            Destination   : ${end_location}
            Distance      : ${kms_covered}`)
            
        },
        price () {
         let price=(this.kms_covered *22);
             console.log(`
            price: ${price}`);  
                }
        
    }
}
const pass1=UberRide("Meshil",866723,"avadi","annanagar",22);
const pass2=UberRide("Meshil",866723,"avadi","annanagar",22);
pass1.Details();
pass1.price();
pass2.Details();
pass2.price();
