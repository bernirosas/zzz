require "test_helper"

class MensajesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @libro = Libro.new(titulo: "B", fecha: 2000, categoria: "B", autor: "B", precio: "1000", stock: "1", 
                       descripcion: "B")
    @libro.save
    @user = User.new(email: "aaaa@uc.cl", password: "123456", nombre: "aaaa", telefono: "123456789", 
                     descripcion: "aaaa", tipo_de_usuario: "C", picture: "logo.gif")
    @user.save
    sign_in @user
    @mensaje = @libro.mensajes.new(texto: "aa")
    @mensaje.user = @user
    @mensaje.save
  end
  test "should get index" do
    get libro_mensajes_url(@libro)
    assert_response :success
  end
  test "should get new" do
    get new_libro_mensaje_url(@libro)
    assert_response :success
  end
  test "should show mensaje" do
    get libro_mensaje_url(@libro.id, @mensaje.id)
    assert_response :success
  end
  test "should destroy mensaje" do
    assert_difference("Mensaje.count", -1) do
      delete libro_mensaje_url(@libro.id, @mensaje.id)
    end
    assert_redirected_to libro_mensajes_url(@libro.id)
  end
  test "should create mensaje" do
    assert_difference("Mensaje.count") do
      post libro_mensajes_url(@libro.id), params: {mensaje: {texto: "aa"}}
    end
    assert_redirected_to libro_mensajes_path(@libro.id)
  end
  test "should create mensaje with unprocessable entity status" do
    assert_no_difference("Mensaje.count") do
      post libro_mensajes_url(@libro.id), params: { mensaje: { invalid_param: "invalid" } }
    end
    assert_response :unprocessable_entity
    assert_template :new
  end
  test "should get edit" do
    get edit_libro_mensaje_url(@libro, @mensaje)
    assert_response :success
  end
  test "should update mensaje" do
    updated_texto = "Updated Texto"
    patch libro_mensaje_url(@libro.id, @mensaje.id), params: { mensaje: { texto: updated_texto } }
    assert_redirected_to libro_mensajes_url(@libro.id)
    @mensaje.reload
    assert_equal updated_texto, @mensaje.texto
  end
end
