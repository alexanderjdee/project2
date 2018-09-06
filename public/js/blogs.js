$(function() {
  $("#submit-blog").on("click", function(event) {
    event.preventDefault();

    var newBlog = {
      title: $("#title").val().trim(),
      body: $("#body").val().trim(),
      img: $("#img").val().trim(),
      location: $("#location").val().trim(),
      authorId: $("#authorID").val().trim()
    };

    $.ajax("/api/Blog", {
      type: "POST",
      data: newBlog
    }).then(function() {
      location.reload();
    });
  });

  $("#search-by-location").on("click", function(event) {
    event.preventDefault();

    var location = $("#thingsToDo").val().trim();

    $.ajax("/api/Blog/location/" + location, {
      type: "GET"
    }).then(function(result) {
      console.log(result);
    });

    //Todo: Dynamically make html for showing all blogs for a location
    // {{#each blogs}}
    //   {{> blogs/blog-block}}
    // {{/each}}
  });
});
