$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/php/insert.php',
        data: $('#form').serialize(),
        success: function() {
            swal("Thank You!", "We will be in touch!", "success");
        },
        error: function() {
            swal("Sorry", "Let's try that again", "error");
        },
        complete:function(){
            $('#form').each(function(){
                this.reset(); 
            });
       }
    })
})
