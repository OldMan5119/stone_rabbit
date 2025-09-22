import HomePage from "@/layout/components/HomePage";

export const constantRoutes = [
    {
        path: "/",
        component: HomePage,
        name: "Home",
        redirect: "/guide",
        children: [
            {
                name: "dashboard",
                path: "dashboard",
                component: () => import("@/views/dashboard/index")
            }
        ]
    }, {
        path: "/guide",
        component: HomePage,
        name: "Guide",
        redirect: '/guide/index',
        children: [{
            path: 'index',
            component: () => import('@/views/stk/SqlQuery'),
            name: 'Guide',
            meta: {title: 'Guide', icon: 'guide', noCache: true}
        }]
    }, {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/LoginPage"),
        hidden: true,
        meta: {
            noNeedAuth: true
        }
    }
]

export const asyncRoutes = [
    {
        path: '/icon',
        name: "Icon",
        component: HomePage,
        children: [
            {
                path: 'index',
                component: () => import('@/views/guide/index'),
                name: 'Icons',
                meta: {title: 'Icons', icon: 'icon', noCache: true}
            }
        ]
    },

    {
        path: '/example',
        component: HomePage,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'Example',
            icon: 'el-icon-s-help',
            roles: ['admin']
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/guide/index'),
                name: 'CreateArticle',
                meta: {title: 'Create Article', icon: 'edit', roles: ['guest']},
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/guide/index'),
                name: 'EditArticle',
                meta: {title: 'Edit Article', noCache: true, activeMenu: '/example/list', roles: ['guest']},
                hidden: true
            },
            {
                path: 'list',
                component: () => import('@/views/guide/index'),
                name: 'ArticleList',
                meta: {title: 'Article List', icon: 'list'}
            }
        ]
    },

    {
        path: '/excel',
        component: HomePage,
        redirect: '/excel/export-excel',
        name: 'Excel',
        meta: {
            title: 'Excel',
            icon: 'excel',
            roles: ['admin']
        },
        children: [
            {
                path: 'export-excel',
                component: () => import('@/views/guide/index'),
                name: 'ExportExcel',
                meta: {title: 'Export Excel'}
            },
            {
                path: 'export-selected-excel',
                component: () => import('@/views/guide/index'),
                name: 'SelectExcel',
                meta: {title: 'Export Selected'}
            },
            {
                path: 'export-merge-header',
                component: () => import('@/views/guide/index'),
                name: 'MergeHeader',
                meta: {title: 'Merge Header'}
            },
            {
                path: 'upload-excel',
                component: () => import('@/views/guide/index'),
                name: 'UploadExcel',
                meta: {title: 'Upload Excel'}
            }
        ]
    },

    {path: '*', redirect: '/404', hidden: true}
]