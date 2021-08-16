$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EmptyShoppingCart.feature");
formatter.feature({
  "line": 1,
  "name": "Checking Cart",
  "description": "",
  "id": "checking-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4409077600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopStepDefinitions.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2770861900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User empty Shopping cart message displays",
  "description": "",
  "id": "checking-cart;user-empty-shopping-cart-message-displays",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@LastOne"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "“Your shopping cart is empty!” message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CartCheckStepDefinition.user_click_on_shopping_cart()"
});
formatter.result({
  "duration": 2548406900,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckStepDefinition.your_shopping_cart_is_empty_message_should_display()"
});
formatter.result({
  "duration": 2550035200,
  "status": "passed"
});
formatter.after({
  "duration": 943666400,
  "status": "passed"
});
});