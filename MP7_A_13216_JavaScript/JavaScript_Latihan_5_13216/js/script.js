function fn_ValForm() {
        var sMsg = "";

        if (document.getElementById("nama").value == "") {
            sMsg += "\n* Anda belum mengisikan nama";

        if (document.getElementById("email").value == "") {
            sMsg += "\n* Anda belum mengisikan email";

        if (document.getElementById("umur").value == "") {
            sMsg += "\n* Anda belum mengisikan umur";

        }  else{
            var umur= parseInt(document.getElementById(umur).value);
            if (umur >= 10 && <=18){
            if(umur <= 14){
                alert("kategori junior");
            }else{
                alert( "kategori senior");   
            }

            }
        }   

        }
        }

        if(document.getElementById(kategori).value==""){
        sMsg += "\n* anda belum memilih";
        }else{
            var pilihan = document.getElementById("kategori").value;
            switch pilihan;
            
        }
            

        if (sMsg != "") {
                    alert("Peringatan:\n" + sMsg);
                    return false;
                } else {
                    return true;

                }
            }