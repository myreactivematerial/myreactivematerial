import { DrupalSimpleArticleAttribute } from './drupal-simple-article-attribute';

export class DrupalSimpleArticle {
    type: string = '';
    id: string  = '';
    attributes: DrupalSimpleArticleAttribute = new DrupalSimpleArticleAttribute;
}
