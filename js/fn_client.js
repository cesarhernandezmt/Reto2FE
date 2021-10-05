function traerInformacion(){

    $.ajax({
        url:"https://ge890b4f6420f57-c3retosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta.items)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}

function mostrarRespuesta(items){

    let myTable = "<table>";

    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>"
    }

    myTable+="</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion(){

    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"https://ge890b4f6420f57-c3retosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha añadido el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}

function editarInformacion(){

    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"https://ge890b4f6420f57-c3retosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha actualizado el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}

function borrarElemento(idElemento){

    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge890b4f6420f57-c3retosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado el registro")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });

}
