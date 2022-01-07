import { Content } from "@angular/compiler/src/render3/r3_ast";

export interface ContentCard {
    imgPath: string;
    title: string;
    text: string;
}

export const mockContentCards: ContentCard[] = [
    {
        imgPath: '/assets/images/home-page/content-cards/card-1.jpg',
        title: 'La couture',
        text: 'Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis.'
    },
    {
        imgPath: '/assets/images/home-page/content-cards/card-2.jpg',
        title: 'La couture',
        text: 'Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis.'
    },
    {
        imgPath: '/assets/images/home-page/content-cards/card-3.jpg',
        title: 'La couture',
        text: 'Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis.'
    }
];