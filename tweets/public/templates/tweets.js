(function(){dust.register("tweets",body_0);function body_0(chk,ctx){return chk.write("<div class=\"section group\"><h2 class=\"title\">Tweets for ").reference(ctx.get("tweeter"),ctx,"h").write("</h2></div>").exists(ctx.get("tweeter_desc"),ctx,{"block":body_1},null).section(ctx.get("tweets"),ctx,{"block":body_2},null);}function body_1(chk,ctx){return chk.write("<div class=\"description\">").reference(ctx.get("tweeter_desc"),ctx,"h").write("</div>");}function body_2(chk,ctx){return chk.write("<div class=\"col span_1_of_2\"><div class=\"tweet\" data-url=\"http://twitter.com/").reference(ctx.getPath(false,["user","screen_name"]),ctx,"h").write("/status/").reference(ctx.get("id_str"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h",["s"]).write("<div class=\"date\">Tweeted ").helper("formatDate",ctx,{},{"value":body_3}).write("</div></div></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("created_at"),ctx,"h");}return body_0;})();

// fyi
// <div class="section group"><h2 class="title">Tweets for {tweeter}</h2></div>
// {?tweeter_desc}
// <div class="description">{tweeter_desc}</div>
// {/tweeter_desc}

// {#tweets}
// <div class="col span_1_of_2">
// <div class="tweet" data-url="http://twitter.com/{user.screen_name}/status/{id_str}">
// {text|s}
// <div class="date">Tweeted {@formatDate value="{created_at}"/}</div>
// </div>
// </div>
// {/tweets}