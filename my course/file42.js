// OBJECTS INSIDE ARRAY 
// VERY USEFUL IN REAL WORLD APPLICATION

const users = [
    {userId: 1, firstName: "harshit",gender: "male"},
    {userId: 2, firstName: "mohiit",gender: "male"},
    {userId: 3, firstName: "nitish",gender: "male"},
]


// USING FOR LOOP TO GET THIS VALUE 
for(let user of users){
    console.log(user.firstName,user.gender,user.userId)
}