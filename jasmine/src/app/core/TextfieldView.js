/**
 * Base {@link Ext.form.field.Text} from which all other Textfields will extend
 * @extends  {Ext.form.field.Text}
 * @description {Proxy class for all Textfields in application}
 *
 * @return {Textfield}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.TextfieldView',{
    extend: 'Ext.form.field.Text',
    alias: ['widget.nsMYTEST.core.TextfieldView', 'widget.coreTxtF']
});
