var obj = {
  msg: 'Guten Tag!',
  rawHtml: '<div style="color:red">Auf widersehen</div>',
  myId: "id_3",
  bool: true,
  number: 100,
  ok: undefined,
  message: "Gruess Gott",
  id: 355,
}

var vm = new Vue({
  el: '#app',
  data: obj,
})