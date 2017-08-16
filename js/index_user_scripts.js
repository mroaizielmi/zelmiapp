/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
//    START

	$( "#submit_form_button" ).click(function() {
	  submit_to_joomla();
	});

	function submit_to_joomla(){ 
		var jform_username = document.getElementById("username").value;
		var jform_password = document.getElementById("password").value;

		var option = "com_mobile_extension";
		var task = "user.login";
		$.ajax({
                type: "POST",
                url: "http://mob.cordovaapp.com/front_end/api_login.php",
                data: {
                    username: jform_username,
                    password: jform_password
                },
                success: function (ret) {
                    var loginDetails = {};
                    console.log(ret);
                    if (ret.indexOf("success") > -1) {
                        alert("Logged in successfully!");
                        loginDetails.email = jform_username;
                        loginDetails.password = "NaN";
                        localStorage.setItem("login", btoa(JSON.stringify(loginDetails)));
                       // SET LANDING PAGE AFTER LOGIN
                         activate_page("#dashboard");
                    } else {
                        alert("Error in details or you have not activated your account. Check spam box too for activation mail!");
                    }
                },
                error: function(err) {
                    console.log(err);
                    alert("Conection error!");
                }
            });
	}
     
//     END
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Logout */
    $(document).on("click", ".uib_w_11", function(evt)
    {
       localStorage.removeItem("login");
        activate_page("#mainpage");
         return false;
    });
    
        /* button  Cordova */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#sistemcordova"); 
         return false;
    });
    
        /* button  info */
    $(document).on("click", ".uib_w_21", function(evt)
    {
        alert("Sistem cordova bergerak aktif 24jam secara automatik");
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_22 */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Pendapatan */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#pendapatan"); 
         return false;
    });
    
        /* button  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Bayaran */
    
    
        /* button  Ranking */
    
    
        /* button  Info Bank */
    
    
        /* button  Bayaran */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_page */
         activate_page("#bayaran"); 
         return false;
    });
    
        /* button  Ranking */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_page */
         activate_page("#ranking"); 
         return false;
    });
    
        /* button  Info Bank */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /*global activate_page */
         activate_page("#infobank"); 
         return false;
    });
    
        /* button  .uib_w_33 */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         /*global activate_page */
         activate_page("#pendapatan"); 
         return false;
    });
    
        /* button  info */
    $(document).on("click", ".uib_w_34", function(evt)
    {
     alert("segala bayaran payslip anda akan di update dalam sistem bayaran ini");   
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_38 */
    $(document).on("click", ".uib_w_38", function(evt)
    {
         /*global activate_page */
         activate_page("#pendapatan"); 
         return false;
    });
    
        /* button  info */
    $(document).on("click", ".uib_w_39", function(evt)
    {
     alert("Berfungsi untuk anda melihat up to date ranking anda. Bonus ranking akan di berikan setiap setahun sekali");
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_43 */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         /*global activate_page */
         activate_page("#pendapatan"); 
         return false;
    });
    
        /* button  info */
    $(document).on("click", ".uib_w_44", function(evt)
    {
    alert("Segala butiran bank anda perlu di isi untuk memudahkan kami membuat pembayaran ke dalam akaun bank anda. atau pun anda boleh terus whatsapp ke 011-21137801");    
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_48 */
    
    
        /* button  .uib_w_48 */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Idea Anda */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#ideaanda"); 
         return false;
    });
    
        /* button  info */
    $(document).on("click", ".uib_w_49", function(evt)
    {
    alert("Jika anda ada idea baru atau ada satu impian untuk memiliki sebuah aplikasi android atau ios. Boleh beri idea anda di sini. Kami akan cuba merialisasikan impian anda");    
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
