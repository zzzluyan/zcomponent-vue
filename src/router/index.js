import Vue from 'vue';
import Router from 'vue-router';
// import baseComponent from './baseComponentsRouter';
import baseView from '@/views/base/baseView';
import Test from '@/components/CheckBox/src/checkbox';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: baseView
		// children: [...baseComponent]
	}]
});
