class UI{
    constructor(){
        this.profileContainer = document.querySelector('#loguser');
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div class="col-12 col-md-3">
                 <a href=${profile.html_url}><img src=${profile.avatar_url} class="img-thumbnail"></a>
            </div>
            <div class="col-md-9"> 
            <i class="fas fa-map-marker-alt">${profile.location}</i>
              <h3>Name:${profile.name}</h3>
             
              <h3>Username:${profile.login}</h3>
              followers: <div class="badge badge-primary">${profile.followers}</div>
              following: <div class="badge badge-secondary">${profile.following}</div>
              
            </div>
        </div>
    </div>
        
        `;
    }



}