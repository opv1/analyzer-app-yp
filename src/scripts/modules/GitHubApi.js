export default class GitHubApi {
  constructor(options) {
    this.user = options.user
    this.repository = options.repository
    this.apiUrl = `https://api.github.com/repos/${this.user}/${this.repository}/commits?`
  }

  getCommits() {
    return fetch(this.apiUrl)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))
      )
      .then((commitsArray) => commitsArray)
      .catch(() => {
        throw new Error('Ошибка на этапе запроса коммитов!')
      })
  }
}
