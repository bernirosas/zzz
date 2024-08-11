require "test_helper"

class LibrosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @libro = Libro.new(titulo: "B", fecha: 2000, categoria: "Suspenso", autor: "B", precio: "1000", stock: "1", 
                       descripcion: "B")
    @libro.save
  end
  test "should get index" do
    get libros_url
    assert_response :success
  end
  test "should get new" do
    get new_libro_url
    assert_response :success
  end
#  test "should show libro" do
#    @libro = Libro.new(titulo: "B", fecha: 2000, categoria: 
#    "Suspenso", autor: "B", precio: "1000", stock: "1", descripcion: "B")
#    get libro_url(@libro)
#    @libro.save
#    assert_response :success
#  end
  test "should destroy libro" do
    assert_difference("Libro.count", -1) do
      delete libro_url(@libro)
    end
    assert_redirected_to libros_url
  end
  test "should get edit" do
    get edit_libro_url(@libro)
    assert_response :success
  end
  test "should create libro" do
    assert_difference("Libro.count") do
      post libros_url, 
           params: {libro: {titulo: "B", fecha: 2000, 
           categoria: "Suspenso", autor: "B", precio: "1000", stock: "1", 
           descripcion: "B"}}
    end
    assert_redirected_to libro_path(Libro.last)
  end
  test "should update libro" do
    updated_titulo = "C"
    updated_fecha = "2001"
    updated_categoria = "Romance"
    updated_autor = "C"
    updated_precio = "1001"
    updated_stock = "2"
    updated_descripcion= "C"
    patch libro_path(@libro), 
          params: {libro: {titulo: updated_titulo, fecha: updated_fecha,
            categoria: updated_categoria, autor: updated_autor, 
            precio: updated_precio, stock: updated_stock, descripcion: updated_descripcion}}
    assert_redirected_to libro_path(@libro)
    @libro.reload
    assert_equal updated_titulo, @libro.titulo
    assert_equal updated_fecha, @libro.fecha.to_s
    assert_equal updated_categoria, @libro.categoria
    assert_equal updated_autor, @libro.autor
    assert_equal updated_precio, @libro.precio
    assert_equal updated_stock, @libro.stock
    assert_equal updated_descripcion, @libro.descripcion
  end
end
