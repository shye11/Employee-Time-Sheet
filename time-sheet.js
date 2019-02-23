var config = {
    apiKey: "AIzaSyDJPF_ynA6JlteXL-NWsGkOFI607MKGt_U",
    authDomain: "awesome-test-project-1.firebaseapp.com",
    databaseURL: "https://awesome-test-project-1.firebaseio.com",
    projectId: "awesome-test-project-1",
    storageBucket: "awesome-test-project-1.appspot.com",
    messagingSenderId: "772362837622"
  };
  firebase.initializeApp(config);
 
  var employeeName = "";
  var role = "";
  var startDate = 0;
  var monthlyRate = 0;
 
  $("#submit-button").on("click",function(event) {
      event.preventDefault();
 
      employeeName = $("#employeeName").val().trim();
      role = $("#role").val().trim();
      startDate = $("#startDate").val().trim();
      monthlyRate = $("#monthlyRate").val().trim();
 
      database.ref().push({
          employeeName: employeeName,
          role: role,
          startDate: startDate,
          monthlyRate: monthlyRate,
      });
  });
 
  database.ref().on("child_added",function(snapshot){
 
    var sv = snapshot.val();
    console.log(sv.employeeName);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);
 
  $("#employeeName").text(sv.employeeName);
  $("#role").text(sv.role);
  $("#startDate").text(sv.startDate);
  $("#monthlyRate").text(sv.monthlyRate);
  },
  function(errorObject){
    console.log("Errors handled: "+errorObject.code);
 });