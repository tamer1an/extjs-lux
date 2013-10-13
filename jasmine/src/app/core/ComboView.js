/**
 * Base {@link Ext.form.ComboBox} from which all other buttons-views will extend
 * @extends  {Ext.form.ComboBox}
 * @description {Proxy class for all Combos in application}
 *
 * @return {ComboBox}
 *
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.core.ComboView',{
    extend: 'Ext.form.ComboBox',
    alias: ['widget.nsEOMS.core.Combo', 'widget.coreCombo']
});
