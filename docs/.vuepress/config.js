module.exports = {
    host: 'localhost',
    title: '管理经济学',
    description: '管理经济学',
    markdown: {},
    themeConfig: {
        displayAllHeaders: true,
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
        }, {
            title: '第三章-消费者效用分析',
            collapsable: false,
            children: [
                '/第三章/',
            ]
        }, {
            title: '第四章-需求弹性与供给弹性分析',
            collapsable: false,
            children: [
                '/第四章/',
            ]
        }, {
            title: '第五章-生产要素投入的决策分析',
            collapsable: false,
            children: [
                '/第五章/',
            ]
        }],
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '关于我',
                items: [
                    { text: '我的博客', link: 'https://yichenghui.net' },
                    { text: 'Github', link: 'https://github.com/yichenghui' }
                ]
            }
        ]
    }
}