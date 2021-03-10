export default class NewsCard {
  createCard({ source, title, description, url, urlToImage, publishedAt }) {
    this.template = `
      <a class="result__news" href="${url}" target="_blank" rel="noopener noreferrer">
        <div class="result__image">
          <img src="${urlToImage}" alt="image">
        </div>
        <div class="result__info">
          <span class="result__date">${publishedAt}</span>
          <h3 class="result__title">${title}</h3>
          <div class="result__description">${description}</div>
          <span class="result__source">${source.name}</span>
        </div>
      </a>`
    return this.template
  }
}
