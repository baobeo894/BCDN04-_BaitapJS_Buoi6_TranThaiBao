// bai 1
function inSoChanLe() {


    var num = 100;
    // var count = 0;
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < num; i++) {
        if (i % 2 == 0) {
            //số chẵn
            soChan += i + " ,";
        } else {
            //số lẻ
            soLe += i + " ,";
        }
    }
    console.log(soChan);
    console.log(soLe);
    document.getElementById("sochanle").innerHTML = "Số chẵn \n" + soChan + 
        "\nSố lẻ \n" + soLe;
   
}
document.getElementById("timsochanle").onclick = inSoChanLe;

// bai 2
function chiahetcho3() {


    var number = 1000;
    
    var count =0;
    for (var i = 0; i < number; i++) {
        if (i % 3 == 0) {
            
            count++;
        } 
    }
    console.log(count);
    
    document.getElementById("chia3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: "+ "\n" + Number(count);
   
}
document.getElementById("timsochia3").onclick = chiahetcho3;
