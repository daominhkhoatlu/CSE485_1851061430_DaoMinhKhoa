//câu hỏi 1:Những đối tượng nào bị tác động
var fruit       =document.getElementById('txtFruit');
var showfruit   =document.getElementById('btnShowfruit');
var imgfruit    =document.getElementById('imgFruit');
//câu hỏi 2:sự kiện cần xử lí là gì
showfruit.addEventListener('click', showResult);
//câu hỏi 3 :sự kiện đó làm gì?
function showResult(){
    if(fruit.value == ''){
        alert("Bạn chưa nhập giá trị");
    }
    else{
        var getfruit=fruit.value;
        imgFruit.setAttribute('src','images/'+getfruit+'.jpg');
    }
    
}


