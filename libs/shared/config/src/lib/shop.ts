import { IProduct } from '..';
import { contact } from './contact';

export const stagefrightShirtSource =
  './assets/img/products/merch/stagefright_black_shirt_chest_logo.png';

const altTextPrefix = <const>'StageFright Merch';

export const shopData = <const>{
  url: `mailto:${contact.email}?subject=Order%20StageFright%20Merch`,
  products: {
    shirt: <IProduct[]>[
      {
        name: 'Shirt S',
        // image:
        //   'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        image: stagefrightShirtSource,
        altText: `${altTextPrefix} Shirt Size S`,
        status: 'New!',
      },
      {
        name: 'Shirt M',
        // image:
        //   'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        image: stagefrightShirtSource,
        altText: `${altTextPrefix} Shirt Size M`,
        status: 'New!',
      },
      {
        name: 'Shirt L',
        // image:
        //   'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        image: stagefrightShirtSource,
        altText: `${altTextPrefix} Shirt Size L`,
        status: 'New!',
      },
      {
        name: 'Shirt XL',
        // image:
        //   'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        image: stagefrightShirtSource,
        altText: `${altTextPrefix} Shirt Size XL`,
        status: 'New!',
      },
    ],
    // sticker: [
    //   {
    //     name: 'Vintage Sticker',
    //     // image:
    //     //   'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     image: '',
    //     altText: `${altTextPrefix} Vintage Sticker`,
    //     status: 'Out of Stock',
    //   },
    // ],
  },
};
