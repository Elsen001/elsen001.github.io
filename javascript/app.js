fetch("https://api.github.com/users")
    .then(data => {
        return data.json()
    }).then(users => {


        var html = "";
        users.forEach(user => {
            html +=
                `
                <div class="col-md-3">
                <div style="background-color:black;" class="card mt-3 cardhover">
                <img class="card-img-top" src=${user.avatar_url} alt="Card image">
                <div class="card-body">
                  <h4 class="card-title cardname">${user.login}</h4>
                  <a href=${user.html_url} class="btn btn-primary">See Profile</a>
                </div>
              </div>
                </div>
      

        `
        });
        document.querySelector(".row").innerHTML = html


    })