var Util = require('achart-util'),
    Canvas = require('achart-canvas');

var infix = '__->__';

function Activity(cfg) {
  this._attrs = Util.mix({}, Activity.ATTRS, cfg);
  this.events = {};
}

Activity.ATTRS = {
  /**
   * 画板
   */
  canvas: undefined,
  /**
   * 显示的节点
   */
  nodes: [],
  /**
   * 显示的有向边
   */
  edges: [],

  /**
   * 阶段宽度
   */
  width: 100,

  /**
   * 阶段高度
   */
  height: 100
};

Util.augment(Activity, {
  get : function(name){
    return this._attrs[name];
  },
  set : function(name,value){
    this._attrs[name] = value;
    return this;
  },
  render: function() {
    var _self = this;
    if (!_self.get('id')) {
      throw "You must assign id for the chart!";
    }
    _self._createCanvas();
    _self._initStructure();
    _self._topology();
    _self._renderData();
  },
  clear: function() {
    var _self = this,
        canvas = _self.get('canvas');
    canvas.destory();
  },
  _createCanvas: function() {
    var _self = this,
        id = _self.get('id');
    var el = document.getElementById(id),
        canvas;

    _self.set('el', el);
    canvas = new Canvas({
      id : id
    });
    _self.set('canvas',canvas);
  },
  _initStructure: function() {
    var _self = this,
        nodes = _self.get('nodes'),
        edges = _self.get('edges');
    var nodeIdToNode = {};
    var adjoinTable = {};
    Util.each(nodes, function(node) {
      nodeIdToNode[node.id] = node;
      adjoinTable[node.id] = {val: node.id, start: true};
    });
    _self.set('nodeIdToNode', nodeIdToNode);

    var edgeIdToEdge = {};
    Util.each(edges, function(edge) {
      var id = edge.source + infix + edge.target;
      edgeIdToEdge[id] = edge;
      edge.sourceNode = nodeIdToNode[edge.source];
      edge.targetNode = nodeIdToNode[edge.target];
      var node = getLast(adjoinTable[edge.source]);
      node.next = {val: edge.target};
      adjoinTable[edge.target].start = false;
    });
    _self.set('edgeIdToEdge', edgeIdToEdge);
    _self.set('adjoinTable', adjoinTable);
  },
  _topology: function() {
    var _self = this,
        nodeIdToNode = _self.get('nodeIdToNode'),
        edgeIdToEdge = _self.get('edgeIdToEdge'),
        adjoinTable = _self.get('adjoinTable');
      console.log(adjoinTable);


  },
  _renderData: function() {
    var _self = this,
        canvas = _self.get('canvas'),
        nodeIdToNode = _self.get('nodeIdToNode'),
        edgeIdToEdge = _self.get('edgeIdToEdge');
    canvas.clear();
    Util.each(nodeIdToNode, function(node) {
      _self.drawNode(node, canvas);
    });

    Util.each(edgeIdToEdge, function(edge) {
      _self.drawEdge(edge, canvas);
    });
  },
  drawNode: function(node, canvas) {
    var _self = this,
        width = _self.get('width'),
        height = _self.get('height'),
        halfWidth = width / 2,
        halfHeight = height / 2,
        nodeRadius = _self.get('nodeRadius');
    var x = node.col * height - halfHeight,
        y = node.row * width - halfWidth;

    canvas.addShape({
      type: 'circle',
      attrs: {
        cx: x,
        cy: y,
        r: nodeRadius,
        stroke: 'red'
      }
    });
    canvas.addShape({
      type: 'text',
      attrs: {
        x: x,
        y: y - 15,
        text: node.id
      }
    });
  },
  drawEdge: function(edge, canvas) {
    var _self = this,
        width = _self.get('width'),
        height = _self.get('height'),
        halfWidth = width / 2,
        halfHeight = height / 2,
        nodeRadius = _self.get('nodeRadius');
    var x1 = edge.sourceNode.col * height - halfHeight;
    var y1 = edge.sourceNode.row * width - halfWidth;

    var x2 = edge.targetNode.col * height - halfHeight;
    var y2 = edge.targetNode.row * width - halfWidth;


    var theta;
    var xspan = x2 - x1;
    var yspan = y2 - y1;
    if (xspan > 0.0001) {
      theta = Math.atan(yspan/xspan);
    } else {
      theta = yspan ? Math.PI / 2 : -Math.PI / 2;
    }

    var raidusX = nodeRadius * Math.cos(theta);
    var raidusY = nodeRadius * Math.sin(theta);

    canvas.addShape({
      type: 'line',
      attrs: {
        x1: x1 + raidusX,
        y1: y1 + raidusY,
        x2: x2 - raidusX,
        y2: y2 - raidusY,
        'arrow-end':'open-midium-midium',
        stroke: 'green'
      }
    });
  }
});


function getLast(node) {
  while(node.next) {
    node = node.next;
  }
  return node;
}


module.exports = Activity;
