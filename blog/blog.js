document.addEventListener('DOMContentLoaded', () => {
  const posts = window.blogPosts || [];
  document.querySelectorAll('.blog-list').forEach(list => {
    const preview = list.dataset.preview !== undefined;
    const count = preview ? (parseInt(list.dataset.count, 10) || 2) : posts.length;
    posts.slice(0, count).forEach(post => {
      const li = document.createElement('li');
      if (preview) {
        li.innerHTML = `
              <a href="blog/post.html?slug=${post.slug}">${post.title}</a>
              <span class="post-date">${post.date}</span>
            `;
      } else {
        li.innerHTML = `
              <a href="blog/post.html?slug=${post.slug}">${post.title}</a>
              <span class="post-date">${post.date}</span>
              <img src="assets/blogs/${post.image}" alt="${post.title}" />
              <small class="image-desc">${post.imageDescription}</small>
              <p>${post.summary}</p>
            `;
      }
      list.appendChild(li);
    });
  });
});
