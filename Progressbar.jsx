var window = new Window("palette", "progressBar", undefined);
window.orientation = "column";

var editTextOne = window.add("edittext", undefined, "");
editTextOne.size = [60, 25];

var editTextTwo = window.add("edittext", undefined, "");
editTextTwo.size = [60, 25];

var editTextThree = window.add("edittext", undefined, "");
editTextThree.size = [60, 25];

var progress = window.add("progressbar", undefined, "");

window.center();
window.show();

editTextOne.onActivate = function() {
    progress.value = 33;
    }

editTextTwo.onActivate = function() {
    progress.value = 66;
    }

editTextThree.onActivate = function() {
    progress.value = 100;
    }