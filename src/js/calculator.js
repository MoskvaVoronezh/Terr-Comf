$(document).ready(function () {
   
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
   $("input[name=square-one1]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=replace_warmer1]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=radio_replace1]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   $("input[name=square-one2]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=replace_warmer2]").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
         return false;
      }
   });
   /* Запрет ввода букв в input */
   $("input[name=radio_replace2]").keypress(function (e) {
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

   $('.button-price1').on("click", function (e) {
      e.preventDefault();
      /* Площадь квартиры */
      var priceSquare1 = $("input[name=square-one1]").data("price");
      var squarePrice1 = $("input[name=square-one1]").val();
      squarePrice1 = Math.ceil(squarePrice1);
      var totalPriceSquare1 = priceSquare1 * squarePrice1;

      /* Option Тип дома */
      var totalHomeType1 = $("select[name=home_type1] option:selected").data("price");

      /* Полотенцесушитель */
      var priceReplaceWarmer1 = $("input[name=replace_warmer1]").data("price");
      var ReplaceWarmerPrice1 = $("input[name=replace_warmer1]").val();
      WarmerPrice1 = Math.ceil(ReplaceWarmerPrice1);
      var totalPriceWarmer1 = priceReplaceWarmer1 * ReplaceWarmerPrice1;

      /* Option Ремонт в ванной */
      var bathroomOption1 = $("select[name=repair_bathroom1] option:selected").data("price");

      /* Замена водопровода */
      var replaceWater1 = $("select[name=replace_water1] option:selected").data("price");

      /* Замена водопровода */
      var dismantling1 = $("select[name=dismantling1] option:selected").data("price");

      /* Замена радиаторов */
      var radioReplace1 = $("input[name=radio_replace1]").data("price");
      var radioReplacePrice1 = $("input[name=radio_replace1]").val();
      radioTotalPrice1 = Math.ceil(radioReplacePrice1);
      var totalRadioReplace1 = radioReplace1 * radioReplacePrice1;

      /* Электрика */
      var electric1 = $("select[name=electric1] option:selected").data("price");

      $(".rybl1").addClass("_rybl_active")
      var TOTALPRICE1 = totalPriceSquare1 + totalHomeType1 + totalPriceWarmer1 + bathroomOption1 + replaceWater1 + totalRadioReplace1 + electric1 + dismantling1;

      $(".all__price1").text(TOTALPRICE1);
      var saleTotal1 = TOTALPRICE1 * 0.1;
      var saleTotalPrice1 = TOTALPRICE1 - saleTotal1;
      $(".all__sale1").text(saleTotalPrice1);

   });

   $('.button-price2').on("click", function (e) {
      e.preventDefault();
      /* Площадь квартиры */
      var priceSquare2 = $("input[name=square-one2]").data("price");
      var squarePrice2 = $("input[name=square-one2]").val();
      squarePrice2 = Math.ceil(squarePrice2);
      var totalPriceSquare2 = priceSquare2 * squarePrice2;

      /* Option Тип дома */
      var totalHomeType2 = $("select[name=home_type2] option:selected").data("price");

      /* Полотенцесушитель */
      var priceReplaceWarmer2 = $("input[name=replace_warmer2]").data("price");
      var ReplaceWarmerPrice2 = $("input[name=replace_warmer2]").val();
      WarmerPrice2 = Math.ceil(ReplaceWarmerPrice2);
      var totalPriceWarmer2 = priceReplaceWarmer2 * ReplaceWarmerPrice2;

      /* Option Ремонт в ванной */
      var bathroomOption2 = $("select[name=repair_bathroom2] option:selected").data("price");

      /* Замена водопровода */
      var replaceWater2 = $("select[name=replace_water2] option:selected").data("price");

      /* Замена водопровода */
      var dismantling2 = $("select[name=dismantling2] option:selected").data("price");

      /* Замена радиаторов */
      var radioReplace2 = $("input[name=radio_replace2]").data("price");
      var radioReplacePrice2 = $("input[name=radio_replace2]").val();
      radioTotalPrice2= Math.ceil(radioReplacePrice2);
      var totalRadioReplace2 = radioReplace2 * radioReplacePrice2;

      /* Электрика */
      var electric2 = $("select[name=electric2] option:selected").data("price");

      $(".rybl2").addClass("_rybl_active")
      var TOTALPRICE2 = totalPriceSquare2 + totalHomeType2 + totalPriceWarmer2 + bathroomOption2 + replaceWater2 + totalRadioReplace2 + electric2 + dismantling2;

      $(".all__price2").text(TOTALPRICE2);
      var saleTotal2 = TOTALPRICE2 * 0.1;
      var saleTotalPrice2 = TOTALPRICE2 - saleTotal2;
      $(".all__sale2").text(saleTotalPrice2);

   });

});

