class Github {
 constructor() {
   this.client_id = '982a775ed7b19e3a800b';
   this.client_secret = 'd43741fb5d7aecdff799180dbbfd9c00067f2016 ';
   this.repos_count = 5;
   this.repos_sort = 'created: asc';
 }

 async getUser(user) {
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}$client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();
   const repos = await repoResponse.json();
   console.log('repos', repos);
   return {
     profile,
     repos
   }
 }
}