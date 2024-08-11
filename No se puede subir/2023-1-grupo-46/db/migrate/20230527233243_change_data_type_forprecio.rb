class ChangeDataTypeForprecio < ActiveRecord::Migration[7.0]
  def change
    change_column :libros, :precio, :string
  end
end
