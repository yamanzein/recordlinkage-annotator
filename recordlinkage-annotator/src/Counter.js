const countElement = (array) => {
  var labledItem = 0;
  var match = 0;
  var distinct = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].label_str) {
      if (array[i].label_str === "Match") {
        match += 1;
      } else if (array[i].label_str === "Distinct") {
        distinct += 1;
      }
      labledItem += 1;
    }
  }
  return { labledItem, match, distinct };
};

export default countElement;
