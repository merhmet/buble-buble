$(document).ready(function() {
  $("#lblStarters").click(function(){
    $("#starters").slideToggle("slow");
    $("#startersArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
  });

$(document).ready(function(){
    $("#lblmains").click(function(){
      $("#mains").slideToggle("slow");
      $("#mainsArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
});

$(document).ready(function(){
    $("#lblClassics").click(function(){
      $("#classics").slideToggle("slow");
      $("#classicsArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
});

$(document).ready(function(){
    $("#lblBurgers").click(function(){
      $("#burgers").slideToggle("slow");
      $("#burgersArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
});

$(document).ready(function(){
    $("#lblSteaks").click(function(){
      $("#steaks").slideToggle("slow");
      $("#steaksArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
});

$(document).ready(function(){
    $("#lblSides").click(function(){
      $("#sides").slideToggle("slow");
      $("#sidesArrow")
        .toggleClass("fa-angle-down")
        .toggleClass("fa-angle-up");
    });
});

function menuCalc() {
  let soupCostTotal =
    document.getElementById("soupCost").value *
    document.getElementById("numSoup").value;
  let fishcakesCostTotal =
    document.getElementById("fishcakesCost").value *
    document.getElementById("numFishcakes").value;
  let prawnCostTotal =
    document.getElementById("prawnCost").value *
    document.getElementById("numPrawn").value;
  let sfChickenCostTotal =
    document.getElementById("sfChickenCost").value *
    document.getElementById("numSfChicken").value;
  let pateCostTotal =
    document.getElementById("pateCost").value *
    document.getElementById("numPate").value;
  let tartCostTotal =
    document.getElementById("tartCost").value *
    document.getElementById("numTart").value;
  let toastCostTotal =
    document.getElementById("toastCost").value *
    document.getElementById("numToast").value;
  let brieCostTotal =
    document.getElementById("brieCost").value *
    document.getElementById("numBrie").value;
  let skinsCostTotal =
    document.getElementById("skinsCost").value *
    document.getElementById("numSkins").value;
  let nachosCostTotal =
    document.getElementById("nachosCost").value *
    document.getElementById("numNachos").value;

  let magMainBeefCostTotal =
    document.getElementById("magMainBeefCost").value *
    document.getElementById("numMagMainBeef").value;
  let magMainChickenFilletCostTotal =
    document.getElementById("magMainChickenFilletCost").value *
    document.getElementById("numMagMainChickenFillet").value;
  let magMainPieCostTotal =
    document.getElementById("magMainPieCost").value *
    document.getElementById("numMagMainPie").value;
  let magMainJunctionChickenCostTotal =
    document.getElementById("magMainJunctionChickenCost").value *
    document.getElementById("numMagMainJunctionChicken").value;
  let magMainSalmonCostTotal =
    document.getElementById("magMainSalmonCost").value *
    document.getElementById("numMagMainSalmon").value;
  let magMainBangersMashCostTotal =
    document.getElementById("magMainBangersMashCost").value *
    document.getElementById("numMagMainBangersMash").value;
  let magMainHalloumiCostTotal =
    document.getElementById("magMainHalloumiCost").value *
    document.getElementById("numMagMainHalloumi").value;
  let magMainLambCostTotal =
    document.getElementById("magMainLambCost").value *
    document.getElementById("numMagMainLamb").value;
  let magMainWellingtonCostTotal =
    document.getElementById("magMainWellingtonCost").value *
    document.getElementById("numMagMainWellington").value;
  let magMainJerkChickenCostTotal =
    document.getElementById("magMainJerkChickenCost").value *
    document.getElementById("numMagMainJerkChicken").value;
  let magMainPorkCostTotal =
    document.getElementById("magMainPorkCost").value *
    document.getElementById("numMagMainPork").value;

  let classicPiesCostTotal =
    document.getElementById("classicPiesCost").value *
    document.getElementById("numClassicPies").value;
  let classicBeefChilliCostTotal =
    document.getElementById("classicBeefChilliCost").value *
    document.getElementById("numClassicBeefChilli").value;
  let classicBeanChilliCostTotal =
    document.getElementById("classicBeanChilliCost").value *
    document.getElementById("numClassicBeanChilli").value;
  let classicBeefLasagneCostTotal =
    document.getElementById("classicBeefLasagneCost").value *
    document.getElementById("numClassicBeefLasagne").value;
  let classicBatteredFishCostTotal =
    document.getElementById("classicBatteredFishCost").value *
    document.getElementById("numClassicBatteredFish").value;
  let classicScampiCostTotal =
    document.getElementById("classicScampiCost").value *
    document.getElementById("numClassicScampi").value;

  let burgerBlackBlueCostTotal =
    document.getElementById("burgerBlackBlueCost").value *
    document.getElementById("numBurgerBlackBlue").value;
  let burgerSmokehouseCostTotal =
    document.getElementById("burgerSmokehouseCost").value *
    document.getElementById("numBurgerSmokehouse").value;
  let burgerBbqMeltCostTotal =
    document.getElementById("burgerBbqMeltCost").value *
    document.getElementById("numBurgerBbqMelt").value;
  let burgerPorkyCostTotal =
    document.getElementById("burgerPorkyCost").value *
    document.getElementById("numBurgerPorky").value;
  let burgerBeanCostTotal =
    document.getElementById("burgerBeanCost").value *
    document.getElementById("numBurgerBean").value;

  let steakRumpCostTotal =
    document.getElementById("steakRumpCost").value *
    document.getElementById("numSteakRump").value;
  let steakSirloinCostTotal =
    document.getElementById("steakSirloinCost").value *
    document.getElementById("numSteakSirloin").value;
  let steakGammonCostTotal =
    document.getElementById("steakGammonCost").value *
    document.getElementById("numSteakGammon").value;
  let steakGrillCostTotal =
    document.getElementById("steakGrillCost").value *
    document.getElementById("numSteakGrill").value;
  let steakSurfCostTotal =
    document.getElementById("steakSurfCost").value *
    document.getElementById("numSteakSurf").value;
  let steakPepperCostTotal =
    document.getElementById("steakPepperCost").value *
    document.getElementById("numSteakPepper").value;
  let steakStiltonCostTotal =
    document.getElementById("steakStiltonCost").value *
    document.getElementById("numSteakStilton").value;
  let steakDianeCostTotal =
    document.getElementById("steakDianeCost").value *
    document.getElementById("numSteakDiane").value;
  let steakEnglishCostTotal =
    document.getElementById("steakEnglishCost").value *
    document.getElementById("numSteakEnglish").value;
  let steakWineCostTotal =
    document.getElementById("steakWineCost").value *
    document.getElementById("numSteakWine").value;
  let steakMushroomCostTotal =
    document.getElementById("steakMushroomCost").value *
    document.getElementById("numSteakMushroom").value;

  let sideGarlicBreadCostTotal =
    document.getElementById("sideGarlicBreadCost").value *
    document.getElementById("numSideGarlicBread").value;
  let sideGarlicBreadCheeseCostTotal =
    document.getElementById("sideGarlicBreadCheeseCost").value *
    document.getElementById("numSideGarlicBreadCheese").value;
  let sideChipsCostTotal =
    document.getElementById("sideChipsCost").value *
    document.getElementById("numSideChips").value;
  let sideFriesCostTotal =
    document.getElementById("sideFriesCost").value *
    document.getElementById("numSideFries").value;
  let sideSpiralsCostTotal =
    document.getElementById("sideSpiralsCost").value *
    document.getElementById("numSideSpirals").value;
  let sideRingsCostTotal =
    document.getElementById("sideRingsCost").value *
    document.getElementById("numSideRings").value;
  let sideBreadCostTotal =
    document.getElementById("sideBreadCost").value *
    document.getElementById("numSideBread").value;
  let sideVegCosttTotal =
    document.getElementById("sideVegCost").value *
    document.getElementById("numSideVeg").value;

  let starterCostTotal =
    soupCostTotal +
    fishcakesCostTotal +
    prawnCostTotal +
    sfChickenCostTotal +
    pateCostTotal +
    tartCostTotal +
    toastCostTotal +
    brieCostTotal +
    skinsCostTotal +
    nachosCostTotal;
  let mainCostTotal =
    magMainBeefCostTotal +
    magMainChickenFilletCostTotal +
    magMainPieCostTotal +
    magMainJunctionChickenCostTotal +
    magMainSalmonCostTotal +
    magMainBangersMashCostTotal +
    magMainHalloumiCostTotal +
    magMainLambCostTotal +
    magMainWellingtonCostTotal +
    magMainJerkChickenCostTotal +
    magMainPorkCostTotal;
  let classicCostTotal =
    classicPiesCostTotal +
    classicBeefChilliCostTotal +
    classicBeanChilliCostTotal +
    classicBeefLasagneCostTotal +
    classicBatteredFishCostTotal +
    classicScampiCostTotal;
  let burgerCostTotal =
    burgerBlackBlueCostTotal +
    burgerSmokehouseCostTotal +
    burgerBbqMeltCostTotal +
    burgerPorkyCostTotal +
    burgerBeanCostTotal;
  let steakCostTotal =
    steakRumpCostTotal +
    steakSirloinCostTotal +
    steakGammonCostTotal +
    steakGrillCostTotal +
    steakSurfCostTotal +
    steakPepperCostTotal +
    steakStiltonCostTotal +
    steakDianeCostTotal +
    steakEnglishCostTotal +
    steakWineCostTotal +
    steakMushroomCostTotal;
  let sideCostTotal =
    sideGarlicBreadCostTotal +
    sideGarlicBreadCheeseCostTotal +
    sideChipsCostTotal +
    sideFriesCostTotal +
    sideSpiralsCostTotal +
    sideRingsCostTotal +
    sideBreadCostTotal +
    sideVegCosttTotal;
  let costTotal =
    starterCostTotal +
    mainCostTotal +
    classicCostTotal +
    steakCostTotal +
    burgerCostTotal +
    sideCostTotal;

  document.getElementById("menuTotal").innerHTML =
          "£ " + costTotal.toFixed(2).toString();
}