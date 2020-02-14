const dataURL = "https://api.myjson.com/bins/jcmhn";//адрес API

function handlerForm(){
//объект для хранения пары ключ-значение
  var obj={};
  //обработки события submit
  $("form").submit(function( event ) {
  //получили массив данных с формы
  var array_data = $(this).serializeArray();
  //перебираем массив данных с формы и заполняем объект
  $.each(array_data,function(key,value){
      obj[value.name]=value.value;
  });
  //получаем json c API
  $.getJSON(dataURL,function(data){
        //получаем из массива строку
        var text=data['text'].join(' ');
        //находим ключ объекта и меняем в строке на его значение
        $.each(obj,function(key,value){
            text = text.replace(new RegExp("{" + key + "}", 'g'), value);
        });
      //выводим результат
      $("div#result").html(text);
    });
 //предовращаем переход с формы
  event.preventDefault();
});
}
$(document).ready(handlerForm);