// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = 1; i < companyName.length; i = i+1) {
    reversedCompanyName += companyName[companyName.length-i]
    //console.log(reversedCompanyName);
};
console.log(reversedCompanyName);
