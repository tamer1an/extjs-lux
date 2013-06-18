/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/*
 * This is a derivative of the similarly named class in the YUI Library.
 * The original license:
 * Copyright (c) 2006, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * http://developer.yahoo.net/yui/license.txt
 */


/**
 * Defines the interface and base operation of items that that can be
 * dragged or can be drop targets.  It was designed to be extended, overriding
 * the event handlers for startDrag, onDrag, onDragOver and onDragOut.
 * Up to three html elements can be associated with a DragDrop instance:
 *
 * - linked element: the element that is passed into the constructor.
 *   This is the element which defines the boundaries for interaction with
 *   other DragDrop objects.
 *
 * - handle element(s): The drag operation only occurs if the element that
 *   was clicked matches a handle element.  By default this is the linked
 *   element, but there are times that you will want only a portion of the
 *   linked element to initiate the drag operation, and the setHandleElId()
 *   method provides a way to define this.
 *
 * - drag element: this represents the element that would be moved along
 *   with the cursor during a drag operation.  By default, this is the linked
 *   element itself as in {@link Ext.dd.DD}.  setDragElId() lets you define
 *   a separate element that would be moved, as in {@link Ext.dd.DDProxy}.
 *
 * This class should not be instantiated until the onload event to ensure that
 * the associated elements are available.
 * The following would define a DragDrop obj that would interact with any
 * other DragDrop obj in the "group1" group:
 *
 *     dd = new Ext.dd.DragDrop("div1", "group1");
 *
 * Since none of the event handlers have been implemented, nothing would
 * actually happen if you were to run the code above.  Normally you would
 * override this class or one of the default implementations, but you can
 * also override the methods you want on an instance of the class...
 *
 *     dd.onDragDrop = function(e, id) {
 *         alert("dd was dropped on " + id);
 *     }
 *
 */
Ext.define('Ext.dd.DragDrop', {
    requires: ['Ext.dd.DragDropManager'],

    /**
     * Creates new DragDrop.
     * @param {String} id of the element that is linked to this instance
     * @param {String} sGroup the group of related DragDrop objects
     * @param {Object} config an object containing configurable attributes.
     * Valid properties for DragDrop:
     *
     * - padding
     * - isTarget
     * - maintainOffset
     * - primaryButtonOnly
     */
    constructor: function(id, sGroup, config) {
        if(id) {
            this.init(id, sGroup, config);
        }
    },

    /**
     * Set to false to enable a DragDrop object to fire drag events while dragging
     * over its own Element. Defaults to true - DragDrop objects do not by default
     * fire drag events to themselves.
     * @property ignoreSelf
     * @type Boolean
     */

    /**
     * The id of the element associated with this object.  This is what we
     * refer to as the "linked element" because the size and position of
     * this element is used to determine when the drag and drop objects have
     * interacted.
     * @property id
     * @type String
     */
    id: null,

    /**
     * Configuration attributes passed into the constructor
     * @property config
     * @type Object
     */
    config: null,

    /**
     * The id of the element that will be dragged.  By default this is same
     * as the linked element, but could be changed to another element. Ex:
     * Ext.dd.DDProxy
     * @property dragElId
     * @type String
     * @private
     */
    dragElId: null,

    /**
     * The ID of the element that initiates the drag operation.  By default
     * this is the linked element, but could be changed to be a child of this
     * element.  This lets us do things like only starting the drag when the
     * header element within the linked html element is clicked.
     * @property handleElId
     * @type String
     * @private
     */
    handleElId: null,

    /**
     * An object who's property names identify HTML tags to be considered invalid as drag handles.
     * A non-null property value identifies the tag as invalid. Defaults to the
     * following value which prevents drag operations from being initiated by &lt;a> elements:<pre><code>
{
    A: "A"
}</code></pre>
     * @property invalidHandleTypes
     * @type Object
     */
    invalidHandleTypes: null,

    /**
     * An object who's property names identify the IDs of elements to be considered invalid as drag handles.
     * A non-null property value identifies the ID as invalid. For example, to prevent
     * dragging from being initiated on element ID "foo", use:<pre><code>
{
    foo: true
}</code></pre>
     * @property invalidHandleIds
     * @type Object
     */
    invalidHandleIds: null,

    /**
     * An Array of CSS class names for elements to be considered in valid as drag handles.
     * @property {String[]} invalidHandleClasses
     */
    invalidHandleClasses: null,

    /**
     * The linked element's absolute X position at the time the drag was
     * started
     * @property startPageX
     * @type Number
     * @private
     */
    startPageX: 0,

    /**
     * The linked element's absolute X position at the time the drag was
     * started
     * @property startPageY
     * @type Number
     * @private
     */
    startPageY: 0,

    /**
     * The group defines a logical collection of DragDrop objects that are
     * related.  Instances only get events when interacting with other
     * DragDrop object in the same group.  This lets us define multiple
     * groups using a single DragDrop subclass if we want.
     * @property groups
     * @type Object An object in the format {'group1':true, 'group2':true}
     */
    groups: null,

    /**
     * Individual drag/drop instances can be locked.  This will prevent
     * onmousedown start drag.
     * @property locked
     * @type Boolean
     * @private
     */
    locked: false,

    /**
     * Locks this instance
     */
    lock: function() {
        this.locked = true;
    },

    /**
     * When set to true, other DD objects in cooperating DDGroups do not receive
     * notification events when this DD object is dragged over them. Defaults to false.
     * @property moveOnly
     * @type Boolean
     */
    moveOnly: false,

    /**
     * Unlocks this instace
     */
    unlock: function() {
        this.locked = false;
    },

    /**
     * By default, all instances can be a drop target.  This can be disabled by
     * setting isTarget to false.
     * @property isTarget
     * @type Boolean
     */
    isTarget: true,

    /**
     * The padding configured for this drag and drop object for calculating
     * the drop zone intersection with this object.
     * An array containing the 4 padding values: [top, right, bottom, left]
     * @property {Number[]} padding
     */
    padding: null,

    /**
     * Cached reference to the linked element
     * @property _domRef
     * @private
     */
    _domRef: null,

    /**
     * Internal typeof flag
     * @property __ygDragDrop
     * @private
     */
    __ygDragDrop: true,

    /**
     * Set to true when horizontal contraints are applied
     * @property constrainX
     * @type Boolean
     * @private
     */
    constrainX: false,

    /**
     * Set to true when vertical contraints are applied
     * @property constrainY
     * @type Boolean
     * @private
     */
    constrainY: false,

    /**
     * The left constraint
     * @property minX
     * @type Number
     * @private
     */
    minX: 0,

    /**
     * The right constraint
     * @property maxX
     * @type Number
     * @private
     */
    maxX: 0,

    /**
     * The up constraint
     * @property minY
     * @type Number
     * @private
     */
    minY: 0,

    /**
     * The down constraint
     * @property maxY
     * @type Number
     * @private
     */
    maxY: 0,

    /**
     * Maintain offsets when we resetconstraints.  Set to true when you want
     * the position of the element relative to its parent to stay the same
     * when the page changes
     *
     * @property maintainOffset
     * @type Boolean
     */
    maintainOffset: false,

    /**
     * Array of pixel locations the element will snap to if we specified a
     * horizontal graduation/interval.  This array is generated automatically
     * when you define a tick interval.
     * @property {Number[]} xTicks
     */
    xTicks: null,

    /**
     * Array of pixel locations the element will snap to if we specified a
     * vertical graduation/interval.  This array is generated automatically
     * when you define a tick interval.
     * @property {Number[]} yTicks
     */
    yTicks: null,

    /**
     * By default the drag and drop instance will only respond to the primary
     * button click (left button for a right-handed mouse).  Set to true to
     * allow drag and drop to start with any mouse click that is propogated
     * by the browser
     * @property primaryButtonOnly
     * @type Boolean
     */
    primaryButtonOnly: true,

    /**
     * The available property is false until the linked dom element is accessible.
     * @property available
     * @type Boolean
     */
    available: false,

    /**
     * By default, drags can only be initiated if the mousedown occurs in the
     * region the linked element is.  This is done in part to work around a
     * bug in some browsers that mis-report the mousedown if the previous
     * mouseup happened outside of the window.  This property is set to true
     * if outer handles are defined. Defaults to false.
     *
     * @property hasOuterHandles
     * @type Boolean
     */
    hasOuterHandles: false,

    /**
     * Code that executes immediately before the startDrag event
     * @private
     */
    b4StartDrag: function(x, y) { },

    /**
     * Abstract method called after a drag/drop object is clicked
     * and the drag or mousedown time thresholds have beeen met.
     * @param {Number} X click location
     * @param {Number} Y click location
     */
    startDrag: function(x, y) { /* override this */ },

    /**
     * Code that executes immediately before the onDrag event
     * @private
     */
    b4Drag: function(e) { },

    /**
     * Abstract method called during the onMouseMove event while dragging an
     * object.
     * @param {Event} e the mousemove event
     */
    onDrag: function(e) { /* override this */ },

    /**
     * Abstract method called when this element fist begins hovering over
     * another DragDrop obj
     * @param {Event} e the mousemove event
     * @param {String/Ext.dd.DragDrop[]} id In POINT mode, the element
     * id this is hovering over.  In INTERSECT mode, an array of one or more
     * dragdrop items being hovered over.
     */
    onDragEnter: function(e, id) { /* override this */ },

    /**
     * Code that executes immediately before the onDragOver event
     * @private
     */
    b4DragOver: function(e) { },

    /**
     * Abstract method called when this element is hovering over another
     * DragDrop obj
     * @param {Event} e the mousemove event
     * @param {String/Ext.dd.DragDrop[]} id In POINT mode, the element
     * id this is hovering over.  In INTERSECT mode, an array of dd items
     * being hovered over.
     */
    onDragOver: function(e, id) { /* override this */ },

    /**
     * Code that executes immediately before the onDragOut event
     * @private
     */
    b4DragOut: function(e) { },

    /**
     * Abstract method called when we are no longer hovering over an element
     * @param {Event} e the mousemove event
     * @param {String/Ext.dd.DragDrop[]} id In POINT mode, the element
     * id this was hovering over.  In INTERSECT mode, an array of dd items
     * that the mouse is no longer over.
     */
    onDragOut: function(e, id) { /* override this */ },

    /**
     * Code that executes immediately before the onDragDrop event
     * @private
     */
    b4DragDrop: function(e) { },

    /**
     * Abstract method called when this item is dropped on another DragDrop
     * obj
     * @param {Event} e the mouseup event
     * @param {String/Ext.dd.DragDrop[]} id In POINT mode, the element
     * id this was dropped on.  In INTERSECT mode, an array of dd items this
     * was dropped on.
     */
    onDragDrop: function(e, id) { /* override this */ },

    /**
     * Abstract method called when this item is dropped on an area with no
     * drop target
     * @param {Event} e the mouseup event
     */
    onInvalidDrop: function(e) { /* override this */ },

    /**
     * Code that executes immediately before the endDrag event
     * @private
     */
    b4EndDrag: function(e) { },

    /**
     * Called when we are done dragging the object
     * @param {Event} e the mouseup event
     */
    endDrag: function(e) { /* override this */ },

    /**
     * Code executed immediately before the onMouseDown event
     * @param {Event} e the mousedown event
     * @private
     */
    b4MouseDown: function(e) {  },

    /**
     * Called when a drag/drop obj gets a mousedown
     * @param {Event} e the mousedown event
     */
    onMouseDown: function(e) { /* override this */ },

    /**
     * Called when a drag/drop obj gets a mouseup
     * @param {Event} e the mouseup event
     */
    onMouseUp: function(e) { /* override this */ },

    /**
     * Override the onAvailable method to do what is needed after the initial
     * position was determined.
     */
    onAvailable: function () {
    },

    /**
     * @property {Object} defaultPadding
     * Provides default constraint padding to "constrainTo" elements.
     */
    defaultPadding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },

    /**
     * Initializes the drag drop object's constraints to restrict movement to a certain element.
     *
     * Usage:
     *
     *     var dd = new Ext.dd.DDProxy("dragDiv1", "proxytest",
     *                    { dragElId: "existingProxyDiv" });
     *     dd.startDrag = function(){
     *         this.constrainTo("parent-id");
     *     };
     *
     * Or you can initalize it using the {@link Ext.Element} object:
     *
     *     Ext.get("dragDiv1").initDDProxy("proxytest", {dragElId: "existingProxyDiv"}, {
     *         startDrag : function(){
     *             this.constrainTo("parent-id");
     *         }
     *     });
     *
     * @param {String/HTMLElement/Ext.Element} constrainTo The element or element ID to constrain to.
     * @param {Object/Number} pad (optional) Pad provides a way to specify "padding" of the constraints,
     * and can be either a number for symmetrical padding (4 would be equal to `{left:4, right:4, top:4, bottom:4}`) or
     * an object containing the sides to pad. For example: `{right:10, bottom:10}`
     * @param {Boolean} inContent (optional) Constrain the draggable in the content box of the element (inside padding and borders)
     */
    constrainTo : function(constrainTo, pad, inContent){
        if(Ext.isNumber(pad)){
            pad = {left: pad, right:pad, top:pad, bottom:pad};
        }
        pad = pad || this.defaultPadding;
        var b = Ext.get(this.getEl()).getBox(),
            ce = Ext.get(constrainTo),
            s = ce.getScroll(),
            c,
            cd = ce.dom;
        if(cd == document.body){
            c = { x: s.left, y: s.top, width: Ext.Element.getViewWidth(), height: Ext.Element.getViewHeight()};
        }else{
            var xy = ce.getXY();
            c = {x : xy[0], y: xy[1], width: cd.clientWidth, height: cd.clientHeight};
        }


        var topSpace = b.y - c.y,
            leftSpace = b.x - c.x;

        this.resetConstraints();
        this.setXCon