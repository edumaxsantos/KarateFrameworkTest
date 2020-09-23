Feature: Testar as funções de uma API fake

  Scenario: Recuperar access-token
    Given url 'http://localhost:3000'
    And path 'oauth/access-token'
    And header Authorization = 'Basic auth'
    When method get
    Then status 200
    And match response['access-token'] == 'should be oauth token'
    And print response

  @Produto
  Scenario: Consultar produtos
    Given url 'http://localhost:3000'
    And path 'oauth/access-token'
    And header Authorization = 'Basic auth'
    When method get
    And def access_token = response['access-token']
    And path 'products'
    And header Authorization = access_token
    And method get
    Then status 200
    And print response
