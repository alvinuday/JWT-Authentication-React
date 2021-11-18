const fakeAuthProvider = {
    isAuthenticated: false,
    signin: function () 
    {
      isAuthenticated = true;
      //fake auth api call
    },
    signout: function () {
      isAuthenticated = false;
      //fake auth api call
    }
  },
  
  export { fakeAuthProvider };
  