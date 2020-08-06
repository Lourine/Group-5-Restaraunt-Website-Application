var starter_price, price , drink_price, dessert_price, water_price ;
let total = 0;
function Getfood( starter,meal,drink,dessert,water, total ){
  this.starter = starter;
  this.meal = meal;
  this.drink = drink;
  this.dessert = dessert;
  this.water = water;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
   let fstarter = $("#starter option:selected").val();
   let fmeal = $("#meal option:selected").val();
   let fdrink = $("#drink option:selected").val();
   let fdessert = $("#dessert option:selected").val();
   let fwater = [];
   $.each($("input[name='water']:checked"), function(){            
       fwater.push($(this).val());
   });
   console.log(fwater.join(", "));

   switch(fstarter){
     case "0":
       starter_price = 0;
      break;
      case "Falafel croustillant":
      starter_price = 345;
    break;
    case "Egg plant roll ups":
      starter_price = 320;
    break;
    case "Chicken Liver Terrine":
      starter_price = 555;
    break;
    case "Carpaccio Du Beouf":
      starter_price = 730;
    break;
    default:
       console.log("error"); 
   }

   switch(fmeal){
    case "0":
      price =0;
    break;
    case "Penne alla Vodka Pasta":
       price = 720;
     break;
     case "Hainanese Chicken Rice":
       price = 650;
     break;
     case "Smoky Grilled Salmon + Spinach + Feta Succotash":
       price = 1050;
    break;
    case "Chicken Taco + Pan fried Veggies":
      price = 890;
    break;
    case "Eggplant Parmigiano":
      price = 770;
    break;
    case "Tomato + Basil + Pork Chops":
      price = 790;
    break;
    case "Beef Burger + Fries + Italian Green Salad":
      price = 1200;
    break;
    case "Deli Sandwiches + Chicken Nuggets + Heart of Palm Salad":
      price = 920;
    break;
    case "Chicken + Dumplings + Baked Potatoes":
      price = 945;
    break;
    case "Cheesy sausage + Stromboli + Green Veggies":
      price = 1150;
    break;
    case "German Potato Salad + grilled steak":
      price = 895;
    break;
    case "Stuffed Shells + BBQ Chicken":
      price = 730;
    break;
    case "Aged Beef Medallion":
      price = 420;
    break;
    case "Salmon fillet":
      price = 320;
    break;
    case "Provence Style Chicken Thighs":
      price = 510;
    break;
    case "Couscous":
      price = 400;
    break;
    default:
       console.log("error"); 
   }
   switch(fdrink){
      case "0":
        drink_price = 0;
      break;
      case "Passion juice":
        drink_price = 200;
      break;
      case "Mango juice":
        drink_price = 200;
      break;
      case "Watermelon juice":
        drink_price = 200;
      break;
      case "Pinacolada":
        drink_price = 450;
      break;
      case "Passion Colada":
        drink_price = 450;
      break;
      case "Strawberry Colada":
        drink_price = 450;
      break;
      case "Peach Colada":
        drink_price = 450;
      break;
      case "Vanilla Milkshake":
        drink_price = 320;
      break;
      case "Strawberry Milkshake":
        drink_price = 320;
      break;
      case "Soda":
        drink_price = 120;
      break;
      case "Wine":
        drink_price = 540;
      break;
      default:
        console.log("No price"); 
    }
    switch(fdessert){
     case "0" :
       dessert_price = 0;
     break;
     case "Chocolate molten cake":
       dessert_price = 180;
      break;
      case "Floating islands":
        dessert_price = 250;
      break;
      case "White chocolate cheese cake":
        dessert_price = 170;
      break;
      case "Hazelnut icecream":
        dessert_price = 135;
      break;
      default:
        console.log("No price")
    }
     
    let water_value = fwater.length*50;
    console.log("water value" + water_value);

    if((fstarter == "0") && (fmeal == "0") && (fdrink == "0") && (fdessert == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#info").show();
      $("div.choice").hide();
      alert("Please select  starter, meal, drink and dessert"); 
    }
    else{
      $("button.proceed").hide();
      $("#info").hide();
      $("div.choice").slideDown(1000);
    }

    total = starter_price + price + drink_price + dessert_price + water_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#foodstarter").html($("#starter option:selected").val());
    $("#foodmeal").html($("#meal option:selected").val());
    $("#fooddrink").html( $("#drink option:selected").val());
    $("#fooddessert").html($("#dessert option:selected").val());
    $("#foodwater").html(fwater.join(", "));
    $("#totals").html(total);
    

    $("button.addFood").click(function(){
      let fstarter = $("#starter option:selected").val();
      let fmeal = $("#meal option:selected").val();
      let fdrink = $("#drink option:selected").val();
      let fdessert = $("#dessert option:selected").val();
      let fwater = [];
      $.each($("input[name='water']:checked"), function(){            
          fwater.push($(this).val());
      });
      console.log(fwater.join(", "));

      switch(fstarter){
        case "0":
          starter_price = 0;
         break;
         case "Falafel croustillant":
         starter_price = 345;
       break;
       case "Egg plant roll ups":
         starter_price = 320;
       break;
       case "Chicken Liver Terrine":
         starter_price = 555;
       break;
       case "Carpaccio Du Beouf":
         starter_price = 730;
       break;
       default:
          console.log("error"); 
      }
      switch(fmeal){
        case "0":
          price =0;
        break;
        case "Penne alla Vodka Pasta":
           price = 720;
         break;
         case "Hainanese Chicken Rice":
           price = 650;
         break;
         case "Smoky Grilled Salmon + Spinach + Feta Succotash":
           price = 1050;
        break;
        case "Chicken Taco + Pan fried Veggies":
          price = 890;
        break;
        case "Eggplant Parmigiano":
          price = 770;
        break;
        case "Tomato + Basil + Pork Chops":
          price = 790;
        break;
        case "Beef Burger + Fries + Italian Green Salad":
          price = 1200;
        break;
        case "Deli Sandwiches + Chicken Nuggets + Heart of Palm Salad":
          price = 920;
        break;
        case "Chicken + Dumplings + Baked Potatoes":
          price = 945;
        break;
        case "Cheesy sausage + Stromboli + Green Veggies":
          price = 1150;
        break;
        case "German Potato Salad + grilled steak":
          price = 895;
        break;
        case "Stuffed Shells + BBQ Chicken":
          price = 730;
        break;
        case "Aged Beef Medallion":
            price = 420;
        break;
        case "Salmon fillet":
            price = 320;
        break;
        case "Provence Style Chicken Thighs":
            price = 510;
        break;
        case "Couscous":
            price = 400;
        break;
        default:
           console.log("error"); 
       }
       switch(fdrink){
          case "0":
            drink_price = 0;
          break;
          case "Passion juice":
            drink_price = 200;
          break;
          case "Mango juice":
            drink_price = 200;
          break;
          case "Watermelon juice":
            drink_price = 200;
          break;
          case "Pinacolada":
            drink_price = 450;
          break;
          case "Passion Colada":
            drink_price = 450;
          break;
          case "Strawberry Colada":
            drink_price = 450;
          break;
          case "Peach Colada":
            drink_price = 450;
          break;
          case "Vanilla Milkshake":
            drink_price = 320;
          break;
          case "Strawberry Milkshake":
            drink_price = 320;
          break;
          case "Soda":
            drink_price = 120;
          break;
          case "Wine":
            drink_price = 540;
          break;
          default:
            console.log("No price"); 
        }
        switch(fdessert){
         case "0" :
           dessert_price = 0;
         break;
         case "Chocolate molten cake":
           dessert_price = 180;
          break;
          case "Floating islands":
            dessert_price = 250;
          break;
          case "White chocolate cheese cake":
            dessert_price = 170;
          break;
          case "Hazelnut icecream":
            dessert_price = 135;
          break;
          default:
            console.log("No price")
        }
        let water_value = fwater.length*50;
        console.log("water value" + water_value);
        total = starter_price + price + drink_price + dessert_price + water_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new Getfood( fstarter, fmeal, fdrink, fdessert,fwater,total);

      $("#ordersmade").append('<tr><td id="foodstarter">' + newOrder.starter +'<tr><td id="foodmeal">'+newOrder.meal +'</td><td id="fooddrink">' + newOrder.drink + '</td><td id="fooddessert">'+newOrder.dessert + '</td><td id="foodwater">'+newOrder.water+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });
    
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addFood").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#foodtotal").append("Your bill is sh. "+checkoutTotal);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();
    });
   event.preventDefault();
  });
});


