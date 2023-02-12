const contentHtml = document.getElementById('content');
let listPosts = [];
let listComments = [];
let numberPosts = 10;
let lastIndexComment = 0;
const step = 10;

function printPost({userId, id, title, body}){
  const post = document.createElement('div');
  post.className = 'post-item';
  post.dataset.id = id;
  post.innerHTML = `
      <h4> ${title}</h4>
      <p>${body}</p>
  `; 
  contentHtml.append(post);
}

function printComment(datalist, lastIndex, id){
  const commentUl = document.createElement('ul');
  commentUl.className = 'comments';
  commentUl.dataset.id = id;
  let index = lastIndex;
  while(datalist[index].postId === id && index < datalist.length){
    const commentIl = document.createElement('il');
    commentIl.className = 'comments-item';
    commentIl.innerHTML =`
    <h4> ${datalist[index].name}</h4>
    <p>${datalist[index].body}</p>
    `;
    commentUl.append(commentIl);
    index++; 
  }
  contentHtml.append(commentUl);
  return index;
}

function setContent(){
  const btn = document.getElementById('btnMore');
  if(btn){
    btn.removeEventListener('click', setContent);
    contentHtml.removeChild(btn);
  }
  
  for(let i = numberPosts - step; i < numberPosts; i++){
    printPost(listPosts.data[i]);
    let newIndex = printComment(listComments.data, lastIndexComment, listPosts.data[i].id);
    lastIndexComment = newIndex;
  }

  numberPosts += step;
  
  if(numberPosts < listPosts.data.length){
    const btnMore = document.createElement('button');
    btnMore.className = 'btnMore';
    btnMore.id = 'btnMore';
    btnMore.innerText = "Load more";

    btnMore.addEventListener('click', setContent);
    contentHtml.append(btnMore);
  }

}

const getData = async () => {
  let urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
  ];
  Promise.all(urls.map((url) => axios.get(url))).then( (data) => {
    [listPosts, listComments] = data;
    setContent();
  }).catch(console.error);
}

document.addEventListener("DOMContentLoaded", getData);

