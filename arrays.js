var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element);{
  array=[element,...array];
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element);{
  var purple;
  purple = [element,...array];
  return purple;
}

function addElementToEndOfArray(element, array){
  array=[...array, element];
  return array
}

function destructivelyAddElementToEndOfArray (element, array) {
  var blue;
  blue = [element,...array];
  return blue;
}
