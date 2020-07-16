const email = $('#email');

$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'insert.php',
        data: $('#form').serialize(),
        success: function() {
            alert('Thank You!, Message received')
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