module.exports = {
    host: 'localhost',
    title: '学习笔记',
    description: '学习笔记',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {},
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [{
            title: '管理经济学',
            children: [{
                title: '第一章-导论',
                children: [
                    '/管理经济学/第一章/',
                ]
            }, {
                title: '第二章-供求分析',
                children: [
                    '/管理经济学/第二章/',
                ]
            }, {
                title: '第三章-消费者效用分析',
                children: [
                    '/管理经济学/第三章/',
                ]
            }, {
                title: '第四章-需求弹性与供给弹性分析',
                children: [
                    '/管理经济学/第四章/',
                ]
            }, {
                title: '第五章-生产要素投入的决策分析',
                children: [
                    '/管理经济学/第五章/',
                ]
            }, {
                title: '第六章-成本分析',
                children: [
                    '/管理经济学/第六章/',
                ]
            }, {
                title: '第七章-生产产出的决策分析',
                children: [
                    '/管理经济学/第七章/',
                ]
            }, {
                title: '第八章-完全竞争市场中的企业决策',
                children: [
                    '/管理经济学/第八章/',
                ]
            }, {
                title: '第九章-垄断市场中的企业决策',
                children: [
                    '/管理经济学/第九章/',
                ]
            }, {
                title: '第十章-垄断竞争市场中的企业决策',
                children: [
                    '/管理经济学/第十章/',
                ]
            }]
        }, {
            title: '操作系统概论',
            children: [{
                title: '第一章-操作系统简介',
                children: [
                    '/操作系统概论/第一章/',
                ]
            }, {
                title: '第二章-进程管理',
                children: [
                    '/操作系统概论/第二章/',
                ]
            }, {
                title: '第三章-进程调度与死锁',
                children: [
                    '/操作系统概论/第三章/',
                ]
            }, {
                title: '第四章-内存管理',
                children: [
                    '/操作系统概论/第四章/',
                ]
            }, {
                title: '第五章-文件系统',
                children: [
                    '/操作系统概论/第五章/',
                ]
            }, {
                title: '第六章-I/O设备管理',
                children: [
                    '/操作系统概论/第六章/',
                ]
            }]

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