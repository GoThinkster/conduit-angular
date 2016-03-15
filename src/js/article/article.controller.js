import marked from 'marked';

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    // Update the title of this page
    $rootScope.setPageTitle(this.article.title);

    // Transform the markdown into HTML
    this.article.body = $sce.trustAsHtml(marked(this.article.body));

  }

}


export default ArticleCtrl;
