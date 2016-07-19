class Article < ActiveRecord::Base
  def self.get_articles
    response = HTTParty.get("http://api.nytimes.com/svc/topstories/v1/home.json?api-key=***REMOVED***")
    response["results"].first(20).each do |article|
      new_article = self.new
      new_article.title = article["title"]
      new_article.section = article["section"]
      new_article.abstract = article["abstract"]
      new_article.url = article["url"]
      new_article.byline = article["byline"]
      new_article.published_date = article["published_date"]
      new_article.material_type_facet = article["material_type_facet"]
      new_article.save
    end
  end
end
