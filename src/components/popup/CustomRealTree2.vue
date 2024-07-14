<template>
  <div>
    <div ref="realgrid" style="width: 100%; height: 200px;"></div>
    <img :src="iconPath" alt="Icon" />
    <button @click="toggleHeader">헤더 변경</button>
  </div>
</template>

<script>
import { TreeView, LocalTreeDataProvider } from 'realgrid';
import icon from '../../assets/kr.png';

export default {
  name: 'TreeViewComponent',
  data() {
    return {
      treeView: null,
      dataProvider: null,
      isHeaderA: true,
      iconPath: icon,
    };
  },
  mounted() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      if (!this.treeView) {
        this.dataProvider = new LocalTreeDataProvider();
        this.treeView = new TreeView(this.$refs.realgrid);

        this.setColumns();
        this.setDataProvider();
        
        this.treeView.setOptions({
          display: {
            rowHeight: 30,
          },
        });
      }
    },
    setColumns() {
      const columns = [
        {
          fieldName: 'treeName',
          header: {
            text: this.getHeaderText(),
            cssClass: this.getHeaderClass(),
          },
          width: 150,
          editable: true,
        },
      ];

      this.treeView.setColumns(columns);
    },
    setDataProvider() {
      const fields = [
        { fieldName: 'treeId', dataType: 'text' },
        { fieldName: 'treeName', dataType: 'text' },
        { fieldName: 'area1code', dataType: 'text' },
        { fieldName: 'area1name', dataType: 'text' },
        { fieldName: 'area2code', dataType: 'text' },
        { fieldName: 'area2name', dataType: 'text' },
        { fieldName: 'iconField', dataType: 'number' },
      ];

      this.dataProvider.setFields(fields);

      const rows = [
        {
          treeId: "11",
          treeName: "서울특별시",
          area1code: "11",
          area1name: "서울특별시",
          iconField: 0,
        },
        {
          treeId: "11.010",
          treeName: "종로구",
          area1code: "11",
          area1name: "서울특별시",
          area2code: "11010",
          area2name: "종로구",
          iconField: 1,
        },
      ];

      this.dataProvider.setRows(rows, "treeId", false, null, "iconField");
      this.treeView.setDataSource(this.dataProvider);
    },
    getHeaderText() {
      return this.isHeaderA ? '헤더 A' : '헤더 B';
    },
    getHeaderClass() {
      return this.isHeaderA ? 'header-a' : 'header-b';
    },
    toggleHeader() {
      this.isHeaderA = !this.isHeaderA;
      this.treeView.setColumnProperty('treeName', 'header', {
        text: this.getHeaderText(),
        cssClass: this.getHeaderClass(),
      });
      this.treeView.refresh(); // 리프레시하여 변경사항 적용
    },
  },
};
</script>

<style>
.header-a {
  background-color: #ffcccc; /* 헤더 A 색상 */
}

.header-b {
  background-color: #ccffcc; /* 헤더 B 색상 */
}

.rg-header-renderer {
  text-align: left !important;
  padding-left: 10px;
}
</style>
