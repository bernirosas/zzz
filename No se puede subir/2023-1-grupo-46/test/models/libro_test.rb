require "test_helper"

class LibroTest < ActiveSupport::TestCase
  test "no se debería guardar libro sin sus atributos" do
    libro = Libro.new
    result = libro.save
    assert_not result, "Se guardó libro sin sus atributos"
  end
  test "sí se debería guardar libro con sus atributos" do
    libro = Libro.new(titulo: "B", fecha: 2000, categoria: "B", autor: "B", precio: "1000", stock: "1", 
                      descripcion: "B")
    result = libro.save
    assert result, "No se guardó libro con sus atributos"
  end
end
