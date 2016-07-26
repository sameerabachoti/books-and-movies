class Article < ActiveRecord::Base
  has_many :comments
  belongs_to :user

  def self.get_articles
    response = HTTParty.get("http://api.nytimes.com/svc/topstories/v1/home.json?api-key=087609e876114f51890cbd02598c33fc")
    response["results"].first(20).each do |article|
      new_article = self.find_or_create_by(title: article["title"], section: article["section"], abstract: article["abstract"], url: article["url"], 
      byline: article["byline"], published_date: article["published_date"], material_type_facet: article["material_type_facet"])
    end
  end
end
