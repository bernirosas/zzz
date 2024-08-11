require "test_helper"

class ComprasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @libro = Libro.new(titulo: "B", fecha: 2000, categoria: "B", autor: "B", precio: "1000", stock: "1", 
                       descripcion: "B")
    @libro.save
    @user = User.new(email: "aaaa@uc.cl", password: "123456", nombre: "aaaa", telefono: "123456789", 
                     descripcion: "aaaa", tipo_de_usuario: "C", picture: "logo.gif")
    @user.save
    sign_in @user
    @compra = @user.compras.new(estado: "E")
    @compra.libro = @libro
    @compra.save
  end
  test "should get index" do
    get user_compras_url(@user)
    assert_response :success
  end
  test "should get edit" do
    get edit_user_compra_url(@user, @compra)
    assert_response :success
  end
  test "should show compra" do
    get user_compra_url(@user.id, @compra.id)
    assert_response :success
  end
  test "should update compra" do
    updated_estado = "Updated Estado"
    patch user_compra_url(@user.id, @compra.id), params: { compra: { estado: updated_estado } }
    assert_redirected_to user_compras_url(@user.id)
    @compra.reload
    assert_equal updated_estado, @compra.estado
  end
  test "should destroy compra" do
    @compra = @user.compras.new(estado: "E")
    @compra.libro = @libro
    @compra.save
    assert_difference("Compra.count", -1) do
      delete user_compra_url(@user.id, @compra.id)
    end
    assert_redirected_to user_compras_url(@user)
  end
  test "should get new" do
    get new_libro_compra_url(@libro)
    assert_response :success
  end
  test "should create compra" do
    assert_difference("Compra.count") do
      post libro_compras_url(@libro), params: { compra: { estado: "E" } }
    end
    assert_redirected_to user_compras_url(@user)
    assert_equal "La compra se ha creado correctamente.", flash[:notice]
  end
end
