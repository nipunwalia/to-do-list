$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();//removes the parent element of the one clicked

	});
	event.stopPropagation();
}
)

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todotext= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
	}
})

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
})

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

window.onload = function () {
     // Array of Images
      var backgroundImg=["https://images.unsplash.com/photo-1571424768427-7b9aa9db7444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1547561090-e2c1104d363f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1511573946159-906c6ed20eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1565649373303-d478f7bfcc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1589561253831-b8421dd58261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1534022848080-fb638b7c368f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1559399105-77e47884429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1546942113-a6c43b63104a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1569021998346-5762c8a548fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1581439645172-fc650c9621f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1537444399873-da0fea0cf4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1552529220-460eec1fd555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        ]

        setInterval(changeImage, 5000);
       function changeImage() {   
        var i = Math.floor((Math.random() * 20));

        document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

      }
    }