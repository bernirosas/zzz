require "test_helper"

class ResenaTest < ActiveSupport::TestCase
  test "no se debería guardar resena sin sus atributos" do
    resena = Resena.new
    result = resena.save
    assert_not result, "Se guardó resena sin sus atributos"
  end
end
