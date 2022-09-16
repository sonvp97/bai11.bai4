for (i=0;i<=5;i++){
    for (j=0;j<i;j++){
        document.write('*');
    }
    document.write('<br>');
}document.write('<br>');
document.write('<br>');
for (i=5;i>=1;i--){
    for (j=0;j<i;j++){
        document.write('*');
    }
    document.write('<br>');
}
for (c=0;c<5;c++){
    switch (c){
        case 0:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*'+'<br>');
            break;
        case 1:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**'+'<br>');
            break;
        case 2:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;***'+'<br>');
            break;
        case 3:
            document.write('&nbsp;&nbsp;****'+'<br>');
            break;
        case 4:
            document.write('*****'+'<br>');
            break;
    }
}
document.write('<br><br>')
for (d=0;d<5;d++){
    switch (d){
        case 4:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*'+'<br>');
            break;
        case 3:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**'+'<br>');
            break;
        case 2:
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;***'+'<br>');
            break;
        case 1:
            document.write('&nbsp;&nbsp;****'+'<br>');
            break;
        case 0:
            document.write('*****'+'<br>');
            break;
    }
}
