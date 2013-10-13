/**
 * Base {@link Ext.form.field.Text} from which all other Textfields will extend
 * @extends  {Ext.form.field.Text}
 * @description {Proxy class for all Textfields in application}
 *
 * @return {Textfield}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.TextfieldView',{
    extend: 'Ext.form.field.Text',
    alias: ['widget.nsEOMS.core.TextfieldView', 'widget.coreTxtF']
});
