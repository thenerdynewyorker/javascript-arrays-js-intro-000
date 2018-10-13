var chocolateBars;
chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

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

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array=array.pop()
  array
}
