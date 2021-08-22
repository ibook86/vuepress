module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            '/',
            '/list'
            // ['/page-b', 'Explicit link text']
        ],
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
        ],
        search: true,
        searchMaxSuggestions: 10
    }
}