const email = $('#email');

$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/php/insert.php',
        data: $('#form').serialize(),
        success: function() {
            alert("Thank You!, We will be in touch.")
        },
        error: function() {
            alert('Oops! an error occured')
        },
        complete:function(){
            $('#form').each(function(){
                this.reset(); 
            });
       }
    })
})