$(document).ready(function()
{
    $('#form').validate({
        rules:{
            ename:{
                minlength:4,
                maxlength:20,
            },
            email:{
                email: true
            },


        },
        
    })


})

function up(){
    window.location='#top';
}


 var myScrollFunc = function () {
     var y = window.scrollY;
     if (y >= 500) {
         document.getElementById("ic").style.display='block';
     } else {
         document.getElementById("ic").style.display='none';
    }
 };

 window.addEventListener("scroll", myScrollFunc);
