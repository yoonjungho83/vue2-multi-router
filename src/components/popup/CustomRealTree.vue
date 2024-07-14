<template>
    <div class="real">
      <div :id="gridName" style="width: 100%; height: 400px;"></div>
      <button @click="loadData">load data~~!!</button>
    </div>
  </template>
  
  
  <script>
  import { TreeView, LocalTreeDataProvider } from 'realgrid';
  import { columns, fields, rows } from './realtree-data';
import CommonMixin from '@/mixin/CommonMixin';

  

  /**
   *  tree 필요기능
   *  노드 추가 삭제 : 리프노트만 추가 삭제 .
   *  아이콘 삽입. 노드별 설정 방법.
   *  포커싱시 이벤트 발생.
   *  
   * 
   * grid 필요기능.
   * 헤더 머지 3단 4단 가능하게.
   * 
   */

  var vm = this;

  export default {
    name: 'RealGrid',
    props: ["domName" ],
    mixins:[CommonMixin],
    data: function () {
        return {
            gridName: this.domName,
            treeView: null,
            dataProvider: null,

            tempRows : rows,
        }
    },
    computed:{
      getDataSet(){
        return this.tempRows;
      }
    },
    methods: {
        contextMenuAddClick(grid, menuItem, clickData){

          console.log("contextMenuAddClick start");
          console.log("grid.getContainer().id = ",grid.getContainer().id);
          console.log("grid.getDataSource().getProvider().getFieldNames() = ",grid.getDataSource().getProvider().getFieldNames());
          console.log("grid.getDataSource().getProvider().getRows() = ",grid.getDataSource().getProvider().getRows());
          console.log("grid.getDataSource().getProvider().getRows()[0].values = ",grid.getDataSource().getProvider().getRows()[0].values);
          console.log("menuItem = ",menuItem);
          console.log("menuItem.parent._items = ",menuItem.parent._items);
          console.log("clickData = ",clickData);
          console.log("this.dataProvider.getJsonRow(clickData.dataRow) = ",this.dataProvider.getJsonRow(clickData.dataRow));
          console.log("contextMenuAddClick end");
        },


        loadData: function() {
          
          console.log("tree rows1111111111111 = ",this.tempRows);
        //   this.dataProvider.addRows(rows, "treeId", false, null, "iconField");
        //   this.dataProvider.setRows(rows, "treeId", false, null, "iconField");
        },
        
      testFn(clickData){
        // this.dataProvider.hideRows(clickData.itemIndex+1);
        // return;
        if(this.tempRows.length >=9) {
          console.log("return");
          return ;
        }

        console.log("onCellClicked2: " , this.tempRows[clickData.itemIndex]);
        // let testRow = Object.assign({},this.tempRows[clickData.itemIndex]);
        let testRow = {...this.tempRows[clickData.itemIndex]};
        testRow.treeId = "12.12";
        testRow.treeName = "추가된 필드";
        this.tempRows.push(testRow);
         console.log("onCellClicked3: " , this.tempRows);
        this.dataProvider.setRows(rows, "treeId", false, null, "iconField");
        // console.log("onCellClicked3: " , this.dataProvider);
        // console.log("onCellClicked4: " , this.tempRows);



        // console.log("onCellClicked5: " , this.tempRows);
        // this.dataProvider.addChildRow(clickData.itemIndex+1,  testRow, testRow.iconField, false);
        // console.log("onCellClicked6: " , this.tempRows);
        // this.dataProvider.insertRow(clickData.itemIndex, testRow);

        
        // this.dataProvider.setRows(rows, "treeId", false, null, "iconField");
        // this.dataProvider.insertRow(row, {});
        // this.treeView.refresh();
        this.treeView.expandAll();//펼침
        this.treeView.setCurrent({itemIndex:17});//특정 포커스 이동
      },

        
    },
    mounted() {
      this.mixinMethod();


      vm = this;
        console.log("mounted grid name => ",this.gridName);
        console.log("mounted tempRows => ",this.tempRows);
      
        this.dataProvider = new LocalTreeDataProvider(false);
        this.treeView = new TreeView(this.gridName);
        
        this.treeView.setDataSource(this.dataProvider);
    
        this.treeView.setRowIndicator({visible: false});//그리드 번호
        this.treeView.setCheckBar({visible: false});//기본 체크박스
        
        this.dataProvider.setFields(fields);
        this.treeView.setColumns(columns);
        this.dataProvider.setRows(this.tempRows, "treeId", false, null, "iconField");
        // this.treeView.columnByName("treeId").visible =  false;//컬럼 숨김

        //행이동 트리는 자식 안에서만 가능
        this.treeView.editOptions.insertable = true;
        this.treeView.editOptions.appendable = true;
        this.treeView.editOptions.movable = true;
        this.treeView.treeOptions.defaultIcon = 4;
        this.treeView.treeOptions.expanderIconStyle = "square"//기본 "triangle"  / square //접기 펼치기 스타일


        this.treeView.setFooter({visible: false});//하단 삭제

        
        this.treeView.expandAll();//펼침

        this.treeView.setOptions({display: {rowHeight: 20,},});

        this.mixinMethod();
      const tempColumn = ['treeName', 'treeId', 'areaCode', 'areaName', 'regionName', 'subRegion'];
      const tempLayout = this.getRealgridHeaderLayout(3, tempColumn);
      console.log("tempLayout================>",tempLayout);

      //멀티헤더
      var layout1 = [
        {
          name: "treeGroup",
          direction: "horizontal",
          header:{text:"treeGroup",tooltip:"companyGroup tooltip입니다", showTooltip:true},
          items: [
            "treeName",
            "treeId",
          ]
        }, 
       
      ]

      this.treeView.setColumnLayout(layout1);
      this.treeView.header.heights = [30,50]//멀티헤더일경우 사이즈

        // this.treeView.displayOptions.rowHoverType = 'row';//마우스 오버시 색상변경 - 아래 css와 셋트

        this.treeView.setOptions({
          showContextMenu: true,
        });

        // this.treeView.setContextMenu([
        //   { label: "Item1",
        //     callback: () => { alert("Item1 clicked"); },
        //   },
        //   { label: "Item2",
        //     callback: () => { alert("Item2 clicked"); },
        //   },
        // ]);

        // this.treeView.onContextMenuPopup = function (grid, x, y, elementName) {
        //   if(elementName.cellType === "header") return false;
        //   //헤더셀 영역에서는 컨텍스트 메뉴 실행하지 않음
        //   console.log("grid" ,grid);
        //   console.log("x" ,x);
        //   console.log("y" ,y);
        //   console.log("elementName" ,elementName);
        //   return elementName != "HeaderCell";
        // }

        // this.treeView.onCellMouseEnter = (treeView, index) => {
        //   console.log("aaaa");
        //   if (index) {
        //     this.showContextMenu(index);
        //   }
        // };

      //   this.treeView.addCellStyleCallback("hoverStyle", (grid, index, value) => {
      //   const rect = this.treeView.getCellRect(index.itemIndex, index.fieldIndex);
      //   const menuPosition = {
      //     x: rect.left,
      //     y: rect.top + rect.height,
      //   };
      //   this.treeView.showContextMenu(menuPosition);
      //   return null; // 스타일 변경 없음
      // });

      // 마우스 오버 이벤트 추가
      // this.treeView.onCellMouseOver = (grid, index) => {
      //   console.log("test");
      //   if (index) {
      //     this.showContextMenu(grid, index);
      //   }
      // };
      //this.treeView.onCellMouseEnter = this.handleCellMouseEnter;

      // 마우스 오버 이벤트 추가
      // this.treeView.onCellMouseEnter = this.handleCellMouseEnter;
      // this.treeView.onCellMouseLeave = this.handleCellMouseLeave;


      /**context menu 설정 */
      var menu = [
        { label: "menu1 입니다." ,key:"add", enabled: true, callback:this.contextMenuAddClick},
        { label: "-" },
        { label: "menu2 입니다", key:"remove" , enabled: false },
      ];

      this.treeView.onCellClicked = function (grid, clickData) {
        // console.log("onCellClicked1: " + JSON.stringify(clickData));
        // console.log("vm = ",vm);

        // var current = grid.getCurrent();
        // console.log("current = ",current);
        // vm.dataProvider.addChildRow(8,  el, el.iconField, false);

        vm.testFn(clickData);

        
        // console.log("onCellClicked: " , clickData);
        
      }


      // this.dataProvider.onRowAdded = function (provider, rowId) {
      //     console.log(rowId);
      //     treeView.setCurrent({dataRow: rowId})
      // };


      this.treeView.addPopupMenu("menu1", menu);

      this.treeView.onMenuItemClicked = function(grid, menuItem, clickData) {
        console.log("onMenuItemClicked start");
        console.log("menuItem = ",menuItem);
        console.log("item.parent._items = ",menuItem.parent._items);
        console.log("clickData = ",clickData);
        console.log("onMenuItemClicked end");
        
      };  

      //안먹음
      this.treeView.onContextMenuItemClicked = function(grid, item, clickData){
        console.log("onContextMenuItemClicked");
      }

      this.treeView.setCurrent({itemIndex:3});//특정 포커스 이동
     
    }
  }
  </script>

  <style >
  /* .rg-header-cell{
    text-align:left;
  } */
  .rg-header-renderer {
  text-align: left !important; /* 강제 왼쪽 정렬 */
}
</style>
  