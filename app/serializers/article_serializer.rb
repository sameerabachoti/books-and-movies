class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :section, :abstract, :url, :byline, :published_date, :material_type_facet
end
