/**
 * Base {@link Ext.form.Panel} from which all other form will extend
 * @extends  {Ext.form.Panel}
 * @description {Proxy class for all Forms in application}
 *
 * @return {Form}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.FormView',{
    extend: 'Ext.form.Panel',
    alias: ['widget.nsMYTEST.core.Form' , 'widget.coreForm'] //,fieldDefaults: {xtype:'textfield', fieldCls:'my-custom-class'}
});














































/*
Ext.create('Ext.form.Panel', {
    title: 'Book Info',
    renderTo: 'form-example',
    width: 300,
    bodyPadding: 5,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%'
    },
    items: [{
        xtype: 'hiddenfield',
        name: 'bookId'
    },{
        xtype: 'textfield',
        name: 'bookName',
        fieldLabel: 'Title'
    },{
        xtype: 'textfield',
        name: 'bookAuthor',
        fieldLabel: 'Author'
    }],
    buttons: [{
        text: 'Load',
        handler: function() {
            var form = this.up('form').getForm();
            form.load({
                url: 'data/form.json',
                failure: function(form, action) {
                    Ext.Msg.alert("Load failed", action.result.
                        errorMessage);
                }
            });
        }
    },{
        text: 'Submit',
        handler: function() {
            var form = this.up('form').getForm();
            form.submit({
                url: 'form-submit.php',
                waitMsg: 'Sending the info...',
                success: function(fp, o) {
                    Ext.Msg.alert('Success', 'Form submitted.');
                }
            });
        }
    }]
});

//Ext JS 4 also provides a validation mechanism. Let's see an example of how to
//validate some fields:
    Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Form Fields Validation',
        width: 340,
        bodyPadding: 5,
        renderTo: 'form-example',
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 90,
            anchor: '100%',
            msgTarget: 'under'
        },
        items: [{
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Required',
            allowBlank: false //1
        },{
            xtype: 'textfield',
            name: 'textfield2',
            fieldLabel: 'Min 2',
            minLength: 2 //2
        },{
            xtype: 'textfield',
            name: 'textfield3',
            fieldLabel: 'Max 5',
            maxLength: 5 //3
        },{
            xtype: 'textfield',
            name: 'textfield7',
            fieldLabel: 'Regex - Phone',
            regex: /^\d{3}-\d{3}-\d{4}$/, //4
            regexText: 'Must be in the format xxx-xxx-xxxx'
        },{
            xtype: 'textfield',
            name: 'textfield4',
            fieldLabel: 'Email',
            vtype: 'email' //5
        },{
            xtype: 'textfield',
            name: 'textfield5',
            fieldLabel: 'Alpha',
            vtype: 'alpha' //6
        },{
            xtype: 'textfield',
            name: 'textfield6',
            fieldLabel: 'AlphaNum',
            vtype: 'alphanum' //7
        },{
            xtype: 'textfield',
            name: 'textfield6',
            fieldLabel: 'Url',
            vtype: 'url' //8
        },{
            xtype: 'textfield',
            name: 'textfield8',
            fieldLabel: 'Custom: IP Address',
            vtype: 'IPAddress' //9
        }]
    });
//
//First, if we need to validate the information, we have to display something to the
//user if the data is not valid. To do so, we can configure msgTarget (message target
//location). It can take the following values: side, under, or top. In the preceding
//example, we configure it to be displayed under the field for all fields, but we can also
//configure each field separately.
//    Upgraded Grid, Tree, and Form
//    [ 236 ]
//The first validation (comment 1) is the allowBlank form field. This is a Boolean
//property, which, if set to true, will allow the user to leave the field blank. If it is set
//to false, the user will have to enter a value—it cannot be left blank—otherwise, the
//form will display an error message.
//    Then, we have the minLength and maxLength validations (comment 2 and comment
//3), through which we can set a value for the minimum number of characters and the
//maximum number of characters. In the preceding example, the minLength is set to 2
//and the maxLength to 5. Therefore, if the user inputs only one character or more than
//five characters, the form will display an error message.
//    We can perform another validation by creating a regular expression for the field
//(comment 4). In the previous example, we set a regex property. The input field value
//must have the following format: xxx-xxx-xxxx, where x can be any number from
//zero to nine. We can also configure the error message that the form will display to
//the user, in case the field does not match the regular expression.
//    The form package provides some validation types, also known as vtype. There are
//validations that are available, such as email, alpha, alphanum, and url.
//    A field with a validation type email (comment 5) must have a value in the format of
//an e-mail address, such as email@something.com.
//    A field with a validation type url (comment 6) must have a value in the format of a
//URL, such as http://something.com.
//    A field with validation type alpha (comment 7) allows the user to enter alphabetic
//values only, that is, from A to Z (lowercase and uppercase), and underscore (_).
//    A field with validation type alphanum (comment 8) allows the user to enter
//alphabetic and numeric values, that is, from A to Z (lowercase and uppercase), 0 to 9,
//    and underscore (_).
//    We can also create a customized validation type and reuse it. Let's create a validation
//type, vtype, to validate an IP address:
    Ext.apply(Ext.form.field.VTypes, {
        IPAddress: function(v) {
            return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v););
        },
        IPAddressText: 'Must be a numeric IP address',
        IPAddressMask: /[\d\.]/i
    });
*/
