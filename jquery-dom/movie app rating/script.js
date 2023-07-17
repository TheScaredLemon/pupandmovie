$(document).ready(function() {
    $('#movie-form').submit(function(event) {
      event.preventDefault();
      
      var titleInput = $('#title');
      var ratingInput = $('#rating');
      
      var title = titleInput.val();
      var rating = ratingInput.val();
      
      if (title === '' || rating === '') {
        alert('Please enter a title and rating for the movie.');
        return;
      }
      
      var movieItem = $('<div class="movie-item"></div>');
      var movieTitle = $('<span class="movie-title"></span>').text(title);
      var movieRating = $('<span class="movie-rating"></span>').text(rating);
      var removeButton = $('<button class="remove-button">Remove</button>');
      
      movieItem.append(movieTitle, ' - ', movieRating, removeButton);
      $('#movies-list').append(movieItem);
      
      titleInput.val('');
      ratingInput.val('');
    });
    
    $('#movies-list').on('click', '.remove-button', function() {
      $(this).parent().remove();
    });
  });
  