require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get '/'
    assert_response :success
  end
  test "should get inicio" do
    get inicio_url
    assert_response :success
    assert_template :inicio
  end
end
