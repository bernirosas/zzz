require "test_helper"

class ResenasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @libro = Libro.new(titulo: "B", fecha: 2000, categoria: "B", autor: "B", precio: "1000", stock: "1", 
                       descripcion: "B")
    @libro.save
    @user = User.new(email: "aaaa@uc.cl", password: "123456", nombre: "aaaa", telefono: "123456789", 
                     descripcion: "aaaa", tipo_de_usuario: "C", picture: "logo.gif")
    @user.save
    sign_in @user
    @resena = @libro.resenas.new(titulo: "aa", cuerpo: "bb")
    @resena.user = @user
    @resena.save
  end
  test "should get index" do
    get libro_resenas_url(@libro)
    assert_response :success
  end
  test "should get new" do
    get new_libro_resena_url(@libro)
    assert_response :success
  end
  test "should show resena" do
    get libro_resena_url(@libro.id, @resena.id)
    assert_response :success
  end
  test "should destroy resena" do
    assert_difference("Resena.count", -1) do
      delete libro_resena_url(@libro.id, @resena.id)
    end
    assert_redirected_to libro_resenas_url(@libro.id)
  end
  test "should create resena" do
    assert_difference("Resena.count") do
      post libro_resenas_url(@libro.id), params: {resena: {titulo: "aa", cuerpo: "bb"}}
    end
    assert_redirected_to libro_resenas_path(@libro.id)
  end
  test "should create resena with unprocessable entity status" do
    assert_no_difference("Resena.count") do
      post libro_resenas_url(@libro.id), params: { resena: { invalid_param: "invalid" } }
    end
    assert_response :unprocessable_entity
    assert_template :new
  end
  test "should get edit" do
    get edit_libro_resena_url(@libro, @resena)
    assert_response :success
  end
  test "should update resena" do
    updated_titulo = "Updated Titulo"
    updated_cuerpo = "Updated Cuerpo"
    patch libro_resena_url(@libro.id, @resena.id), 
          params: { resena: { titulo: updated_titulo, cuerpo: updated_cuerpo } }
    assert_redirected_to libro_resenas_url(@libro.id)
    @resena.reload
    assert_equal updated_cuerpo, @resena.cuerpo
  end
  test "should get categoria" do
    get categoria_url(categoria: "Suspenso")
    assert_response :success
    assert_template :categoria
    assert_equal "Suspenso", assigns(:categoria_seleccionada)
    assert_not_nil assigns(:libros)
  end
end
