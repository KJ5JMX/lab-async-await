// Write your code here!
document.addEventListener('DOMContentLoaded', () => {
    
const postList = document.getElementById('post-list');

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayPosts(data);
        })
        .catch(error => console.error('Error fetching posts:', error));
}


function displayPosts(posts) {
    posts.forEach(post => {
    
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        const postTitle = document.createElement('h1');
        postTitle.textContent = post.title;
        const postBody = document.createElement('p');
        postBody.textContent = post.body;
        postItem.appendChild(postTitle);
        postItem.appendChild(postBody);
        postList.appendChild(postItem);
    
       
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
      
    });
}   
fetchPosts();

});