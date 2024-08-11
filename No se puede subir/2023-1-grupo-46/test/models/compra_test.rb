require "test_helper"

class CompraTest < ActiveSupport::TestCase
  test "no se debería guardar compra sin sus atributos" do
    compra = Compra.new
    result = compra.save
    assert_not result, "Se guardó compra sin sus atributos"
  end
end
