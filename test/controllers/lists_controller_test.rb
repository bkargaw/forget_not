require 'test_helper'

class ListsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get lists_create_url
    assert_response :success
  end

  test "should get destroy" do
    get lists_destroy_url
    assert_response :success
  end

end
