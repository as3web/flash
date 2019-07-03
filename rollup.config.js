var includePaths = require('rollup-plugin-includepaths');

module.exports = {
	entry: './dist/index.js',
	sourceMap: true,
	format: 'umd',
	moduleName: 'AwayjsView',
	external: [
		'@awayjs/core',
		'@awayjs/graphics',
		'@awayjs/materials',
		'@awayjs/renderer',
		'@awayjs/scene',
		'@awayjs/stage',
		'@awayjs/view',
		'@awayjs/swf-viewer',
		'@awayjs/player',

	],
	globals: {
		'@awayjs/core': 'AwayjsCore',
		'@awayjs/graphics': 'AwayjsGraphics',
		'@awayjs/materials': 'AwayjsMaterials',
		'@awayjs/renderer': 'AwayjsRenderer',
		'@awayjs/scene': 'AwayjsScene',
		'@awayjs/stage': 'AwayjsStage',
		'@awayjs/swf-viewer': 'AwayjsSWFViewer',
		'@awayjs/player': 'AwayjsPlayer',
		'@awayjs/view': 'AwayjsView'
	},
	targets: [
		{ dest: './bundle/as3web-flash.umd.js'}
	],
	plugins: [
		includePaths({
			include : {
				"tslib": "./node_modules/tslib/tslib.es6.js"
			}
		}) ]
};