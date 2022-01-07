export interface ContactInfoItem {
    iconPath: string;
    value: string;
    href: string;
}

export const cords = {
    lat: 44.80634492593947, lng: 20.4702565980087 
};

export const contactInfoItems: ContactInfoItem[] = [
    {
        value: '060/077-06-34',
        iconPath: '/assets/icons/call_black_24dp.svg',
        href: 'tel:060770634'
    },
    {
        value: 'Beogradska 45/10, 11000 Beograd',
        iconPath: '/assets/icons/location_on_black_24dp.svg',
        href: ''
    },
    {
        value: '@vencanice_studioluna',
        iconPath: '/assets/icons/instagram.svg',
        href: 'https://www.instagram.com/vencanice_studioluna'
    },
]