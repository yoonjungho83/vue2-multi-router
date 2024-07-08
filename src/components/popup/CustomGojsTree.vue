<template>
  <div>
    <button @click="addNode"> Add Node</button>
    <button @click="removeNode"> Remove Node</button>
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
  data: function () {
        return {
          treeData : [
                    { "key": 0               , "menuNm" : "Custom Menu 0"},
                    { "key": 1, "parent": 0  , "menuNm" : "Custom Menu 1"},
                    { "key": 2, "parent": 0  , "menuNm" : "Custom Menu 2"},
                    { "key": 3, "parent": 0  , "menuNm" : "Custom Menu 3"},
                    { "key": 4, "parent": 1  , "menuNm" : "Custom Menu 4"},
                    { "key": 5, "parent": 1  , "menuNm" : "Custom Menu 5"},
                    { "key": 6, "parent": 2  , "menuNm" : "Custom Menu 6"},
                    { "key": 7, "parent": 2  , "menuNm" : "Custom Menu 7"},
                    { "key": 8, "parent": 3  , "menuNm" : "Custom Menu 8"},
                    { "key": 9, "parent": 3  , "menuNm" : "Custom Menu 9"},
                    { "key": 10, "parent": 4 , "menuNm" : "Custom Menu 10"},
                    { "key": 11, "parent": 4 , "menuNm" : "Custom Menu 11"},
                    { "key": 12, "parent": 5 , "menuNm" : "Custom Menu 12"},
                    ],
          treeDiagram : null,
          curKey : -1,
        }
    },
  
  methods: {

    keybind(key){
      
      console.log("key = ",key);
      return (key+1)+"번메뉴";
    },

    //child add
    addNode(){
      console.log("add node ");
      if(this.curKey > -1){
        // 트랜잭션 시작
        this.treeDiagram.startTransaction("addNode");
        
        // 데이터 추가
        const newKey =  Math.max( ...this.treeData.map(x=>x.key) )+1   ;
        const newNode = { key: newKey, parent: this.curKey, menuNm: "Add Child " + newKey };
        this.treeDiagram.model.addNodeData(newNode);
        
        // 트랜잭션 종료
        this.treeDiagram.commitTransaction("addNode");
      }
      else{
        alert("선택된 데이터 없음.");
      }
    },
    removeNode(){
      console.log("remove node ");
      if(this.curKey > 0){//root node 삭제 금지
        // 트랜잭션 시작
        this.treeDiagram.startTransaction("removeNode");
        
        // 데이터 추가
        const removeNode = this.treeData.find(x=>x.key === this.curKey);
        if(removeNode){
          console.log("removeNode" , removeNode);
        }
        this.treeDiagram.model.removeNodeData(removeNode);
        // 트랜잭션 종료
        this.treeDiagram.commitTransaction("removeNode");

        //모든 데이터 가져오기
        console.log("this.treeDiagram.model.nodeDataArray length" , this.treeDiagram.model.nodeDataArray.length);
        
      }
      else{
        alert("선택된 데이터 없음.");
      }
    },
    getSubtree(node) {
      const descendants = [node];
      const children = this.treeData.filter(n => n.parent === node.key);
      children.forEach(child => descendants.push(...this.getSubtree(child)));
      return descendants;
    },

    initDiagram() {
      const $ = go.GraphObject.make;

      //sorting and comparator: 부모 노드의 바로 아래 자식 순서를 지정합니다.


      // 컨텍스트 메뉴 템플릿 정의
      const contextMenu = $(
        go.Adornment,
        "Vertical",
        $("ContextMenuButton",
          $(
            go.TextBlock,
            "Add Child",
            { margin: 8, font: "14px sans-serif", stroke: "black" }
          ),
          {
            click: (e, obj) => this.addChildToNode(obj.part.adornedObject.data.key),
            mouseEnter: (e, obj) => obj.background = "rgba(100, 100, 100, 0.5)",
            mouseLeave: (e, obj) => obj.background = "transparent"
          }
        ),
        $("ContextMenuButton",
          $(
            go.TextBlock,
            "Remove Node",
            { margin: 8, font: "14px sans-serif", stroke: "black" }
          ),
          {
            click: (e, obj) => this.removeNode(obj.part.adornedObject.data.key),
            mouseEnter: (e, obj) => obj.background = "rgba(100, 100, 100, 0.5)",
            mouseLeave: (e, obj) => obj.background = "transparent"
          }
        )
      );


      this.treeDiagram = new go.Diagram('treeMenu', {
        allowMove: false,
        allowCopy: false,
        allowDelete: false,
        allowHorizontalScroll: false,
        layout: $(go.TreeLayout, {
          alignment: go.TreeAlignment.Start,//부모 노드와 자식 노드의 상대적 위치.
          angle: 0,//노드 방향
          compaction: go.TreeCompaction.None,
          layerSpacing: 15,//계층간 거리
          layerSpacingParentOverlap: 1,
          nodeIndentPastParent: 1.0,
          nodeSpacing: 0,
          setsPortSpot: false,
          setsChildPortSpot: false,
        }),
      });

      this.treeDiagram.nodeTemplate = $(go.Node,
        {
          selectionAdorned: false,

          /*   event   */
          doubleClick: (e, node) => {
            console.log("tree double click");
            const cmd = this.treeDiagram.commandHandler;

            // this.$router.push("/popupView1");
            console.log(node);
            console.log(node.isTreeExpanded);
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
          click: (e, node) => {
            this.curKey = node.key;
            console.log("tree click");
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
          // $(go.TextBlock, { font: '9pt Verdana, sans-serif' }, new go.Binding('text', 'menuNm', s => s)) // text binding
          $(go.TextBlock, { font: '9pt Verdana, sans-serif' }, new go.Binding("text", "menuNm").makeTwoWay()), // text binding
          {contextMenu:contextMenu}
        )
      );

      this.treeDiagram.linkTemplate = $(go.Link);

      const nodeDataArray = [{ key: 0 }];
      let max = 499;
      let count = 0;
      while (count < max) {
        count = this.makeTree(3, count, max, nodeDataArray, nodeDataArray[0]);
      }

      

      this.treeDiagram.model = new go.TreeModel(this.treeData);
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
