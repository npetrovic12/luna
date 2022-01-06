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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium sapien neque, tincidunt volutpat diam cursus ac. In non lacus vulputate, rutrum risus non, condimentum nisl. Nam sollicitudin eget diam non efficitur. Phasellus ac dolor ut erat vestibulum ullamcorper eget vitae massa. Nulla nec est sed massa molestie finibus id at orci. Morbi ac euismod felis. Curabitur sapien lacus, porta sit amet mi id.'
    },
    {
        imgPath: '/assets/images/home-page/content-cards/card-2.jpg',
        title: 'La couture',
        text: 'Praesent at nisi a sem interdum hendrerit nec et leo. Duis vel luctus ex. Morbi augue sem, luctus sit amet eleifend eu, placerat non mauris. Curabitur placerat laoreet leo, non consequat dolor. Sed venenatis efficitur risus vitae pulvinar. Curabitur viverra sagittis vehicula. Aliquam efficitur ac sem tincidunt accumsan. Curabitur feugiat efficitur libero, elementum dapibus mi aliquet ac. Nam ut lobortis quam, at feugiat nulla. Aliquam erat volutpat. Etiam vehicula dictum facilisis. Quisque nec eros quam.'
    },
    {
        imgPath: '/assets/images/home-page/content-cards/card-3.jpg',
        title: 'La couture',
        text: 'Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis, nibh sed rutrum ornare, libero mi faucibus enim, nec facilisis ex nisl in odio. Nam mattis mollis porttitor. Phasellus et turpis nec neque ornare aliquam.'
    }
];