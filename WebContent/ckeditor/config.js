/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights
 *          reserved. For licensing, see LICENSE.md or
 *          http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [ {
		name : 'clipboard',
		groups : [ 'clipboard', 'undo' ]
	}, {
		name : 'editing',
		groups : [ 'find', 'selection', 'spellchecker' ]
	}, {
		name : 'links'
	}, {
		name : 'insert'
	}, {
		name : 'forms'
	}, {
		name : 'tools'
	}, {
		name : 'document',
		groups : [ 'mode', 'document', 'doctools' ]
	}, {
		name : 'others'
	}, '/', {
		name : 'basicstyles',
		groups : [ 'basicstyles', 'cleanup' ]
	}, {
		name : 'paragraph',
		groups : [ 'list', 'indent', 'blocks', 'align', 'bidi' ]
	}, {
		name : 'styles'
	}, {
		name : 'colors'
	}, {
		name : 'about'
	} ];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	// -------I add below configs--------------------------

	config.image_previewText = ' '; // 预览区域显示内容
	config.filebrowserBrowseUrl = 'ckfinder/ckfinder.html';
	config.filebrowserImageBrowseUrl = 'ckfinder/ckfinder.html?Type=Images';
	config.filebrowserFlashBrowseUrl = 'ckfinder/ckfinder.html?Type=Flash';
	config.filebrowserUploadUrl = 'ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
	config.filebrowserImageUploadUrl = 'ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
	config.filebrowserFlashUploadUrl = 'ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';

	// 自定义上传处理器
	// config.filebrowserImageUploadUrl = 'fileUploadServlet.do';

	// 开启设置文字大小插件
	config.extraPlugins = 'font';
	// 使用默认列表即可
	// config.fontSize_sizes ='16/16px;24/24px;48/48px;';
	// 设置默认字体大小
	config.fontSize_defaultLabel = '14px';

	// 是否使用完整的html编辑模式，如使用，其源码将包含：html等标签。
	config.fullPage = true;

	// 设置回车使用的标签默认为p标签
	config.enterMode = CKEDITOR.ENTER_BR;

	// 设置界面语言
	config.language = 'zh-cn';

	// 设置文字颜色
	config.extraPlugins = 'panelbutton,colorbutton,colordialog';
	//设置显示更多颜色
	config.colorButton_enableMore = true;
	
	//设置表格属性(如颜色)
	config.extraPlugins = 'tabletools';
	
	//快速查找与替换 额外依赖Dialog插件，4.5.10默认包含了该插件
	config.extraPlugins = 'find';
	
	//添加代码片段
	config.extraPlugins = 'codesnippet,widget,lineutils';
	config.codeSnippet_theme = 'pojoaque';
};
