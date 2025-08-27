document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const posts = window.blogPosts || [];
  const post = posts.find(p => p.slug === slug);
  if (!post) return;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = post.date;
  const img = document.getElementById('post-image');
  img.src = `../assets/blogs/${post.image}`;
  img.alt = post.title;
  document.getElementById('image-desc').textContent = post.imageDescription;
  const contentDiv = document.getElementById('post-content');
  post.content.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    contentDiv.appendChild(p);
  });
});
