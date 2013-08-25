Ext.define('UserApp.controller.ui.Branch',{
    extend:'UserApp.core.Controller',

    views: ['form.branch.CreateBranch','form.branch.BranchDetails','grid.branch.BranchList'],

    init: function() {
        console.log(' init Branch ctrl ');
    }
});

