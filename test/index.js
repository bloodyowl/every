var tape = require("tape")
var every = require("../")

tape("every", function(test){
  test.plan(4)
  var index = 3
  every(
    function(stop){
      if(--index < 0) {
        stop()
      }
      test.pass()
    },
    10
  )
})

tape("every (immediate option)", function(test){
  test.plan(2)
  var index = 1
  every(
    function(stop){
      stop()
      if(--index > -1) {
        test.pass()
      } else {
        test.fail()
      }
    },
    10000,
    true
  )
  setTimeout(function(){
    test.equal(index, 0)
  }, 50)
})
