import Category from '../../category';
import ShowcaseCards from '../../../custom/category/showcase-cards';

export default class ShowcaseCategory extends Category {
    onReady() {
        super.onReady();

        const showcaseCards = new ShowcaseCards(this.context);
        showcaseCards.init();
    }
}