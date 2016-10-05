class Movie < ActiveRecord::Base
  has_many :movie_reviews
  belongs_to :user

  def self.get_movies
    response = HTTParty.get("http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=087609e876114f51890cbd02598c33fc")

    response["results"].each do |movie|
      new_movie = self.find_or_create_by(display_title: movie["display_title"], mpaa_rating: movie["mpaa_rating"], critics_pick: movie["critics_pick"], byline: movie["byline"], headline: movie["headline"], summary_short: movie["summary_short"], opening_date: movie["opening_date"], image: movie["multimedia"]["src"]) 
    end
  
  end
end
