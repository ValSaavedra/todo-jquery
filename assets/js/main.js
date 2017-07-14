var $input = $('#task-input'),
    $btn = $('#add-btn'),
    $ul = $('#myList'),
    $removeTask = $('.delete');

  $btn.on('click', function(e) {
    e.preventDefault();
    if ($input.val() == '') {
      alert('Add a new task');
    } else {
      $ul.prepend('<li><input type="checkbox" class="check"> ' + $input.val() + ' <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons delete">delete</i></a></li>');
      $input.val('');
    }
  });

  function removeItem() {
    $(this).closest('li').remove();
  }

  function markThis() {
    if (this.checked) {
      $(this).closest('li').addClass('done');
    } else {
      $(this).closest('li').removeClass('done');
    }
  }

  $(document).on('click', '.check', markThis);

  $(document).on('click', '.delete', removeItem);