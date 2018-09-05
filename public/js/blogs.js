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

    console.log(newBlog);

    $.ajax("/api/Blog", {
      type: "POST",
      data: newBlog
    }).then(function() {
      location.reload();
    });
  });
});
