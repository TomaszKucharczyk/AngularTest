'use strict';

angular.module('myApp.view1').
    component('view1', {
        templateUrl: 'view1/view1.html',
        controller: ['$http', '$routeParams', 
            function ViewController($http, $routeParams) {
                
                this.text = ' ';
                
                this.change = function(text)
                {
                    text = text + ' 1';
                    alert('ALARM! ' + text);
                    return text;
                };
                
                this.change2 = function(text)
                {
                    var table = [...text];
                    var tmp = [table.length];
                    
                    for (var i = 0; i < table.length; i++) {
                        
                        tmp[i] = table[i].charCodeAt(0);
                        tmp[i] = tmp[i] + 10;
//                        var tmp = table[i].charCodeAt(0);
//                        tmp + 10;
//                        console.log(tmp);
//                        var string = String.fromCharCode(tmp);
//                        table[i] = string;
                    }
                    var string = String.fromCharCode(tmp);
                    return table;
//                        var tmp = [table.length];
//                        for (var i = 0; i < table.length; i++) {
//
//                            tmp[i]=table[(table.length - 1)-i];
//                        }
//                        return tmp;
                };
            }
        ]
})