class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret =''
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }

}