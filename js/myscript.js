/*
function pintarRespuesta(){
    //Funcion pintar
    let myTable="<table>";
    for(i = 0; i<cs.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+cs[i].id+"</td>";
        myTable+="<td>"+cs[i].name+"</td>";
        myTable+="<td>"+cs[i].email+"</td>";
        myTable+="<td>"+cs[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#listaClientes").append(myTable);
}
*/

// CLIENTES
function leerClientes(){
    //Function get
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'JSON',
        
        success : function(clientes) {
            let cs=clientes.items;
            console.log(clientes);
            $("#listaClientes").empty();  
                    
            for(i = 0; i<cs.length;i++){
                $("#listaClientes").append(" <br><b> ID: "+cs[i].id+" Nombre: <b>"+cs[i].name+" email: </b>"+cs[i].email+" Edad: </b>"+cs[i].age+" </b>");
                $("#listaClientes").append(" <button onClick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");                
            }

            },
        error : function(_xhr, _status) {
            alert('ha sucedido un problema GET clientes');
        }
        
} );
}
/*
function pintarClientes(items){
    //Funcion pintar
    let myTable="<table>";
    for(i = 0; i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        
       // myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    
    myTable+="</table>";
    $("#listaClientes").append(myTable);
}*/

function guardarCliente(){
    let idCliente =$("#idCliente").val();
    let nombre =$("#nombreCliente").val();  
    let mailCliente =$("#mailCliente").val();
    let edad =$("#edadCliente").val();  

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function(pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");  
            $("#mailCliente").val("");
            $("#edadCliente").val("");  
        },
        error : function(_xhr, _status) {
            alert('ha sucedido un problema POST clientes');
        },
        complete: function(){
            leerClientes();
        }
    } );
}

function editarCliente(){
    let idCliente =$("#idCliente").val();
    let nombre =$("#nombreCliente").val();  
    let mailCliente =$("#mailCliente").val();
    let edad =$("#edadCliente").val();  

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function(pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");  
            $("#mailCliente").val("");
            $("#edadCliente").val("");  
        },
        error : function(_xhr, _status) {
            alert('ha sucedido un problema PUT clientes');
        },
        complete: function(){
            leerClientes();
        }
    } );
}

function borrarCliente(idCliente){
    let data={
        id:idCliente
    };
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',

        type : 'DELETE',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function(pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");  
            $("#mailCliente").val("");
            $("#edadCliente").val("");  
        },
        error : function(_xhr, _status) {
            alert('ha sucedido un problema DELETE clientes');
        },
        complete: function(){
            leerClientes();
        }
    } );
}
/*
 * ******************************
 * ******************************
 * ******************************
 */
//MENSAJES
function leerMensajes(){
    //Function get
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'GET',
        dataType : 'JSON',

        success : function(mensajes) {
            let cm=mensajes.items;
            $("#listaMensajes").empty();
            for(i=0;i<cm.length;i++){
                $("#listaMensajes").append(" <b> ID: "+cm[i].id+" Mensaje: <b>"+cm[i].messagetext+" </b>");
                $("#listaMensajes").append(" <button onClick='borrarMensaje("+cm[i].id+")'>Borrar</button><br>");
            }
        },
        error : function(_xhr, _status) {
            alert('ha sucedido un problema GET mensajes');
        }
    } );
}

function guardarMensaje(){
    let idMensaje =$("#idMensaje").val();
    let mensaje =$("#message").val();  

    let data={
        id:idMensaje,
        messagetext:mensaje
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);
    
    $.ajax({
        
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'POST',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function(pepito) { 
            $("#idMensaje").val("");
            $("#message").val(""); 
        },
        error : function(_xhr, _status) {
            //alert('ha sucedido un problema POST mensajes');
        },
        complete: function(){
            leerMensajes();
        }
    } )
}

function editarMensaje(){
    let idMensaje =$("#idMensaje").val();
    let mensaje =$("#message").val();  

    let data={
        id:idMensaje,
        messagetext:mensaje
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function(pepito) {
            $("#idMensaje").val("");
            $("#message").val(""); 
        },
        error : function(_xhr, _status) {
        //    alert('ha sucedido un problema PUT mensajes');
        },
        complete: function(){
            leerMensajes();
        }
    } );
}

function borrarMensaje(idMensaje){
    let data={
        id:idMensaje
    };
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);
    $.ajax({
        url : 'https://g882814edbb8b90-dbg24.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
        
        type : 'DELETE',
        dataType : 'JSON',
        data:dataToSend,
        contentType:'application/json',
        
        success : function() {
            $("#idMensaje").val("");
            $("#message").val(""); 
        },
        error : function(_xhr, _status) {
        //    alert('ha sucedido un problema DELETE mensajes');
        },
        complete: function(){
            leerMensajes();
        }
    } );
}
/*
 * ******************************
 * ******************************
 * ******************************
 */
//CARROS
