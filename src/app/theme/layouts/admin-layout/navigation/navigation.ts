export interface NavigationItem {
    id: string;
    title: string;
    type: 'item' | 'collapse' | 'group';
    translate?: string;
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    groupClasses?: string;
    exactMatch?: boolean;
    external?: boolean;
    target?: boolean;
    breadcrumbs?: boolean;
    children?: NavigationItem[];
    link?: string;
    description?: string;
    path?: string;
}

export const NavigationItems: NavigationItem[] = [
    {
        id: 'account',
        title: 'Cuenta',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'users',
                title: 'Reservar',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/users',
                icon: 'plus',
                breadcrumbs: false
            },
            {
                id: 'reserva-actual',
                title: 'Reserva actual',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/users',
                icon: 'car',
                breadcrumbs: false
            },
            {
                id: 'parkings',
                title: 'Historial',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/users',
                icon: 'calendar',
                breadcrumbs: false
            }
        ]
    },
    {
        id: 'administration',
        title: 'Administración',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'users',
                title: 'Usuarios',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/users',
                icon: 'team',
                breadcrumbs: false
            },
            {
                id: 'parkings',
                title: 'Estacionamientos',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/users',
                icon: 'car',
                breadcrumbs: false
            }
        ]
    },
];
