export const register = async (details) => {
    return new Promise((resolve, reject) => {
       var registered_users = JSON.parse(sessionStorage.getItem("users"));
       setTimeout(() => {
           var count = 0;
           for(var i=0; i<registered_users.length; i++) {
               if (registered_users[i].email === details.email) {
                   count++;
               } 
           }
           if(count!==0) {
               reject("Email already registered, Please Login");
           }
           else {
               registered_users.push(details);
               sessionStorage.setItem("users",JSON.stringify(registered_users));
               resolve("User Successfully Registered");
           }
           
        }, 500);
    }).then((message) => {
        alert(message);
    })
}
// export const login