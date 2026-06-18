const container = document.querySelector('#posts');

const loadPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Ошибка загрузки постов');
    }

    const data = await response.json();

    data.forEach(post => {
      const card = document.createElement('div');

      card.classList.add('post-card');

      card.innerHTML = `
        <img src="https://picsum.photos/200" alt="img">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log(error);
  }
};

loadPosts();