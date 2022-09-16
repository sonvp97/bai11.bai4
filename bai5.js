let month=parseInt(prompt('Nhập số tháng vay'));
let monny=parseInt(prompt('Nhập số tiền vay'));

    switch (month){
        case 6:
            document.write("Tổng lãi của bạn là: "+monny*7/100);
            break;
        case 12:
            document.write("Tổng lãi của bạn là: "+monny*8/100);
            break;
        case 24:
            document.write("Tổng lãi của bạn là: "+monny*9/100);
            break;
        default:
            document.write("Số tháng không hợp lệ: ");
    }
