export const registerApi = async (details) => {
    return new Promise((resolve, reject) => {
        //    var registered_users = JSON.parse(sessionStorage.getItem("users"));
        if(sessionStorage.getItem("users")===""){
            var registered_users = [{}];
        }
        else {
            var registered_users = JSON.parse(sessionStorage.getItem("users"));
        }
        setTimeout(() => {
        sessionStorage.setItem("loggedIn",false);
        var count = 0;
        for(var i=0; i<registered_users.length; i++) {
            if (registered_users[i].email === details.email) {
                count++;
            } 
           }
           if(count!==0) {
               resolve("Email already registered, Please Login");
               sessionStorage.setItem("loggedIn",false)
            }
           else {
               registered_users.push(details);
               sessionStorage.setItem("users",JSON.stringify(registered_users));
               sessionStorage.setItem("loggedIn",true);
               resolve("User Successfully Registered");
            }
            
        }, 500);
    }).then((message) => {
        alert(message);
    }).catch((error) => {
        console.log(error);
    })
}
export const loginApi = async (details) => {
    return new Promise((resolve, reject) => {
        //    var registered_users = JSON.parse(sessionStorage.getItem("users"));
        if(sessionStorage.getItem("users")===""){
            var registered_users = [{}];
        }
        else {
            var registered_users = JSON.parse(sessionStorage.getItem("users"));
        }
        setTimeout(() => {
        sessionStorage.setItem("loggedIn",false);
        var count = 0;
        for(var i=0; i<registered_users.length; i++) {
            if (registered_users[i].email === details.email) {
                if(registered_users[i].password === details.password) {
                    count++;
                }
            } 
           }
           if(count!==0) {
               sessionStorage.setItem("loggedIn",true);
               resolve("User Successfully Logged In");
            }
           else {
               resolve("User does not exist, Please Register or Password is incorrect ");
            }
            
        }, 500);
    }).then((message) => {
        alert(message);
    }).catch((error) => {
        console.log(error);
    })
}