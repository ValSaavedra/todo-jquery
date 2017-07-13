
 $(document).ready(function(){
  var $addBoton = $('#add-btn');  
    

    $addBoton.on('click', function(e) {
    e.preventDefault();
    if ($input.val() == '') {
      alert('Add new task');
    } else {

          var crearTask = function(taskToAdd) {
          var nuevoDiv = $('<div class="tarea-padre"></div>');
          var nuevoCheckbox = $('<input type="checkbox" id="idtask- class="checkbox">');
          var nuevoLabel = $('<label for="idtask- "></label>');
          var removeButton = $('<a class="waves-effect waves-light btn right remove">Remove</a>');

          nuevoDiv.append(nuevoCheckbox)
          .append(nuevoLabel.html(taskToAdd))
          .append(removeButton);

          return nuevoDiv;
        } 

        var listItemToAdd = crearTask(tareaInput);
        $("#task").append(listItemToAdd);
      }
    }
    remove();
    check();
  });
  function remove(){
    $('.remove').click(function(){
      $(this).parent().remove();
    })
  }
    
  function check(){
    $("#task").on( "click", "input.checkbox", function(){ 
      var taskList = $(this).parent();
      $("#done").append(listItem);
    })
  }
  remove();
  check();





