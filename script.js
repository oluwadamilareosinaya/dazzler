const email = $('#email');

$('#g-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'insert.php',
        data: $('#g-form').serialize(),
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