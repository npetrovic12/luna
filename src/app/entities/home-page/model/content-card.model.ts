export interface ContentCard {
  imgPath: string;
  title: string;
  alt: string;
  text: string;
}

export const mockContentCards: ContentCard[] = [
  {
    imgPath: '/assets/images/home-page/m1.webp',
    alt: 'La Couture Venčanica',
    title: 'La couture - Studio Luna',
    text: 'Vreme je da stvorite magiju, zapocnite je kod nas. Zakoracite u svet vase najdivnije bajke jer snovi postaju stvarnost kada posetite nas salon venčanica. Usluga u našem salonu je presonalizovana, sto znaci da svaki klijent dobija potpunu posvecenost pri odabiru svoje vencanice. Nase vencanice ce vam omoguciti da upotpunite svoj nezaboravan dan, jer svaka od njih nosi poseban pecat da ćete prisutne goste ostaviti bez daha',
  },
  {
    imgPath: '/assets/images/home-page/m3.webp',
    title: 'La couture',
    alt: 'La Couture Venčanica - Studio Luna',
    text: 'Probe u nasem salonu se zakazuju zbog kvalitetnije usluge i predanosti svakom nasem klijentu posebno. Mi ćemo se potruditi da se u nasem prostoru osecate prijatno jer sledece poglavlje vaseg zivota pocinje upravo kod nas. Kvalitetni materijali i jedinstven dizajn su ono sto opisuje nase vencanice.',
  },
];
