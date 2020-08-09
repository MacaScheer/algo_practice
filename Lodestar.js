#!/usr/bin/env node
'use strict';


function findLikes() {
   
    
}
```SQL

SELECT *, COUNT(like.id) 
FROM posts 
JOIN likes ON like.post_id = post.id 
WHERE post.user_id = 234
GROUP_BY post.id

SQL```