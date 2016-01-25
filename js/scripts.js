function Place(locale, landmarks, time, notes) {
  this.locale = locale;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

Place.prototype.localeTimeNote = function() {
  return this.time + " - " + this.notes;
}



$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedLocale = $("input#new-locale").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();
    var newPlace = new Place(inputtedLocale, inputtedLandmarks, inputtedTime, inputtedNotes);

    $("ul#place").append("<li><span class='place'>" + newPlace.locale + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locale + ":");
      $(".allAtOnce").text(newPlace.localeTimeNote());
    });

    $("input#new-locale").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");
  });
});
