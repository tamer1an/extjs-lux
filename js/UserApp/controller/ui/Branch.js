Ext.define('UserApp.controller.ui.Branch',{
    extend:'UserApp.core.Controller',

    views: ['panel.branch.BranchListPanel','grid.branch.BranchGrid'  /*,'form.branch.CreateBranch','form.branch.BranchDetails'*/],

    init: function() {
        console.log(' init Branch ctrl ');
    }
});

