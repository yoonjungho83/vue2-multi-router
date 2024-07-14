<template>
    <div id="app">
      <ul>
        <tree-node
          v-for="node in treeData"
          :key="node.id"
          :node="node"
          @mouseover="handleMouseEnter(node)"
          @mouseleave="handleMouseLeave"
          @contextmenu.prevent="handleContextMenu(node, $event)"
        />
      </ul>
      <vue-context ref="contextMenu" :style="{ top: contextMenuStyle.top + 'px', left: contextMenuStyle.left + 'px' }">
        <li @click="menuAction('Action 1')">Action 1</li>
        <li @click="menuAction('Action 2')">Action 2</li>
      </vue-context>
    </div>
  </template>
  
  <script>
  import VueContext from 'vue-context';
  import 'vue-context/dist/css/vue-context.css';
  
  export default {
    name: 'App',
    components: {
      VueContext,
      TreeNode: {
        name: 'TreeNode',
        props: {
          node: Object,
        },
        template: `
          <li>
            <div class="node"
              @mouseover="$emit('mouseover', node)"
              @mouseleave="$emit('mouseleave')"
            >
              {{ node.label }}
            </div>
            <ul v-if="node.children && node.children.length">
              <tree-node
                v-for="child in node.children"
                :key="child.id"
                :node="child"
                @mouseover="$emit('mouseover', child)"
                @mouseleave="$emit('mouseleave')"
                @contextmenu.prevent="handleContextMenu(child, $event)"
              />
            </ul>
          </li>
        `,
      },
    },
    data() {
      return {
        treeData: [
          {
            id: 'a',
            label: 'Node A',
            // children: [
            //   { id: 'aa', label: 'Node AA' },
            //   { id: 'ab', label: 'Node AB' },
            // ],
          },
          {
            id: 'b',
            label: 'Node B',
            // children: [
            //   { id: 'ba', label: 'Node BA' },
            //   { id: 'bb', label: 'Node BB' },
            // ],
          },
        ],
        hoverNode: null,
        contextMenuStyle: {
          top: 0,
          left: 0,
        },
      };
    },
    methods: {
      handleMouseEnter(node) {
        this.hoverNode = node;
      },
      handleMouseLeave() {
        this.hoverNode = null;
      },
      handleContextMenu(node, event) {
        event.preventDefault(); // 기본 컨텍스트 메뉴가 나타나지 않도록 합니다.
        this.contextMenuStyle.top = event.clientY + 'px';
        this.contextMenuStyle.left = event.clientX + 'px';
        this.$refs.contextMenu.open();
        this.hoverNode = node; // 마우스 위치에 따라 hoverNode 설정
      },
      menuAction(action) {
        alert(`${action} on node ${this.hoverNode ? this.hoverNode.label : ''}`);
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .node {
    padding: 5px;
    cursor: pointer;
  }
  
  .node:hover {
    background-color: #f0f0f0;
  }
  </style>
  