// Initial data
var stateNCore          = 99;
var stateNCuboid        = 75;
var stateNEnchantingEgg = 65;
var stateNGeneral       = 40;
var stateNPlayer        = 40;
var stateNTalk          = 70;
var stateNTheEndAgain   = 99;
var stateNWorld         = 85;

// Global state
var stateGlobal         = 0;
stateGlobal += stateNCore;
stateGlobal += stateNCuboid;
stateGlobal += stateNEnchantingEgg;
stateGlobal += stateNGeneral;
stateGlobal += stateNPlayer;
stateGlobal += stateNTalk;
stateGlobal += stateNTheEndAgain;
stateGlobal += stateNWorld;
stateGlobal /= 8.0;

// Variables for the different modules

// NCore
var stateNCoreVal      = stateNCore + "%";
var stateNCoreString   = "Status: " + stateNCoreVal;
var stateNCoreStringFr = "Status : " + stateNCoreVal;

// NCuboid
var stateNCuboidVal      = stateNCuboid + "%";
var stateNCuboidString   = "Status: " + stateNCuboidVal;
var stateNCuboidStringFr = "Status : " + stateNCuboidVal;

// NEnchantingEgg
var stateNEnchantingEggVal      = stateNEnchantingEgg + "%";
var stateNEnchantingEggString   = "Status: " + stateNEnchantingEggVal;
var stateNEnchantingEggStringFr = "Status : " + stateNEnchantingEggVal;

// NGeneral
var stateNGeneralVal      = stateNGeneral + "%";
var stateNGeneralString   = "Status: " + stateNGeneralVal;
var stateNGeneralStringFr = "Status : " + stateNGeneralVal;

// NPlayer
var stateNPlayerVal      = stateNPlayer + "%";
var stateNPlayerString   = "Status: " + stateNPlayerVal;
var stateNPlayerStringFr = "Status : " + stateNPlayerVal;

// NTalk
var stateNTalkVal      = stateNTalk + "%";
var stateNTalkString   = "Status: " + stateNTalkVal;
var stateNTalkStringFr = "Status : " + stateNTalkVal;

// NTheEndAgain
var stateNTheEndAgainVal      = stateNTheEndAgain + "%";
var stateNTheEndAgainString   = "Status: " + stateNTheEndAgainVal;
var stateNTheEndAgainStringFr = "Status : " + stateNTheEndAgainVal;

// NWorld
var stateNWorldVal      = stateNWorld + "%";
var stateNWorldString   = "Status: " + stateNWorldVal;
var stateNWorldStringFr = "Status : " + stateNWorldVal;

// Global
var stateGlobalVal      = stateGlobal + "%";
var stateGlobalString   = "Global Status: " + stateGlobalVal;
var stateGlobalStringFr = "Status Global : " + stateGlobalVal;