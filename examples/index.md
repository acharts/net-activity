# Demo

---

## Normal usage

````html
<div id="c1"></div>
````

````javascript
seajs.use('index', function(Net) {
  var net = new Net({
    id: 'c1',
    nodes: [
      {
        id: '1',
        row: 1,
        col: 1
      },
      {
        id: '2',
        row: 1,
        col: 2
      },
      {
        id: '3',
        row: 1,
        col: 3
      },
      {
        id: '4',
        row: 2,
        col: 1
      },
      {
        id: '5',
        row: 3,
        col: 1
      },
      {
        id: '6',
        row: 3,
        col: 6
      }
    ],
    edges: [
      {
        source: '3',
        target: '6'
      },
      {
        source: '1',
        target: '2'
      },
      {
        source: '2',
        target: '5'
      }
    ],
    nodeRadius: 10
  });
  net.render();
});
````
