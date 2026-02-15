// comments box connection

document.getElementById('post-btn').addEventListener('click', function(){
    const textarea = document.getElementById('area')
    
    const newComments = textarea.value ;

    const commentContainer = document.getElementById('comment-container')

    const commentP = document.createElement('p');
    commentP.classList.add('comment-p')
    commentP.innerText = newComments ;


    commentContainer.appendChild(commentP);

    textarea.value = '' ;

  
    
})
