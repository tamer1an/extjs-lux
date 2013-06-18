/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * Creates a Bar Chart. A Bar Chart is a useful visualization technique to display quantitative information for
 * different categories that can show some progression (or regression) in the dataset. As with all other series, the Bar
 * Series must be appended in the *series* Chart array configuration. See the Chart documentation for more information.
 * A typical configuration object for the bar series could be:
 *
 *     @example
 *     var store = Ext.create('Ext.data.JsonStore', {
 *         fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
 *         data: [
 *             { 'name': 'metric one',   'data1':10, 'data2':12, 'data3':14, 'data4':8,  'data5':13 },
 *             { 'name': 'metric two',   'data1':7,  'data2':8,  'data3':16, 'data4':10, 'data5':3  },
 *             { 'name': 'metric three', 'data1':5,  'data2':2,  'data3':14, 'data4':12, 'data5':7  },
 *             { 'name': 'metric four',  'data1':2,  'data2':14, 'data3':6,  'data4':1,  'data5':23 },
 *             { 'name': 'metric five',  'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33 }
 *         ]
 *     });
 *
 *     Ext.create('Ext.chart.Chart', {
 *         renderTo: Ext.getBody(),
 *         width: 500,
 *         height: 300,
 *         animate: true,
 *         store: store,
 *         axes: [{
 *             type: 'Numeric',
 *             position: 'bottom',
 *             fields: ['data1'],
 *             label: {
 *                 renderer: Ext.util.Format.numberRenderer('0,0')
 *             },
 *             title: 'Sample Values',
 *             grid: true,
 *             minimum: 0
 *         }, {
 *             type: 'Category',
 *             position: 'left',
 *             fields: ['name'],
 *             title: 'Sample Metrics'
 *         }],
 *         series: [{
 *             type: 'bar',
 *             axis: 'bottom',
 *             highlight: true,
 *             tips: {
 *               trackMouse: true,
 *               width: 140,
 *               height: 28,
 *               renderer: function(storeItem, item) {
 *                 this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');
 *               }
 *             },
 *             label: {
 *               display: 'insideEnd',
 *                 field: 'data1',
 *                 renderer: Ext.util.Format.numberRenderer('0'),
 *                 orientation: 'horizontal',
 *                 color: '#333',
 *                 'text-anchor': 'middle'
 *             },
 *             xField: 'name',
 *             yField: ['data1']
 *         }]
 *     });
 *
 * In this configuration we set `bar` as the series type, bind the values of the bar to the bottom axis and set the
 * xField or category field to the `name` parameter of the store. We also set `highlight` to true which enables smooth
 * animations when bars are hovered. We also set some configuration for the bar labels to be displayed inside the bar,
 * to display the information found in the `data1` property of each element store, to render a formated text with the
 * `Ext.util.Format` we pass in, to have an `horizontal` orientation (as opposed to a vertical one) and we also set
 * other styles like `color`, `text-anchor`, etc.
 */
Ext.define('Ext.chart.series.Bar', {

    /* Begin Definitions */

    extend: 'Ext.chart.series.Cartesian',

    alternateClassName: ['Ext.chart.BarSeries', 'Ext.chart.BarChart', 'Ext.chart.StackedBarChart'],

    requires: ['Ext.chart.axis.Axis', 'Ext.fx.Anim'],

    /* End Definitions */

    type: 'bar',

    alias: 'series.bar',
    /**
     * @cfg {Boolean} column Whether to set the visualization as column chart or horizontal bar chart.
     */
    column: false,

    /**
     * @cfg style Style properties that will override the theming series styles.
     */
    style: {},

    /**
     * @cfg {Number} gutter The gutter space between single bars, as a percentage of the bar width
     */
    gutter: 38.2,

    /**
     * @cfg {Number} groupGutter The gutter space between groups of bars, as a percentage of the bar width
     */
    groupGutter: 38.2,

    /**
     * @cfg {Number} xPadding Padding between the left/right axes and the bars
     */
    xPadding: 0,

    /**
     * @cfg {Number} yPadding Padding between the top/bottom axes and the bars
     */
    yPadding: 10,

    constructor: function(config) {
        this.callParent(arguments);
        var me = this,
            surface = me.chart.surface,
            shadow = me.chart.shadow,
            i, l;
        Ext.apply(me, config, {
            highlightCfg: {
                lineWidth: 3,
                stroke: '#55c',
                opacity: 0.8,
                color: '#f00'
            },

            shadowAttributes: [{
                "stroke-width": 6,
                "stroke-opacity": 0.05,
                stroke: 'rgb(200, 200, 200)',
                translate: {
                    x: 1.2,
                    y: 1.2
                }
            }, {
                "stroke-width": 4,
                "stroke-opacity": 0.1,
                stroke: 'rgb(150, 150, 150)',
                translate: {
                    x: 0.9,
                    y: 0.9
                }
            }, {
                "stroke-width": 2,
                "stroke-opacity": 0.15,
                stroke: 'rgb(100, 100, 100)',
                translate: {
                    x: 0.6,
                    y: 0.6
                }
            }]
        });
        me.group = surface.getGroup(me.seriesId + '-bars');
        if (shadow) {
            for (i = 0, l = me.shadowAttributes.length; i < l; i++) {
                me.shadowGroups.push(surface.getGroup(me.seriesId + '-shadows' + i));
            }
        }
    },

    // @private sets the bar girth.
    getBarGirth: function() {
        var me = this,
            store = me.chart.getChartStore(),
            column = me.column,
            ln = store.getCount(),
            gutter = me.gutter / 100;

        return (me.chart.chartBBox[column ? 'width' : 'height'] - me[column ? 'xPadding' : 'yPadding'] * 2) / (ln * (gutter + 1) - gutter);
    },

    // @private returns the gutters.
    getGutters: function() {
        var me = this,
            column = me.column,
            gutter = Math.ceil(me[column ? 'xPadding' : 'yPadding'] + me.getBarGirth() / 2);
        return me.column ? [gutter, 0] : [0, gutter];
    },

    // @private Get chart and data boundaries
    getBounds: function() {
        var me = this,
            chart = me.chart,
            store = chart.getChartStore(),
            bars = [].concat(me.yField),
            barsLen = bars.length,
            groupBarsLen = barsLen,
            groupGutter = me.groupGutter / 100,
            column = me.column,
            xPadding = me.xPadding,
            yPadding = me.yPadding,
            stacked = me.stacked,
            barWidth = me.getBarGirth(),
            math = Math,
            mmax = math.max,
            mabs = math.abs,
            groupBarWidth, bbox, minY, maxY, axis, out,
            scale, zero, total, rec, j, plus, minus;

        me.setBBox(true);
        bbox = me.bbox;

        //Skip excluded series
        if (me.__excludes) {
            for (j = 0, total = me.__excludes.length; j < total; j++) {
                if (me.__excludes[j]) {
                    groupBarsLen--;
                }
            }
        }

        if (me.axis) {
            axis = chart.axes.get(me.axis);
            if (axis) {
                out = axis.calcEnds();
                minY = out.from;
                maxY = out.to;
            }
        }

        if (me.yField && !Ext.isNumber(minY)) {
            axis = Ext.create('Ext.chart.axis.Axis', {
                chart: chart,
                fields: [].concat(me.yField)
            });
            out = axis.calcEnds();
            minY = out.from;
            maxY = out.to;
        }

        if (!Ext.isNumber(minY)) {
            minY = 0;
        }
        if (!Ext.isNumber(maxY)) {
            maxY = 0;
        }
        scale = (column ? bbox.height - yPadding * 2 : bbox.width - xPadding * 2) / (maxY - minY);
        groupBarWidth = barWidth / ((stacked ? 1 : groupBarsLen) * (groupGutter + 1) - groupGutter);
        zero = (column) ? bbox.y + bbox.height - yPadding : bbox.x + xPadding;

        if (stacked) {
            total = [[], []];
            store.each(function(record, i) {
                total[0][i] = total[0][i] || 0;
                total[1][i] = total[1][i] || 0;
                for (j = 0; j < barsLen; j++) {
                    if (me.__excludes && me.__excludes[j]) {
                        continue;
                    }
                    rec = record.get(bars[j]);
                    total[+(rec > 0)][i] += mabs(rec);
                }
            });
            total[+(maxY > 0)].push(mabs(maxY));
            total[+(minY > 0)].push(mabs(minY));
            minus = mmax.apply(math, total[0]);
            plus = mmax.apply(math, total[1]);
            scale = (column ? bbox.height - yPadding * 2 : bbox.width - xPadding * 2) / (plus + minus);
            zero = zero + minus * scale * (column ? -1 : 1);
        }
        else if (minY / maxY < 0) {
            zero = zero - minY * scale * (column ? -1 : 1);
        }
        return {
            bars: bars,
            bbox: bbox,
            barsLen: barsLen,
            groupBarsLen: groupBarsLen,
            barWidth: barWidth,
            groupBarWidth: groupBarWidth,
            scale: scale,
            zero: zero,
            xPadding: xPadding,
            yPadding: yPadding,
            signed: minY / maxY < 0,
            minY: minY,
            maxY: maxY
        };
    },

    // @private Build an array of paths for the chart
    getPaths: function() {
        var me = this,
            chart = me.chart,
            store = chart.getChartStore(),
            bounds = me.bounds = me.getBounds(),
            items = me.items = [],
            gutter = me.gutter / 100,
            groupGutter = me.groupGutter / 100,
            animate = chart.animate,
            column = me.column,
            group = me.group,
            enableShadows = chart.shadow,
            shadowGroups = me.shadowGroups,
            shadowAttributes = me.shadowAttributes,
            shadowGroupsLn = shadowGroups.length,
            bbox = bounds.bbox,
            xPadding = me.xPadding,
            yPadding = me.yPadding,
            stacked = me.stacked,
            barsLen = bounds.barsLen,
            colors = me.colorArrayStyle,
            colorLength = colors && colors.length || 0,
            math = Math,
            mmax = math.max,
            mmin = math.min,
            mabs = math.abs,
            j, yValue, height, totalDim, totalNegDim, bottom, top, hasShadow, barAttr, attrs, counter,
            shadowIndex, shadow, sprite, offset, floorY;

        store.each(function(record, i, total) {
            bottom = bounds.zero;
            top = bounds.zero;
            totalDim = 0;
            totalNegDim = 0;
            hasShadow = false;
            for (j = 0, counter = 0; j < barsLen; j++) {
                // Excluded series
                if (me.__excludes && me.__excludes[j]) {
                    continue;
                }
                yValue = record.get(bounds.bars[j]);
                height = Math.round((yValue - mmax(bounds.minY, 0)) * bounds.scale);
                barAttr = {
                    fill: colors[(barsLen > 1 ? j : 0) % colorLength]
                };
                if (column) {
                    Ext.apply(barAttr, {
                        height: height,
                        width: mmax(bounds.groupBarWidth, 0),
                        x: (bbox.x + xPadding + i * bounds.barWidth * (1 + gutter) + counter * bounds.groupBarWidth * (1 + groupGutter) * !stacked),
                        y: bottom - height
                    });
                }
                else {
                    // draw in reverse order
                    offset = (total - 1) - i;
                    Ext.apply(barAttr, {
                        height: mmax(bounds.groupBarWidth, 0),
                        width: height + (bottom == bounds.zero),
                        x: bottom + (bottom != bounds.zero),
                        y: (bbox.y + yPadding + offset * bounds.barWidth * (1 + gutter) + counter * bounds.groupBarWidth * (1 + groupGutter) * !stacked + 1)
                    });
                }
                if (height < 0) {
                    if (column) {
                        barAttr.y = top;
                        barAttr.height = mabs(height);
                    } else {
                        barAttr.x = top + height;
                        barAttr.width = mabs(height);
                    }
                }
                if (stacked) {
                    if (height < 0) {
                        top += height * (column ? -1 : 1);
                    } else {
                        bottom += height * (column ? -1 : 1);
                    }
                    totalDim += mabs(height);
                    if (height < 0) {
                        totalNegDim += mabs(height);
                    }
                }
                barAttr.x = Math.floor(barAttr.x) + 1;
                floorY = Math.floor(barAttr.y);
                if (!Ext.isIE9 && barAttr.y > floorY) {
                    floorY--;
                }
                barAttr.y = floorY;
                barAttr.width = Math.floor(barAttr.width);
                barAttr.height = Math.floor(barAttr.height);
                items.push({
                    series: me,
                    storeItem: record,
                    value: [record.get(me.xField), yValue],
                    attr: barAttr,
                    point: column ? [barAttr.x + barAttr.width / 2, yValue >= 0 ? barAttr.y : barAttr.y + barAttr.height] :
                                    [yValue >= 0 ? barAttr.x + barAttr.width : barAttr.x, barAttr.y + barAttr.height / 2]
                });
                // When resizing, reset before animating
                if (animate && chart.resizing) {
                    attrs = column ? {
                        x: barAttr.x,
                        y: bounds.zero,
                        width: barAttr.width,
                        height: 0
                    } : {
                        x: bounds.zero,
                        y: barAttr.y,
                        width: 0,
                        height: barAttr.height
                    };
                    if (enableShadows && (stacked && !hasShadow || !stacked)) {
                        hasShadow = true;
                        //update shadows
                        for (shadowIndex = 0; shadowIndex < shadowGroupsLn; shadowIndex++) {
                            shadow = shadowGroups[shadowIndex].getAt(stacked ? i : (i * barsLen + j));
                            if (shadow) {
                                shadow.setAttributes(attrs, true);
                            }
                        }
                    }
                    //update sprite position and width/height
                    sprite = group.getAt(i * barsLen + j);
                    if (sprite) {
                        sprite.setAttributes(attrs, true);
                    }
                }
                counter++;
            }
            if (stacked && items.length) {
                items[i * counter].totalDim = totalDim;
                items[i * counter].totalNegDim = totalNegDim;
            }
        }, me);
    },

    // @private render/setAttributes on the shadows
    renderShadows: function(i, barAttr, baseAttrs, bounds) {
        var me = this,
            chart = me.chart,
            surface = chart.sur