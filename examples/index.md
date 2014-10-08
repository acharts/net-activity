# Demo

---

## Normal usage

````html
<div id="c1" style="height:1600px; width: 1600px;"></div>
````

````javascript
seajs.use(['index', 'achart-canvas'], function(Activity, Canvas) {
  var Util = Activity.Util;
  var canvas = new Canvas({id: 'c1'});
  var width = 100;
  var height = 100;
  var nodeRadius = 10;
  var activity = new Activity.Tree({
    nodes: [
      {
        id: '1'
      },
      {
        id: '2'
      },
      {
        id: '3'
      },
      {
        id: '4'
      },
      {
        id: '5'
      },
      {
        id: '6'
      },
      {
        id: '7'
      },
      {
        id: '8'
      },
      {
        id: '9'
      },
      {
        id: '10'
      },
      {
        id: '11'
      },
      {
        id: '12'
      },
      {
        id: '13'
      },
      {
        id: '14'
      },
      {
        id: '15'
      },
      {
        id: '16'
      },
      {
        id: '17'
      },
      {
        id: '18'
      },
      {
        id: '19'
      },
      {
        id: '20'
      },
      {
        id: '21'
      },
      {
        id: '22'
      },
      {
        id: '23'
      },
      {
        id: '24'
      },
      {
        id: '25'
      }
    ],
    edges: [
      {
        source: '1',
        target: '2'
      },
      {
        source: '1',
        target: '3'
      },
      {
        source: '2',
        target: '4'
      },
      {
        source: '4',
        target: '5'
      },
      {
        source: '4',
        target: '6'
      },
      {
        source: '5',
        target: '7'
      },
      {
        source: '5',
        target: '8'
      },
      {
        source: '7',
        target: '9'
      },
      {
        source: '7',
        target: '10'
      },
      {
        source: '6',
        target: '11'
      },
      {
        source: '11',
        target: '12'
      },
      {
        source: '11',
        target: '13'
      },
      {
        source: '11',
        target: '14'
      },
      {
        source: '12',
        target: '15'
      },
      {
        source: '13',
        target: '15'
      },
      {
        source: '17',
        target: '16'
      },
      {
        source: '18',
        target: '17'
      },
      {
        source: '17',
        target: '19'
      },
      {
        source: '20',
        target: '18'
      },
      {
        source: '18',
        target: '21'
      },
      {
        source: '22',
        target: '20'
      },
      {
        source: '23',
        target: '20'
      },
      {
        source: '24',
        target: '22'
      },
      {
        source: '25',
        target: '23'
      },
      {
        source: '14',
        target: '24'
      },
      {
        source: '13',
        target: '25'
      }
    ]
  });
  activity.drawNode = function(node) {
      var _self = this,
          halfWidth = width / 2,
          halfHeight = height / 2;
      var x = node.col * height - halfHeight,
          y = (node.row + node.rowWidth / 2) * width - halfWidth;

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
  };
  activity.drawEdge = function(edge) {
      var _self = this,
          halfWidth = width / 2,
          halfHeight = height / 2;
      var x1 = edge.sourceNode.col * height - halfHeight;
      var y1 = (edge.sourceNode.row + edge.sourceNode.rowWidth / 2) * width - halfWidth;

      var x2 = edge.targetNode.col * height - halfHeight;
      var y2 = (edge.targetNode.row + edge.targetNode.rowWidth / 2) * width - halfWidth;


      var theta;
      var xspan = x2 - x1;
      var yspan = y2 - y1;
      if (xspan > 0.0001) {
        theta = Math.atan(yspan/xspan);
      } else {
        theta = yspan > 0 ? Math.PI / 2 : -Math.PI / 2;
      }


      canvas.addShape({
        type: 'path',
        attrs: {
          path: 'M' + (x1 + nodeRadius) + ' ' + y1 + ' C' + (x2 - nodeRadius) + ' ' + y1 + ' ' + (x1 + nodeRadius) + ' ' + y2 + ' ' + (x2 - nodeRadius) + ' ' + y2,
          'arrow-end':'open-midium-midium',
          stroke: 'green'
        }
      });
  };
  activity.render();
});
````



````html
<div id="c2" style="height:1600px; width: 1400px;"></div>
````

````javascript
seajs.use(['index', 'achart-canvas'], function(Activity, Canvas) {
  var Util = Activity.Util;
  var canvas = new Canvas({id: 'c2'});
  var width = 100;
  var height = 100;
  var nodeRadius = 10;
  var activity = new Activity.Net({
    nodes: [
      {
        id: '1'
      },
      {
        id: '2'
      },
      {
        id: '3'
      },
      {
        id: '4'
      },
      {
        id: '5'
      },
      {
        id: '6'
      },
      {
        id: '7'
      },
      {
        id: '8'
      },
      {
        id: '9'
      },
      {
        id: '10'
      },
      {
        id: '11'
      },
      {
        id: '12'
      },
      {
        id: '13'
      },
      {
        id: '14'
      },
      {
        id: '15'
      },
      {
        id: '16'
      },
      {
        id: '17'
      },
      {
        id: '18'
      },
      {
        id: '19'
      },
      {
        id: '20'
      },
      {
        id: '21'
      },
      {
        id: '22'
      },
      {
        id: '23'
      },
      {
        id: '24'
      },
      {
        id: '25'
      }
    ],
    edges: [
      {
        source: '1',
        target: '2'
      },
      {
        source: '1',
        target: '3'
      },
      {
        source: '2',
        target: '4'
      },
      {
        source: '4',
        target: '5'
      },
      {
        source: '4',
        target: '6'
      },
      {
        source: '5',
        target: '7'
      },
      {
        source: '5',
        target: '8'
      },
      {
        source: '7',
        target: '9'
      },
      {
        source: '7',
        target: '10'
      },
      {
        source: '6',
        target: '11'
      },
      {
        source: '11',
        target: '12'
      },
      {
        source: '11',
        target: '13'
      },
      {
        source: '11',
        target: '14'
      },
      {
        source: '12',
        target: '15'
      },
      {
        source: '13',
        target: '15'
      },
      {
        source: '17',
        target: '16'
      },
      {
        source: '18',
        target: '17'
      },
      {
        source: '17',
        target: '19'
      },
      {
        source: '20',
        target: '18'
      },
      {
        source: '18',
        target: '21'
      },
      {
        source: '22',
        target: '20'
      },
      {
        source: '23',
        target: '20'
      },
      {
        source: '24',
        target: '22'
      },
      {
        source: '25',
        target: '23'
      },
      {
        source: '14',
        target: '24'
      },
      {
        source: '13',
        target: '25'
      }
    ]
  });
  activity.drawNode = function(node) {
      var _self = this,
          halfWidth = width / 2,
          halfHeight = height / 2;
      var x = node.col * height - halfHeight,
          y = (node.row + node.rowWidth / 2) * width - halfWidth;

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
  };
  activity.drawEdge = function(edge) {
      var _self = this,
          halfWidth = width / 2,
          halfHeight = height / 2;
      var x1 = edge.sourceNode.col * height - halfHeight;
      var y1 = (edge.sourceNode.row + edge.sourceNode.rowWidth / 2) * width - halfWidth;

      var x2 = edge.targetNode.col * height - halfHeight;
      var y2 = (edge.targetNode.row + edge.targetNode.rowWidth / 2) * width - halfWidth;


      var theta;
      var xspan = x2 - x1;
      var yspan = y2 - y1;
      if (xspan > 0.0001) {
        theta = Math.atan(yspan/xspan);
      } else {
        theta = yspan > 0 ? Math.PI / 2 : -Math.PI / 2;
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
  };
  activity.render();
});
````
