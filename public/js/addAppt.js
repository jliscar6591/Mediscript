// $(document).ready(function () {
    
//     var apptTypeInput = $("#apptType");
//     var apptDateInput = $("#apptDate");

//     $(addApptForm).on("submit", handleApptFormSubmit);
    
//     var url = window.location.search;
//     var apptId;
//     var userId;
   
//     var updating = false;

   
//     if (url.indexOf("?appt_id=") !== -1) {
//         apptId = url.split("=")[1];
//         getApptData(apptId, "appt");
//     }
//     else if (url.indexOf("?user_id=") !== -1) {
//         userId = url.split("=")[1];
//     }

   
//     getUsers();

   
//     function handleApptFormSubmit(event) {
//         event.preventDefault();
        
//         if (!apptTypeInput.val().trim() || !apptDateInput.val().trim()) {
//             return;
//         }
//         var newAppt = {
//             appttype: apptTypeInput
//                 .val()
//                 .trim(),
//             apptdate: apptDateInput
//                 .val()
//                 .trim()
//         };

        
//         if (updating) {
//             newAppt.id = apptId;
//             updateAppt(newAppt);
//         } else {
//             submitMed(newAppt);
//         }
//     }

   
//     function submitAppt(med) {
//         $.post("/api/appts", appt, function () {
//             window.location.href = "/main";
//         });
//     }

    
//     function getApptData(id, type) {
//         var queryUrl;
//         switch (type) {
//             case "appt":
//                 queryUrl = "/api/appts/" + id;
//                 break;
//             case "user":
//                 queryUrl = "/api/user/" + id;
//                 break;
//             default:
//                 return;
//         }
//         $.get(queryUrl, function (data) {
//             if (data) {
//                 console.log(data.UserId || data.id)
//                 apptTypeInput.val(data.appttype);
//                 apptDateInput.val(data.appttime);
//                 updating = true;
//             }
//         });
//     }

   
//     function getUsers() {
//         $.get("/api/users", renderUserList);
//     }
//     function renderUserList(data) {
//         if (!data.length) {
//             window.location.href = "/users";
//         }
//         $(".hidden").removeClass("hidden");
//         var rowsToAdd = [];
//         for (var i = 0; i < data.length; i++) {
//             rowsToAdd.push(createUserRow(data[i]));
//         }
//         userSelect.empty();
//         console.log(rowsToAdd);
//         console.log(userSelect);
//         userSelect.append(rowsToAdd);
//         userSelect.val(userId);
//     }

//     function createUserRow(user) {
//         var listOption = $("<option>");
//         listOption.attr("value", user.id);
//         listOption.text(user.name);
//         return listOption;
//     }

//     function updateAppt(appt) {
//         $.ajax({
//                 method: "PUT",
//                 url: "/api/appts",
//                 data: med
//             })
//             .then(function () {
//                 window.location.href = "/main";
//             });
//     }
// });