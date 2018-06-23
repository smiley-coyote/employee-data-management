// Initialize Firebase
var config = {
    apiKey: "AIzaSyAE-AqjYYZKZfBzwUPGjy_QAJcEiSU2Tm4",
    authDomain: "employee-data-management-240ca.firebaseapp.com",
    databaseURL: "https://employee-data-management-240ca.firebaseio.com",
    projectId: "employee-data-management-240ca",
    storageBucket: "",
    messagingSenderId: "96015915889"
};
firebase.initializeApp(config);
var database = firebase.database();


$("#add-user").on("click", function (event) {
    event.preventDefault();
    
    database.ref().push({
        name: $('#name-input').val().trim(),
        role: $('#role-input').val().trim(),
        date: $('#date-input').val().trim(),
        rate: $('#rate-input').val().trim()

    })

})
