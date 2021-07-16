$(document).ready(()=>{

    //!----------------------------------footer date
    var time=new Date();
    var month=time.getMonth();
    switch(month){
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="June";
            break;
        case 6:
            month="July";
            break;
        case 7:
            month="August";
            break;
        case 8:
            month="September";
            break;
        case 9:
            month="October";
            break;
        case 10:
            month="November";
            break;
        case 11:
            month="December";
            break;
    }

    var day=time.getDate();
    var year=time.getFullYear();
    $("#footer_date").html(`${month} ${day}, ${year}`);

    //!-------------------------------retrieve data
    var users=[];
    if(localStorage.length==0){
        $("#div1").html("There is no data stored in list");
        $("#div1").css("font-size","1.8em");
        $("#div1").css("font-weight","bold");
        $("#div1").css("color","red");
        $("#div1").css("text-align","center");
        $("#div1").css("margin-bottom","40%");
        $("#div1").css("margin-top","40%");
    }else{
        for(var i=0;i<localStorage.length;i++){
            var user=JSON.parse(localStorage.getItem(`user${i}`));
            users.push(user);
        }

        for(var i=0;i<users.length;i++){
            var user=users[i];
            $("ul").append(`<li style="font-size:1.5em">
            <div>user${i}</div> 
            <div>Date: ${user.date} 
            <div>time: ${user.time}</div>
            <div>OHIP: ${user.OHIP}</div>
            <div>Email: ${user.email}</div>
            <div>Phone: ${user.phone}</div>
            </li><br>`);
        }
    }
});