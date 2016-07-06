'use strict';

angular.module('myApp.view1').
    component('view1', {
        templateUrl: 'view1/view1.html',
        controller: ['$http', '$routeParams', 
            function ViewController($http, $routeParams) {
                
                this.text = '';
                
                this.change = function(text)
                {
                    text = text + ' 1';
                    alert('ALARM! ' + text);
                    return text;
                };
                
                this.change2 = function(text)
                {
                    var table = [...text];
                    
                    for (var i = 0; i < table.length; i++) {
                        
                        var tmp = table[i].charCodeAt(0);
                        tmp + 10;
                        console.log(tmp);
                        var string = String.fromCharCode(tmp);
                        table[i] = string;
                    }
                    return table;
                };
            }
        ]
})