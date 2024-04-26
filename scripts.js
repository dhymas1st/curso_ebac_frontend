$(document).ready(function() {
    $('#taskForm').submit(function(e) {
      e.preventDefault();
      let taskName = $('#taskInput').val();
      if (taskName.trim() === '') {
        alert('Por favor, insira o nome da tarefa.');
        return;
      }
      $('#taskList').append('<li>' + taskName + '</li>');
      $('#taskInput').val('');
    });
  
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  