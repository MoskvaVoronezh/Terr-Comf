$(document).ready(function () {
   
   // $("input[name=square-one]").keypress(function (e) {
   //    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
   //       return false;
   //    }
   // });
   // /* Запрет ввода букв в input */
   // $("input[name=replace_warmer]").keypress(function (e) {
   //    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
   //       return false;
   //    }
   // });
   // /* Запрет ввода букв в input */
   // $("input[name=radio_replace]").keypress(function (e) {
   //    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
   //       return false;
   //    }
   // }); 
   
   // var inputSquare = $("input[name = square-one]");
   // var selectHomeType = $
   // $('._calculator__btn').on("click", function () {

   //    var priceSquare = inputSquare.data("price");
   //    var squareval = inputSquare.val();

   //    var totalSquare = priceSquare * squareval;
   //    totalSquare = Math.ceil(totalSquare);
   //    console.log(totalSquare);
   // });

   $("input[name=square-one]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=replace_warmer]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=radio_replace]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });

   $('._calculator__btn').on("click", function (e) {
         e.preventDefault();
         /* Площадь квартиры */ 
         var priceSquare = $("input[name=square-one]").data("price");
         var squarePrice = $("input[name=square-one]").val();
         squarePrice = Math.ceil(squarePrice);
         var totalPriceSquare = priceSquare * squarePrice;
  
         /* Option Тип дома */     
         var totalHomeType = $("select[name=home_type] option:selected").data("price");
 
         /* Полотенцесушитель */   
         var priceReplaceWarmer = $("input[name=replace_warmer]").data("price");
         var ReplaceWarmerPrice = $("input[name=replace_warmer]").val();
         WarmerPrice = Math.ceil(ReplaceWarmerPrice);
         var totalPriceWarmer = priceReplaceWarmer * ReplaceWarmerPrice;

         /* Option Ремонт в ванной */
         var bathroomOption = $("select[name=repair_bathroom] option:selected").data("price");

         /* Замена водопровода */     
         var replaceWater = $("select[name=replace_water] option:selected").data("price");

         /* Замена водопровода */
         var dismantling = $("select[name=dismantling] option:selected").data("price");

         /* Замена радиаторов */
         var radioReplace = $("input[name=radio_replace]").data("price");
         var radioReplacePrice = $("input[name=radio_replace]").val();
         radioTotalPrice = Math.ceil(radioReplacePrice);
         var totalRadioReplace = radioReplace * radioReplacePrice;

         /* Электрика */  
         var electric = $("select[name=electric] option:selected").data("price");

         $(".rybl").addClass("_rybl_active")
         var TOTALPRICE = totalPriceSquare + totalHomeType + totalPriceWarmer + bathroomOption + replaceWater + totalRadioReplace + electric + dismantling;
 
         $(".all__price").text(TOTALPRICE);
         var saleTotal = TOTALPRICE * 0.1;
         var saleTotalPrice = TOTALPRICE - saleTotal;
         $(".all__sale").text(saleTotalPrice);
         
   });

});

