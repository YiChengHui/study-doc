module.exports = {
    host: 'localhost',
    title: '管理经济学',
    description: '管理经济学',
    markdown: {},
    themeConfig: {
        sidebarDepth: 2,
        sidebar: [{
            title: '第一章-导论',
            collapsable: false,
            children: [
                '/第一章/',
            ]
        }, {
            title: '第二章-供求分析',
            collapsable: false,
            children: [
                '/第二章/',
            ]
        }]
    }
}