var buttons = ["Pig", "Cat", "Dog", "Lion"];


        function displayButtonInfo() {

          var animal = $(this).attr("data-name");
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=8YqXecFsBnmKqyP4qHlRR7U23l9KWDTk&limit=5"
          console.log(queryURL)

          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function (responce) {

            var buttonDiv = $("<div>").addClass("buttons");

            for (i = 0; i < 5; i++) {
              var imgURL = responce.data[i].images.fixed_height_still.url;





              var image = $("<img>").attr("src", imgURL);

              buttonDiv.append(image);
            }


            $("#buttons-view").append(buttonDiv);
          });

        }

        function renderButtons() {
          $("#buttons-view").empty();

          for (var i = 0; i < buttons.length; i++) {
            var a = $("<button>");
            a.addClass("new-btn");
            a.attr("data-name", buttons[i]);
            a.text(buttons[i]);
            $("#buttons-view").append(a);
          }
        }

        $("#add-button").on("click", function (event) {
          event.preventDefault();
          var newButton = $("#user-input").val().trim();
          buttons.push(newButton);
          renderButtons();
        });

        $(document).on("click", ".new-btn", displayButtonInfo);

        renderButtons();
