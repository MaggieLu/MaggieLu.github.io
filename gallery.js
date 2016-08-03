$(document).ready(function(){
    
    // change photo container background color when button clicked
    var colors = ["rgba(241, 247, 237, 0.5)", "rgba(255, 242, 160, 0.5)", "rgba(199, 239, 207, 0.5)", "rgba(46, 82, 102, 0.5)", "rgba(221, 177, 190, 0.5)",  "rgba(196, 215, 242, 0.5)",  "rgba(112, 183, 186, 0.5)", "rgba(152, 216, 147, 0.5)", "rgba(238, 245, 219, 0.5)", "rgba(248, 150, 151, 0.5)", "rgba(155, 108, 60, 0.5)"];
    
    $(".but_pn").click(function(){
       //  $("#p2").fadeIn(3000); not work T.T
        
        var color = colors.shift();
        colors.push(color);
        
        $("div .container").css({
            "background-color": color,
            "transition": "0.8s"
        });
    });
    
    
    // next pic
    $("#nxt_bt").click(function(){
        
        // get src of each img
        var p1 = $("#p1 img").attr("src");
        var p2 = $("#p2 img").attr("src");
        var p3 = $("#p3 img").attr("src");
        
        var p_list = [p1, p2, p3];
        
        // init new index for each img
        var new_index_list = [0, 0, 0];
        
        $.get("gallery-list.txt", function(data){
            // get names of photos as an object 
            var lines = data.split("\n");
            // $("#test").append("<p>" + $(".photo img").attr("src")+"</p>");
            
            // get new index for each img
            
            for (j = 0; j < new_index_list.length; j++) {
                $.each(lines, function(i, title){
                    
                    var pic_title = "gallery-ps/" + title;
                    
                    if ((p_list[j] == pic_title) && (i == 12)) {
                        new_index_list[j] = 0;
                    };
                    
                    if ((p_list[j] == pic_title) && (i != 12)) {
                        new_index_list[j] = i + 1;
                    }
                });
            };
            
            /*
            for (j = 0; j < new_index_list.length; j++) {
                $.each(lines, function(i, title) {
                    
                    var pic_title = "gallery-ps/" + title;

                    if ((new_index_list[j] < lines.length) && (p_list[j] == pic_title)) {
                            new_index_list[j] = i + 1;
                    };
                });
                if (new_index_list[j] >= lines.length) {
                    new_index_list[j] = 0;
                };
            };
            */
            // assign new index for each img
            $("#p1 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[0]]
            });
            
            $("#p2 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[1]]
            });
            
            $("#p3 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[2]]
            });

        });
    });
    
    // previous pic
    $("#pre_bt").click(function(){
        
        // get src of each img
        var p1 = $("#p1 img").attr("src");
        var p2 = $("#p2 img").attr("src");
        var p3 = $("#p3 img").attr("src");
        
        var p_list = [p1, p2, p3];
        
        $.get("gallery-list.txt", function(data){
            // get names of photos as an object 
            var lines = data.split("\n");
            // $("#test").append("<p>" + $(".photo img").attr("src")+"</p>");
            
            // $("p").append(lines.length);
            var new_index_list = [0, 0, 0];
            
            // get new index for each img
            for (j = 0; j < new_index_list.length; j++) {
                $.each(lines, function(i, title) {
                    
                    var pic_title = "gallery-ps/" + title;
                    
                    if ((p_list[j] == pic_title) && (i == 0)) {
                        new_index_list[j] = lines.length - 1;
                    };
                    
                    if ((p_list[j] == pic_title) && (i != 0)) {
                        new_index_list[j] = i - 1;
                    };
                });
            };
            
            // assign new index for each img
            $("#p1 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[0]]
            });
            
            $("#p2 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[1]]
            });
            
            $("#p3 img").attr({
                "src": "gallery-ps/" + lines[new_index_list[2]]
            });

        });
    });   

});
