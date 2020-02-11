// if(typeof String.prototype.toProperCase === undefined){

//     String.prototype.toProperCase = function (query) {

//         var _query = query.toLowerCase().split(' ')

//         for (var i = 0; i < _query.length; i++) {
//             _query[i] = _query[i].charAt(0).toUpperCase() + _query[i].substring(1)    
//         }
//         return _query.join('+')
//     }
// }

function toProperCase(query) {
    var _query = query.toLowerCase().split(' ');
    for (var i = 0; i < _query.length; i++) {
        _query[i] = _query[i].charAt(0).toUpperCase() + _query[i].substring(1);     
    }
    if (_query.includes(' '))
        return _query.join('+'); 

    else return _query[0]
}