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

    //!-----------------------------localStorage
    $("#submit").on("click",()=>{
        //!----------------validate each field
        if($("#date").val()==""){
            inputError();
            return;
        }

        if($("#time").val()==""){
            inputError();
            return;
        }

        if(($("#OHIP").val()=="")||(isNaN($("#OHIP").val())==true)){
            inputError();
            return;
        }

        if($("#email").val()==""){
            inputError();
            return;
        }

        if(($("#phone").val()=="")||(isNaN($("#phone").val())==true)){
            inputError();
            return;
        }

        //!----------------------store data
        var date=$("#date").val();
        var time=$("#time").val();
        var OHIP=$("#OHIP").val();''
        var email=$("#email").val();
        var phone=$("#phone").val();

        var info={
            "date":date,
            "time":time,
            "OHIP":OHIP,
            "email":email,
            "phone":phone
        }

        var number=localStorage.length;
        localStorage.setItem(`user${number}`,JSON.stringify(info)); 
    });
});

function inputError(){
    alert("Please enter valid value into blanks!");
}