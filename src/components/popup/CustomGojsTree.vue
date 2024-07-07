<template>
  <div>
    <div id="treeMenu" style="border: 0px solid black; width: 300px; height: 500px"></div>
  </div>
</template>

<script>
import * as go from 'gojs';

export default {
  name: 'TreeView',
  mounted() {
    this.initDiagram();
  },
  methods: {
    initDiagram() {
      const $ = go.GraphObject.make;

      const myDiagram = new go.Diagram('treeMenu', {
        allowMove: false,
        allowCopy: false,
        allowDelete: false,
        allowHorizontalScroll: false,
        layout: $(go.TreeLayout, {
          alignment: go.TreeAlignment.Start,
          angle: 0,
          compaction: go.TreeCompaction.None,
          layerSpacing: 16,
          layerSpacingParentOverlap: 1,
          nodeIndentPastParent: 1.0,
          nodeSpacing: 0,
          setsPortSpot: false,
          setsChildPortSpot: false,
        }),
      });

      myDiagram.nodeTemplate = $(go.Node,
        {
          selectionAdorned: false,
          doubleClick: (e, node) => {
            const cmd = myDiagram.commandHandler;
            if (node.isTreeExpanded) {
              if (!cmd.canCollapseTree(node)) return;
            } else {
              if (!cmd.canExpandTree(node)) return;
            }
            e.handled = true;
            if (node.isTreeExpanded) {
              cmd.collapseTree(node);
            } else {
              cmd.expandTree(node);
            }
          },
        },
        $('TreeExpanderButton', {
          _treeExpandedFigure: 'LineDown',
          _treeCollapsedFigure: 'LineRight',
          'ButtonBorder.fill': 'whitesmoke',
          'ButtonBorder.stroke': null,
          _buttonFillOver: 'rgba(0,128,255,0.25)',
          _buttonStrokeOver: null,
        }),
        $(go.Panel,
          'Horizontal',
          { position: new go.Point(18, 0) },
          new go.Binding('background', 'isSelected', s => (s ? 'lightblue' : 'white')).ofObject(),
          $(go.Picture,
            {
              width: 18,
              height: 18,
              margin: new go.Margin(0, 4, 0, 0),
              imageStretch: go.ImageStretch.Uniform,
            },
            new go.Binding('source', 'isTreeExpanded', this.imageConverter).ofObject(),
            new go.Binding('source', 'isTreeLeaf', this.imageConverter).ofObject() 
          ),
          $(go.TextBlock, { font: '9pt Verdana, sans-serif' }, new go.Binding('text', 'key', s => 'item ' + s)) // text binding
        )
      );

      myDiagram.linkTemplate = $(go.Link);

      const nodeDataArray = [{ key: 0 }];
      let max = 499;
      let count = 0;
      while (count < max) {
        count = this.makeTree(3, count, max, nodeDataArray, nodeDataArray[0]);
      }

      const treeData = [
      { "key": 0 },
      { "key": 1, "parent": 0  , "text" : "custItem"},
      { "key": 2, "parent": 0  , "text" : "custItem"},
      { "key": 3, "parent": 0  , "text" : "custItem"},
      { "key": 4, "parent": 1  , "text" : "custItem"},
      { "key": 5, "parent": 1  , "text" : "custItem"},
      { "key": 6, "parent": 2  , "text" : "custItem"},
      { "key": 7, "parent": 2  , "text" : "custItem"},
      { "key": 8, "parent": 3  , "text" : "custItem"},
      { "key": 9, "parent": 3  , "text" : "custItem"},
      { "key": 10, "parent": 4 , "text" : "custItem"},
      { "key": 11, "parent": 4 , "text" : "custItem"},
      { "key": 12, "parent": 5 , "text" : "custItem"},

      ];

      myDiagram.model = new go.TreeModel(treeData);
    },
    makeTree(level, count, max, nodeDataArray, parentdata) {
      const numchildren = Math.floor(Math.random() * 10);
      for (let i = 0; i < numchildren; i++) {
        if (count >= max) return count;
        count++;
        const childdata = { key: count, parent: parentdata.key };
        nodeDataArray.push(childdata);
        if (level > 0 && Math.random() > 0.5) {
          count = this.makeTree(level - 1, count, max, nodeDataArray, childdata);
        }
      }
      return count;
    },
    imageConverter(prop, picture) {
      const node = picture.part;
      if (node.isTreeLeaf) {
        return 'images/document.svg';
      } else {
        return node.isTreeExpanded ? 'images/openFolder.svg' : 'images/closedFolder.svg';
      }
    },
  },
};
</script>

<style scoped>
/* Add necessary styles here */
</style>
