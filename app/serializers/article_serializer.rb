class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :section, :abstract, :url, :byline, :published_date, :material_type_facet
  has_many :comments
  belongs_to :user
end
