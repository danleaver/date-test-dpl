require 'test_helper'

class Api::ClocksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_clocks_show_url
    assert_response :success
  end

  test "should get create" do
    get api_clocks_create_url
    assert_response :success
  end

  test "should get update" do
    get api_clocks_update_url
    assert_response :success
  end

end
