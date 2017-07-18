/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
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
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#about"); 
         return false;
    });
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    
    
        /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#Gogle"); 
         return false;
    });
    
        /* button  .uib_w_13 */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_15 */
    
    
        /* button  .uib_w_15 */
    
    
        /* button  .uib_w_15 */
    
    
        /* button  .uib_w_15 */
    
    
        /* button  .uib_w_15 */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#Gogle"); 
         return false;
    });
    
        /* button  .uib_w_18 */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#Video"); 
         return false;
    });
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#Locateus"); 
         return false;
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
       document.location.href = 'tel:+60173158874';
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        alert("Mobile App Training\nMU DOT MY PLT\nwww.mu.my");

        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_21 */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_25").modal("toggle");  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
