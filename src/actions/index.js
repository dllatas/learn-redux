export const addContext = (name) => ({
    type: 'ADD_CONTEXT',
    context: name
})

// Governed by the user interaction

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

// Governed by the network requests

export const REQUEST_POSTS = 'REQUEST_POSTS'

/*function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}*/

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/*
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}*/