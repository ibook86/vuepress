module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: {
            '/': [
                {
                    title: '指南',
                    collapsable: true,
                    children: ['', 'usage'],
                },
                {
                    title: '列表',
                    collapsable: false,
                    children: ['', 'list'],
                }
            ]
        }
    }
}