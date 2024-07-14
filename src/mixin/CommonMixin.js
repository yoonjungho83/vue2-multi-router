'use strict';

import { onMounted } from "vue";


/** 공통 합수.
 *  
 */

export default {
	data() {
	  return {
		mixinData: 'This is data from the mixin'
	  };
	},
	methods: {
	  mixinMethod() {
		console.log('This method is from the mixin');
	  },

	  getRealgridHeaderLayout(depth, columns){
		console.log('This method is from the mixin  getRealgridHeaderLayout' );
		if (depth === 0) return [];

		const layout = [];
		const items = columns.splice(0, Math.ceil(columns.length / depth)); // 현재 깊이에 맞는 만큼 컬럼을 분배

		layout.push({
			name: `groupLevel${3 - depth}`, // 그룹 이름 생성
			direction: "horizontal",
			header: { text: `Header Level ${3 - depth}`, tooltip: `Tooltip for level ${3 - depth}`, showTooltip: true },
			items: items
		});

		// 다음 깊이로 재귀 호출
		layout.push(...this.getRealgridHeaderLayout(depth - 1, columns));
		return layout;
	  },
	},
	created() {
	  console.log('Mixin created hook called');
	},
	mounted(){
		console.log('Mixin mounted hook called');
	},
  };