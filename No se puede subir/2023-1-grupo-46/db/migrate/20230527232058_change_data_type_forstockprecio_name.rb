class ChangeDataTypeForstockprecioName < ActiveRecord::Migration[7.0]
  def change
    change_column :libros, :stock, :string
  end
end
