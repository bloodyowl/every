module.exports = function(cb, time, immediate){
  var id
  var stopped = false
  var stop = function(){
    stopped = true
    clearTimeout(id)
  }
  var fn = function(){
    cb(stop)
    if(!stopped) {
      setTimeout(fn, time)
    }
  }
  id = setTimeout(fn, immediate ? 0 : time)
}
