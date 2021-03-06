var C999_Common_Cuffs_CurrentStage = 0;
var C999_Common_Cuffs_HasKey = false;

// Chapter Common - Cuffs Load
function C999_Common_Cuffs_Load() {

	// Load the scene parameters
	LeaveIcon = "Leave";
	C999_Common_Cuffs_HasKey = (PlayerHasInventory("CuffsKey"))
	LoadInteractions();
	
	// Set the correct starting stage
	if (PlayerHasLockedInventory("Cuffs") == true) C999_Common_Cuffs_CurrentStage = 10;
	else C999_Common_Cuffs_CurrentStage = 0;

}

// Chapter Common - Cuffs Run, we draw the regular player image if the item is on
function C999_Common_Cuffs_Run() {
	BuildInteraction(C999_Common_Cuffs_CurrentStage);
	if (PlayerHasLockedInventory("Cuffs")) DrawPlayerImage(150, 240);
}

// Chapter Common - Cuffs Click, allow regular interactions and clicking on another item
function C999_Common_Cuffs_Click() {	
	ClickInteraction(C999_Common_Cuffs_CurrentStage);
	InventoryClick(GetClickedInventory(), LeaveChapter, LeaveScreen);
}

// Chapter Common - Self cuffs
function C999_Common_Cuffs_SelfCuff() {
	if ((Common_BondageAllowed) && (Common_SelfBondageAllowed)) {
		PlayerRemoveInventory("Cuffs", 1);
		PlayerLockInventory("Cuffs");
	} else {
		OveridenIntroText = "You fantasizes about being cuffed but realize that|it might not be the best time to cuff yourself.";
		C999_Common_Cuffs_CurrentStage = 0;
	}
}

// Chapter Common - Unlock
function C999_Common_Cuffs_Unlock() {
	PlayerAddInventory("Cuffs", 1);
	PlayerUnlockInventory("Cuffs");
}