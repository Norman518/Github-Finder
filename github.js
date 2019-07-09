class Github {
  constructor() {
    this.client_id = "8f84f86491c1cbc3c99d";
    this.client_secret = "8411857d6088dee30b8133284a1bf8b7da2b1ef6";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
