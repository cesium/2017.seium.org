$(document).ready(function(){

    var your_url_geral = 'https://www.codechef.com/api/rankings/SEID2017?sortBy=rank';
    var your_url_main = 'https://www.codechef.com/api/rankings/SEID2017?order=desc&sortBy=SEIMAIN';
    var your_url_d1 = 'https://www.codechef.com/api/rankings/SEID2017?order=desc&sortBy=SEIDIA01';
    var your_url_d2 = 'https://www.codechef.com/api/rankings/SEID2017?order=desc&sortBy=SEIDIA02';
    var your_url_d3 = 'https://www.codechef.com/api/rankings/SEID2017?order=desc&sortBy=SEIDIA03';
    var your_url_d4 = 'https://www.codechef.com/api/rankings/SEID2017?order=desc&sortBy=SEIDIA04';
    var your_url_memoria = 'https://www.codechef.com/api/rankings/SEID2017?sort_by=Mem&sorting_order';
    var your_url_tempo = 'https://www.codechef.com/api/rankings/SEID2017?sort_by=Time&sorting_order=desc';

    jQuery.ajax = (function(_ajax){

    var protocol = location.protocol,
        hostname = location.hostname,
        exRegex = RegExp(protocol + '//' + hostname),
        YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
        query = 'select * from html where url="{URL}"';

    function isExternal(url) {
        return !exRegex.test(url) && /:\/\//.test(url);
    }

    return function(o) {

        var url = o.url;

        if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {

            // Manipulate options so that JSONP-x request is made to YQL

            o.url = YQL;
            o.dataType = 'json';

            o.data = {
                q: query.replace(
                    '{URL}',
                    url + (o.data ?
                        (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
                    : '')
                ),
            };

            // Since it's a JSONP request
            // complete === success
            if (!o.success && o.complete) {
                o.success = o.complete;
                delete o.complete;
            }

            o.success = (function(_success){
                return function(data) {

                    if (_success) {
                        // Fake XHR callback.
                        _success.call(this, {
                            responseText: data.results[0]
                                // YQL screws with <script>s
                                // Get rid of them
                                .replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
                        }, 'success');
                    }

                };
            })(o.success);

        }

        return _ajax.apply(this, arguments);

    };

    })(jQuery.ajax);

    var myList = "";
    $.ajax({
    url: your_url_memoria,
    type: 'GET',
    format: "text",
    success: function(res) {
        var text = res.responseText;
       //var reg = ["<body>","</body>"]
       text = text.replace("<body>",'').replace("</body>",'');
    //       text = text.substr(text.indexOf('"list":'));//.substr(0, text.lastIndexOf('['));  
        
        
        
     //   text = text.split('"list":[').pop();
      //  text = text.substring(0, text.lastIndexOf("}}}") + 1);
        
        
        //        text = text.substring(0, text.indexOf(']'));
        //alert(text);

    //
    //
    //                     manipular aqui o texto   
    //
    //
        //
       
        myList = JSON.parse(text);
        console.log((myList));
        var nova = myList.list
        var key = 'total_time';
        var leva = $.grep(nova, function(e) { return e.user_handle!='resende' });
        for(var i = 0 ; i < leva.length ; i++ ){
            delete leva[i].total_time;
            delete leva[i].country;
            delete leva[i].institution;
            delete leva[i].institution_type;
            delete leva[i].country_code;
            delete leva[i].problems_status;
        }
        buildHtmlTable(leva);
        //alert(myList.length);


    //       $("a").text(text);
    }
    });

    function buildHtmlTable(myList) {
     var rank = 1;
     var columns = addAllColumnHeaders(myList);
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             if(colIndex == 0 ){
                 cellValue = rank
                 rank++;
             }
             else var cellValue = myList[i][columns[colIndex]];

             if (cellValue == null) { cellValue = ""; }

             row$.append($('<td/>').html(cellValue));
         }
         $("#excelDataTable").append(row$);
     }
    }

    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records
    function addAllColumnHeaders(myList)
    {
     var columnSet = [];
     var headerTr$ = $('<tr/>');

     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#excelDataTable").append(headerTr$);

     return columnSet;
    }
    });