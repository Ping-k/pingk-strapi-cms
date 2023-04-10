/**
 * 自定义配置-中文
 * 官方文档：https://docs.strapi.io/dev-docs/admin-panel-customization#configuration-options
 */
export default {
    config: {
        locales: [
            'zh-Hans',
            'zh',
        ],
    },
    bootstrap(app) {
        console.log(app);
    },
};