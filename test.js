// SORT BY PROPERTIY
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
let sortedObj = objs.sort(compare);

// -----------------------------------------------
let sortedObjs = _.sortBy( objs, 'name' );







// SORT BY MULTIPLE PROPERTIES
function objSort() {
    var args = arguments,
        array = args[0],
        case_sensitive, keys_length, key, desc, a, b, i;
    if (typeof arguments[arguments.length - 1] === 'boolean') {
        case_sensitive = arguments[arguments.length - 1];
        keys_length = arguments.length - 1;
    } else {
        case_sensitive = false;
        keys_length = arguments.length;
    }
    return array.sort(function (obj1, obj2) {
        for (i = 1; i < keys_length; i++) {
            key = args[i];
            if (typeof key !== 'string') {
                desc = key[1];
                key = key[0];
                a = obj1[args[i][0]];
                b = obj2[args[i][0]];
            } else {
                desc = false;
                a = obj1[args[i]];
                b = obj2[args[i]];
            }
            if (case_sensitive === false && typeof a === 'string') {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }
            if (! desc) {
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                if (a > b) return -1;
                if (a < b) return 1;
            }
        }
        return 0;
    });
};
let sortedObjs = objSort(objs, 'city', 'price');


// -----------------------------------------------
var sortedObjs = _.sortBy(_.sortBy(objs,'city'),'price');




// REMOVE BY PROPERTY VALUES
function removeA(arr) {
    let what;
    let a = arguments;
    let L = a.length;
    let ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
var filteredObjs = removeA(removeA(removeA(objs, 'seven'), 'six'), 'nine');

//-----------------------------------------------
let filteredObjs = _.without(objs, 'seven', 'six', 'nine');
