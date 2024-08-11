class AddPictureToLibros < ActiveRecord::Migration[7.0]
  def change
    add_column :libros, :picture, :string
  end
end
