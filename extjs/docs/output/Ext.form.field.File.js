Ext.data.JsonP.Ext_form_field_File({"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.form.FileUploadField</div><div class='alternate-class-name'>Ext.ux.form.FileUploadField</div><div class='alternate-class-name'>Ext.form.File</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='docClass'>Ext.AbstractComponent</a><div class='subclass '><a href='#!/api/Ext.Component' rel='Ext.Component' class='docClass'>Ext.Component</a><div class='subclass '><a href='#!/api/Ext.form.field.Base' rel='Ext.form.field.Base' class='docClass'>Ext.form.field.Base</a><div class='subclass '><a href='#!/api/Ext.form.field.Text' rel='Ext.form.field.Text' class='docClass'>Ext.form.field.Text</a><div class='subclass '><strong>Ext.form.field.File</strong></div></div></div></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='docClass'>Ext.form.Labelable</a></div><div class='dependency'><a href='#!/api/Ext.form.field.Field' rel='Ext.form.field.Field' class='docClass'>Ext.form.field.Field</a></div><div class='dependency'><a href='#!/api/Ext.util.Floating' rel='Ext.util.Floating' class='docClass'>Ext.util.Floating</a></div><div class='dependency'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a></div><div class='dependency'><a href='#!/api/Ext.util.Animate' rel='Ext.util.Animate' class='docClass'>Ext.util.Animate</a></div><div class='dependency'><a href='#!/api/Ext.state.Stateful' rel='Ext.state.Stateful' class='docClass'>Ext.state.Stateful</a></div><h4>Uses</h4><div class='dependency'><a href='#!/api/Ext.button.Button' rel='Ext.button.Button' class='docClass'>Ext.button.Button</a></div><div class='dependency'><a href='#!/api/Ext.layout.component.field.File' rel='Ext.layout.component.field.File' class='docClass'>Ext.layout.component.field.File</a></div><h4>Files</h4><div class='dependency'><a href='source/File.html#Ext-form-field-File' target='_blank'>File.js</a></div></pre><div class='doc-contents'><p>A file upload field which has custom styling and allows control over the button text and other\nfeatures of <a href=\"#!/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">text fields</a> like <a href=\"#!/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">empty text</a>.\nIt uses a hidden file input element behind the scenes to allow user selection of a file and to\nperform the actual upload during <a href=\"#!/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit</a>.</p>\n\n<p>Because there is no secure cross-browser way to programmatically set the value of a file input,\nthe standard Field <code>setValue</code> method is not implemented. The <code><a href=\"#!/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">getValue</a></code> method will return\na value that is browser-dependent; some have just the file name, some have a full path, some use\na fake path.</p>\n\n<p><strong>IMPORTANT:</strong> File uploads are not performed using normal 'Ajax' techniques; see the description for\n<a href=\"#!/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details.</p>\n\n<h1>Example Usage</h1>\n\n<pre class='inline-example '><code>Ext.create('Ext.form.Panel', {\n    title: 'Upload a Photo',\n    width: 400,\n    bodyPadding: 10,\n    frame: true,\n    renderTo: Ext.getBody(),\n    items: [{\n        xtype: 'filefield',\n        name: 'photo',\n        fieldLabel: 'Photo',\n        labelWidth: 50,\n        msgTarget: 'side',\n        allowBlank: false,\n        anchor: '100%',\n        buttonText: 'Select Photo...'\n    }],\n\n    buttons: [{\n        text: 'Upload',\n        handler: function() {\n            var form = this.up('form').getForm();\n            if(form.isValid()){\n                form.submit({\n                    url: 'photo-upload.php',\n                    waitMsg: 'Uploading your photo...',\n                    success: function(fp, o) {\n                        Ext.Msg.alert('Success', 'Your photo \"' + o.result.file + '\" has been uploaded.');\n                    }\n                });\n            }\n        }\n    }]\n});\n</code></pre>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-activeError' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='definedIn docClass'>Ext.form.Labelable</a><br/><a href='source/Labelable.html#Ext-form-Labelable-cfg-activeError' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.Labelable-cfg-activeError' class='name expandable'>activeError</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. ...</div><div class='long'><p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Use <a href=\"#!/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#!/api/Ext.form.Labelable-method-unsetActiveError\" rel=\"Ext.form.Labelable-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n</div></div></div><div id='cfg-activeErrorsTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='definedIn docClass'>Ext.form.Labelable</a><br/><a href='source/Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.Labelable-cfg-activeErrorsTpl' class='name expandable'>activeErrorsTpl</a><span> : <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></span></div><div class='description'><div class='short'>The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. ...</div><div class='long'><p>The template used to format the Array of error messages passed to <a href=\"#!/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n<p>Defaults to: <code>[&quot;&lt;tpl if=&quot;errors &amp;&amp; errors.length&quot;&gt;&quot;, &quot;&lt;ul&gt;&lt;tpl for=&quot;errors&quot;&gt;&lt;li&lt;tpl if=&quot;xindex == xcount&quot;&gt; class=&quot;last&quot;&lt;/tpl&gt;&gt;{.}&lt;/li&gt;&lt;/tpl&gt;&lt;/ul&gt;&quot;, &quot;&lt;/tpl&gt;&quot;]</code></p></div></div></div><div id='cfg-allowBlank' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.Text' rel='Ext.form.field.Text' class='definedIn docClass'>Ext.form.field.Text</a><br/><a href='source/Text.html#Ext-form-field-Text-cfg-allowBlank' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.Text-cfg-allowBlank' class='name expandable'>allowBlank</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Specify false to validate that the value's length is > 0 ...</div><div class='long'><p>Specify false to validate that the value's length is > 0</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-autoEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-autoEl' class='name expandable'>autoEl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...</div><div class='long'><p>A tag name or <a href=\"#!/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#!/api/Ext.AbstractComponent-method-getEl\" rel=\"Ext.AbstractComponent-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and\n<a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <strong>'div'</strong>. The more complex Sencha classes use a more\ncomplex DOM structure specified by their own <a href=\"#!/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n</div></div></div><div id='cfg-autoFitErrors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='definedIn docClass'>Ext.form.Labelable</a><br/><a href='source/Labelable.html#Ext-form-Labelable-cfg-autoFitErrors' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.Labelable-cfg-autoFitErrors' class='name expandable'>autoFitErrors</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Whether to adjust the component's body area to make room for 'side' or 'under'\nerror messages. ...</div><div class='long'><p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#!/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">error messages</a>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-autoRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-autoRender' class='name expandable'>autoRender</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span></div><div class='description'><div class='short'>This config is intended mainly for non-floating Components which may or may not be shown. ...</div><div class='long'><p>This config is intended mainly for non-<a href=\"#!/api/Ext.AbstractComponent-cfg-floating\" rel=\"Ext.AbstractComponent-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead of using\n<a href=\"#!/api/Ext.AbstractComponent-cfg-renderTo\" rel=\"Ext.AbstractComponent-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component to render itself\nupon first <em><a href=\"#!/api/Ext.AbstractComponent-event-show\" rel=\"Ext.AbstractComponent-event-show\" class=\"docClass\">show</a></em>. If <a href=\"#!/api/Ext.AbstractComponent-cfg-floating\" rel=\"Ext.AbstractComponent-cfg-floating\" class=\"docClass\">floating</a> is true, the value of this config is omited as if it is <code>true</code>.</p>\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first\nshow.</p>\n\n<p><strong>This defaults to <code>true</code> for the <a href=\"#!/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</strong></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-autoScroll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Component' rel='Ext.Component' class='definedIn docClass'>Ext.Component</a><br/><a href='source/Component.html#Ext-Component-cfg-autoScroll' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Component-cfg-autoScroll' class='name expandable'>autoScroll</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>true to use overflow:'auto' on the components layout element and show scroll bars automatically when necessary,\nfalse...</div><div class='long'><p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when necessary,\n<code>false</code> to clip any overflowing content.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-autoShow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-autoShow' class='name expandable'>autoShow</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to automatically show the component upon creation. ...</div><div class='long'><p>True to automatically show the component upon creation. This config option may only be used for\n<a href=\"#!/api/Ext.AbstractComponent-cfg-floating\" rel=\"Ext.AbstractComponent-cfg-floating\" class=\"docClass\">floating</a> components or components that use <a href=\"#!/api/Ext.AbstractComponent-cfg-autoRender\" rel=\"Ext.AbstractComponent-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-baseBodyCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='definedIn docClass'>Ext.form.Labelable</a><br/><a href='source/Labelable.html#Ext-form-Labelable-cfg-baseBodyCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.Labelable-cfg-baseBodyCls' class='name expandable'>baseBodyCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to be applied to the body content element. ...</div><div class='long'><p>The CSS class to be applied to the body content element.</p>\n<p>Defaults to: <code>&quot;x-form-item-body&quot;</code></p></div></div></div><div id='cfg-baseCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-baseCls' class='name expandable'>baseCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The base CSS class to apply to this components's element. ...</div><div class='long'><p>The base CSS class to apply to this components's element. This will also be prepended to elements within this\ncomponent like Panel's body will get a class x-panel-body. This means that if you create a subclass of Panel, and\nyou want it to get all the Panels styling for the element and the body, you leave the baseCls x-panel and use\ncomponentCls to add specific styling for this component.</p>\n<p>Defaults to: <code>&quot;x-component&quot;</code></p></div></div></div><div id='cfg-blankText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.Text' rel='Ext.form.field.Text' class='definedIn docClass'>Ext.form.field.Text</a><br/><a href='source/Text.html#Ext-form-field-Text-cfg-blankText' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.Text-cfg-blankText' class='name expandable'>blankText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The error text to display if the allowBlank validation fails ...</div><div class='long'><p>The error text to display if the <strong><a href=\"#!/api/Ext.form.field.Text-cfg-allowBlank\" rel=\"Ext.form.field.Text-cfg-allowBlank\" class=\"docClass\">allowBlank</a></strong> validation fails</p>\n<p>Defaults to: <code>&quot;This field is required&quot;</code></p></div></div></div><div id='cfg-border' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-border' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-border' class='name expandable'>border</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Specifies the border for this component. ...</div><div class='long'><p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or it can\nbe a CSS style specification for each style, for example: '10 5 3 10'.</p>\n</div></div></div><div id='cfg-buttonConfig' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.File' rel='Ext.form.field.File' class='definedIn docClass'>Ext.form.field.File</a><br/><a href='source/File.html#Ext-form-field-File-cfg-buttonConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.File-cfg-buttonConfig' class='name not-expandable'>buttonConfig</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>A standard <a href=\"#!/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a> config object.</p>\n</div><div class='long'><p>A standard <a href=\"#!/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a> config object.</p>\n</div></div></div><div id='cfg-buttonMargin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.File' rel='Ext.form.field.File' class='definedIn docClass'>Ext.form.field.File</a><br/><a href='source/File.html#Ext-form-field-File-cfg-buttonMargin' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.File-cfg-buttonMargin' class='name expandable'>buttonMargin</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels of space reserved between the button and the text field. ...</div><div class='long'><p>The number of pixels of space reserved between the button and the text field. Note that this only\napplies if <a href=\"#!/api/Ext.form.field.File-cfg-buttonOnly\" rel=\"Ext.form.field.File-cfg-buttonOnly\" class=\"docClass\">buttonOnly</a> = false.</p>\n<p>Defaults to: <code>3</code></p></div></div></div><div id='cfg-buttonOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.File' rel='Ext.form.field.File' class='definedIn docClass'>Ext.form.field.File</a><br/><a href='source/File.html#Ext-form-field-File-cfg-buttonOnly' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.File-cfg-buttonOnly' class='name expandable'>buttonOnly</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to display the file upload field as a button with no visible text field. ...</div><div class='long'><p>True to display the file upload field as a button with no visible text field. If true, all\ninherited Text members will still be available.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-buttonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.File' rel='Ext.form.field.File' class='definedIn docClass'>Ext.form.field.File</a><br/><a href='source/File.html#Ext-form-field-File-cfg-buttonText' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.File-cfg-buttonText' class='name expandable'>buttonText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The button text to display on the upload button. ...</div><div class='long'><p>The button text to display on the upload button. Note that if you supply a value for\n<a href=\"#!/api/Ext.form.field.File-cfg-buttonConfig\" rel=\"Ext.form.field.File-cfg-buttonConfig\" class=\"docClass\">buttonConfig</a>, the buttonConfig.text value will be used instead if available.</p>\n<p>Defaults to: <code>&quot;Browse...&quot;</code></p></div></div></div><div id='cfg-checkChangeBuffer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.Base' rel='Ext.form.field.Base' class='definedIn docClass'>Ext.form.field.Base</a><br/><a href='source/Base.html#Ext-form-field-Base-cfg-checkChangeBuffer' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.Base-cfg-checkChangeBuffer' class='name expandable'>checkChangeBuffer</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Defines a timeout in milliseconds for buffering checkChangeEvents that fire in rapid succession. ...</div><div class='long'><p>Defines a timeout in milliseconds for buffering <a href=\"#!/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a> that fire in rapid succession.\nDefaults to 50 milliseconds.</p>\n<p>Defaults to: <code>50</code></p></div></div></div><div id='cfg-checkChangeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.field.Base' rel='Ext.form.field.Base' class='definedIn docClass'>Ext.form.field.Base</a><br/><a href='source/Base.html#Ext-form-field-Base-cfg-checkChangeEvents' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.field.Base-cfg-checkChangeEvents' class='name expandable'>checkChangeEvents</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>A list of event names that will be listened for on the field's input element, which will cause\nthe field's value to b...</div><div class='long'><p>A list of event names that will be listened for on the field's <a href=\"#!/api/Ext.form.field.Base-property-inputEl\" rel=\"Ext.form.field.Base-property-inputEl\" class=\"docClass\">input element</a>, which will cause\nthe field's value to be checked for changes. If a change is detected, the <a href=\"#!/api/Ext.form.field.Base-event-change\" rel=\"Ext.form.field.Base-event-change\" class=\"docClass\">change event</a> will be\nfired, followed by validation if the <a href=\"#!/api/Ext.form.field.Base-cfg-validateOnChange\" rel=\"Ext.form.field.Base-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> option is enabled.</p>\n\n<p>Defaults to ['change', 'propertychange'] in Internet Explorer, and ['change', 'input', 'textInput', 'keyup',\n'dragdrop'] in other browsers. This catches all the ways that field values can be changed in most supported\nbrowsers; the only known exceptions at the time of writing are:</p>\n\n<ul>\n<li>Safari 3.2 and older: cut/paste in textareas via the context menu, and dragging text into textareas</li>\n<li>Opera 10 and 11: dragging text into text fields and textareas, and cut via the context menu in text fields\nand textareas</li>\n<li>Opera 9: Same as Opera 10 and 11, plus paste from context menu in text fields and textareas</li>\n</ul>\n\n\n<p>If you need to guarantee on-the-fly change notifications including these edge cases, you can call the\n<a href=\"#!/api/Ext.form.field.Base-method-checkChange\" rel=\"Ext.form.field.Base-method-checkChange\" class=\"docClass\">checkChange</a> method on a repeating interval, e.g. using <a href=\"#!/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a>, or if the field is within\na <a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>, you can use the FormPanel's <a href=\"#!/api/Ext.form.Panel-cfg-pollForChanges\" rel=\"Ext.form.Panel-cfg-pollForChanges\" class=\"docClass\">Ext.form.Panel.pollForChanges</a> configuration to set up\nsuch a task automatically.</p>\n</div></div></div><div id='cfg-childEls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-childEls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-childEls' class='name expandable'>childEls</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]</span></div><div class='description'><div class='short'>An array describing the child elements of the Component. ...</div><div class='long'><p>An array describing the child elements of the Component. Each member of the array\nis an object with these properties:</p>\n\n<ul>\n<li><code>name</code> - The property name on the Component for the child element.</li>\n<li><code>itemId</code> - The id to combine with the Component's id that is the id of the child element.</li>\n<li><code>id</code> - The id of the child element.</li>\n</ul>\n\n\n<p>If the array member is a string, it is equivalent to <code>{ name: m, itemId: m }</code>.</p>\n\n<p>For example, a Component which renders a title and body text:</p>\n\n<pre><code>Ext.create('Ext.Component', {\n    renderTo: Ext.getBody(),\n    renderTpl: [\n        '&lt;h1 id=\"{id}-title\"&gt;{title}&lt;/h1&gt;',\n        '&lt;p&gt;{msg}&lt;/p&gt;',\n    ],\n    renderData: {\n        title: \"Error\",\n        msg: \"Something went wrong\"\n    },\n    childEls: [\"title\"],\n    listeners: {\n        afterrender: function(cmp){\n            // After rendering the component will have a title property\n            cmp.title.setStyle({color: \"red\"});\n        }\n    }\n});\n</code></pre>\n\n<p>A more flexible, but somewhat slower, approach is <a href=\"#!/api/Ext.AbstractComponent-cfg-renderSelectors\" rel=\"Ext.AbstractComponent-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a>.</p>\n</div></div></div><div id='cfg-clearCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Labelable' rel='Ext.form.Labelable' class='definedIn docClass'>Ext.form.Labelable</a><br/><a href='source/Labelable.html#Ext-form-Labelable-cfg-clearCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.form.Labelable-cfg-clearCls' class='name expandable'>clearCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide...</div><div class='long'><p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing.</p>\n<p>Defaults to: <code>&quot;x-clear&quot;</code></p></div></div></div><div id='cfg-cls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-cls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-cls' class='name expandable'>cls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to this component's Element. ...</div><div class='long'><p>An optional extra CSS class that will be added to this component's Element. This can be useful\nfor adding customized styles to the component or any of its children using standard CSS rules.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-componentCls' class='member  inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractComponent' rel='Ext.AbstractComponent' class='definedIn docClass'>Ext.AbstractComponent</a><br/><a href='source/AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractComponent-cfg-componentCls' class='name not-expandable'>componentCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>CSS Class to be added to a components root level element to give distinction to it via styling.</p>\n</div><div class='long'><p>CSS Class to be added to a components root level element to give distinction to it via styling.</p>\n</div></div></div><div id='cfg-componentLayout' class='member  inherited'><a href='#' class='side expandable'>