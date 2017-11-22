$(document).ready(function(){
	$("#social-media-box").jsSocials({
		shares: [{
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.text = "(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.3\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));";
            $result.append(script);

            $("<div>").addClass("fb-share-button")
                .attr("data-layout", "button_count")
                .appendTo($result);

            return $result;
        }
    },
    {
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.text = "window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src=\"https://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,\"script\",\"twitter-wjs\"));";
            $result.append(script);

            $("<a>").addClass("twitter-share-button")
                .text("Tweet")
                .attr("href", "https://twitter.com/share")
                .appendTo($result);

            return $result;
        }
    	}]
	});
});