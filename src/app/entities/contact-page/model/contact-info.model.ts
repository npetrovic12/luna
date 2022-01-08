export interface ContactInfoItem {
    iconPath: string;
    label: string;
    value: string;
    href: string;
}

export const BUSSINESS_ADDRESS = 'Beogradska 45/10, 11000 Beograd';
export const PHONE_NUMBER = '060770634';
export const INSTAGRAM_USERNAME = 'vencanice_studioluna';

export const contactInfoItems: ContactInfoItem[] = [
    {
        value: PHONE_NUMBER,
        label: 'Telefon',
        iconPath: '/assets/icons/call_black_24dp.svg',
        href: 'tel:' + PHONE_NUMBER,
    },
    {
        value: BUSSINESS_ADDRESS,
        label: 'Adresa',
        iconPath: '/assets/icons/location_on_black_24dp.svg',
        // generate new one if address changes
        href: 'https://goo.gl/maps/dM1xmXa2aoHVKoGR7', 
    },
    {
        value: '@' + INSTAGRAM_USERNAME,
        label: 'Instagram',
        iconPath: '/assets/icons/instagram.svg',
        href: 'https://www.instagram.com/' + INSTAGRAM_USERNAME,
    },
]