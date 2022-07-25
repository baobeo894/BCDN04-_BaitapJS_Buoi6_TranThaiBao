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


// bai 3

function timsonguyenduong() {


    var S = 0;
    var t = 0;
    
   while(S < 10000){
    t++;
    S=S+t;  
   }
    
    console.log(t);
    
    document.getElementById("songuyenduong").innerHTML = "Số nguyên dương nhỏ nhất:  "+ "\n" + Number(t);
   
}
document.getElementById("tinh").onclick = timsonguyenduong;


// bai 4

function timtongluythua() {

    var x = document.getElementById("nhapsox").value;
    var n = document.getElementById("nhapson").value;
    
    var tong =0;
    var bd = 1;
    for(i = 1;i <= n;i++){
        bd =bd*x;
        tong += bd 
    }
 
    
    document.getElementById("tong").innerHTML = "Tổng:  "+ "\n" + Number(tong);
   
}
document.getElementById("tinhtong").onclick = timtongluythua;



// bai 5
function tinhgiaithua() {

    
    var giaithua = document.getElementById("nhapsoN").value;
    var kq = 1;
    for (var i = 1; i <= giaithua; i++) {
      kq *= i;
    }
    console.log(kq);

    
    document.getElementById("giaithua").innerHTML = "Tổng:  "+ "\n" + Number(kq);
}
document.getElementById("tinhgiaithua").onclick = tinhgiaithua;



//  bai 7
function timsonguyento(so)
{
    var so = document.getElementById("").value;
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (so < 2){
        flag = false;
    }
    else if (so == 2){
        flag = true;
    }
    else if (so % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(so); i+=2)
        {
            if (so % i == 0){
                flag = false;
                break;
            }
        }
    }

    // Kiểm tra biến flag
    if (flag == true){
        document.getElementById("songuyento").innerHTML = Number(so);
    }
    else{
        document.getElementById("songuyento").innerHTML = "";
    }
}
document.getElementById("insonguyento").onclick = timsonguyento;