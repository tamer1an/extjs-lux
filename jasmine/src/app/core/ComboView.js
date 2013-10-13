/**
 * Base {@link Ext.form.ComboBox} from which all other buttons-views will extend
 * @extends  {Ext.form.ComboBox}
 * @description {Proxy class for all Combos in application}
 *
 * @return {ComboBox}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('MYTEST.core.ComboView',{
    extend: 'Ext.form.ComboBox',
    alias: ['widget.nsMYTEST.core.Combo', 'widget.coreCombo']
});
