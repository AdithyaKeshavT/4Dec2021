let funModule = (() => {
  return {
    isCuteMixin(obj) {
      obj.isCute = () => {
      return true;
      }
    },
    singMixin(obj) {
      obj.sing = function() {
      console.log("Singing to an awesome tune");
      }
    }
  }
})()