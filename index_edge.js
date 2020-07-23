/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_3',
                type: 'image',
                rect: ['158px', '40px','140px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['144px', '37px','156px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_12',
                type: 'image',
                rect: ['59px', '24px','192px','149px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
            },
            {
                id: '_02',
                type: 'image',
                rect: ['-1349px', '-807px','3000px','1794px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-903px', '-155px','2112px','355px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-1230px', '-76px','2763px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't1',
                type: 'image',
                rect: ['-695px', '-397px','1560px','992px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-1227px', '-432px','2763px','1059px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__3}": [
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '115px'],
                ["style", "left", '158px'],
                ["style", "width", '140px']
            ],
            "${__2}": [
                ["style", "top", '37px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '125px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '144px'],
                ["style", "width", '156px']
            ],
            "${__12}": [
                ["style", "top", '24px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '149px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '59px'],
                ["style", "width", '192px']
            ],
            "${_l}": [
                ["style", "top", '-76px'],
                ["style", "height", '190px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1230px'],
                ["style", "width", '2763px']
            ],
            "${_t1}": [
                ["style", "top", '-397px'],
                ["style", "clip", [0,1560,-88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '992px'],
                ["style", "opacity", '1'],
                ["style", "left", '-695px'],
                ["style", "width", '1560px']
            ],
            "${__02}": [
                ["style", "top", '-807px'],
                ["style", "height", '1794px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1349px'],
                ["style", "width", '3000px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-155px'],
                ["style", "height", '355px'],
                ["style", "opacity", '0'],
                ["style", "left", '-903px'],
                ["style", "width", '2112px']
            ],
            "${_t2}": [
                ["style", "top", '-432px'],
                ["style", "clip", [0,2763,-116.99853515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1059px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1227px'],
                ["style", "width", '2763px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid42", tween: [ "style", "${_t1}", "opacity", '0', { fromValue: '1'}], position: 9450, duration: 1000 },
                { id: "eid59", tween: [ "style", "${__02}", "opacity", '0', { fromValue: '1'}], position: 14399, duration: 601 },
                { id: "eid4", tween: [ "transform", "${__12}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid14", tween: [ "transform", "${__12}", "scaleY", '0', { fromValue: '1'}], position: 3100, duration: 500 },
                { id: "eid21", tween: [ "transform", "${__2}", "scaleY", '1', { fromValue: '0'}], position: 3600, duration: 500 },
                { id: "eid22", tween: [ "transform", "${__2}", "scaleY", '0', { fromValue: '1'}], position: 6700, duration: 500 },
                { id: "eid56", tween: [ "style", "${_t2}", "clip", [0,2763,1059,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2763,-116.99853515625,0]}], position: 10750, duration: 2250 },
                { id: "eid17", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 3600, duration: 1000 },
                { id: "eid18", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 9450, duration: 1000 },
                { id: "eid27", tween: [ "transform", "${__3}", "scaleX", '1', { fromValue: '0'}], position: 7200, duration: 500 },
                { id: "eid28", tween: [ "transform", "${__3}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500 },
                { id: "eid2", tween: [ "transform", "${__12}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid13", tween: [ "transform", "${__12}", "scaleX", '0', { fromValue: '1'}], position: 3100, duration: 500 },
                { id: "eid29", tween: [ "transform", "${__3}", "scaleY", '1', { fromValue: '0'}], position: 7200, duration: 500 },
                { id: "eid30", tween: [ "transform", "${__3}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500 },
                { id: "eid8", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 2100, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 10450, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 10450, duration: 300 },
                { id: "eid58", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 14399, duration: 601 },
                { id: "eid19", tween: [ "transform", "${__2}", "scaleX", '1', { fromValue: '0'}], position: 3600, duration: 500 },
                { id: "eid20", tween: [ "transform", "${__2}", "scaleX", '0', { fromValue: '1'}], position: 6700, duration: 500 },
                { id: "eid26", tween: [ "style", "${_t1}", "clip", [0,1560,992,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1560,-88,0]}], position: 4250, duration: 5000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4627312");
