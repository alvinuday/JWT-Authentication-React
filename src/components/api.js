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
        if (details.email === '' || details.name === '' || details.password === '') {
            reject("Fields cannot be left blank");
            sessionStorage.setItem("loggedIn",false)
        }
        if (!String(details.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            reject("Enter a valid Email");
            console.log("Invalid");
            sessionStorage.setItem("loggedIn",false)
        }
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
        // alert(message);
        document.getElementById("errorMessage").innerHTML = message;
    }).catch((error) => {
        console.log(error);
        sessionStorage.setItem("loggedIn",false);
        document.getElementById("errorMessage").innerHTML = error;
        // alert(error);
    })
}
export const loginApi = async (details) => {
    return new Promise((resolve, reject) => {
        //    var registered_users = JSON.parse(sessionStorage.getItem("users"));
        if (details.email === '' || details.name === '' || details.password === '') {
            reject("Fields cannot be left blank");
            sessionStorage.setItem("loggedIn",false)
        }
        if (!String(details.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            reject("Enter a valid Email");
            console.log("Invalid");
            sessionStorage.setItem("loggedIn",false)
        }
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
        // alert(message);
        document.getElementById("errorMessage").innerHTML = message;
    }).catch((error) => {
        console.log(error);
        // alert(error);
        sessionStorage.setItem("loggedIn",false);
        document.getElementById("errorMessage").innerHTML = error;
    })
}