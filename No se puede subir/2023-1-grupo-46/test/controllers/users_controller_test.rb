require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.new(email: "aaaa@uc.cl", password: "123456", nombre: "aaaa", telefono: "123456789", 
                     descripcion: "aaaa", tipo_de_usuario: "C", picture: "logo.gif")
    @user.save
    sign_in @user
  end
  test "should show user" do
    get '/profile'
    assert_response :success
  end
end
