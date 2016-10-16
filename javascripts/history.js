$(function() {
  $("nav").on("click", "a", function(e) {
    e.preventDefault();
    var $e = $(e.target),
        id = $e.attr("href");

    switchPage(id);

    history.pushState({ id: id }, $e.text(), location.pathname + id); // push current state onto history object
  });

  $(window).on("popstate", function(e) {
    var state = e.originalEvent.state; // access state object passed into pushState method

    switchPage(state === null ? "#page_1" : state.id); // check if state exists, if not, pass in id for first page
  });

  if (location.hash) { // if location's hash exists on page load, pass it into switchPage function
    switchPage(location.hash);
  }

  function switchPage(id) {
    $(".active").removeClass("active"); // remove active class
    $("nav a[href='" + id + "']").addClass("active"); // and add it to current element

    $("article").hide().filter(id).show(); // show article corresponding to link
  }
});
