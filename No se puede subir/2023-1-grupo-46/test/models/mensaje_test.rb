require "test_helper"

class MensajeTest < ActiveSupport::TestCase
  test "no se debería guardar mensaje sin sus atributos" do
    mensaje = Mensaje.new
    result = mensaje.save
    assert_not result, "Se guardó mensaje sin sus atributos"
  end
end
