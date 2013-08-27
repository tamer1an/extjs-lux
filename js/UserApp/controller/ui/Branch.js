Ext.define('UserApp.controller.ui.Branch',{
    extend:'UserApp.core.Controller',

    /*,'form.branch.CreateBranch','form.branch.BranchDetails'*/
    views: ['panel.branch.BranchListPanel','grid.branch.BranchGrid'],

    init: function() {
        console.log(' init Bctrl ');
    }
});

