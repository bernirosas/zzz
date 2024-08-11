require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "no se debería guardar user sin sus atributos" do
    user = User.new
    result = user.save
    assert_not result, "Se guardó user sin sus atributos"
  end
  test "sí se debería guardar user con sus atributos" do
    user = User.new(email: "aaaa@uc.cl", password: "123456", nombre: "aaaa", telefono: "123456789", 
                    descripcion: "aaaa", tipo_de_usuario: "C")
    result = user.save
    assert result, "No se guardó user con sus atributos"
  end
end
