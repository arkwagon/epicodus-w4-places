describe('Place', function() {
  it("creates a new locale with the given properties", function() {
    var testPlace = new Place("Portland","Downtown","2016","What a great place to visit.");
    expect(testPlace.locale).to.equal("Portland");
    expect(testPlace.landmarks).to.equal("Downtown");
    expect(testPlace.time).to.equal("2016");
    expect(testPlace.notes).to.equal("What a great place to visit.")
  });
  it("adds the localeTimeNote method to all places", function() {
    var testPlace = new Place("Portland", "Downtown", "2016", "What a great place to visit.");
    expect(testPlace.localeTimeNote()).to.equal("Portland: 2016 What a great place to visit.");
  });
});
