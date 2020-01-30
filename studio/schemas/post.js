export default {
name: 'post',
type: 'document',
title: 'Post',
fields: [
    {
    name:'title',
    title: 'Title',
    type:'string'
    },
    {
    name:'body',
    title:'Body',
    type:'string'
    },
    {
    name:'author',
    title:'Author',
    type:'reference',
    to: [{type: 'author'}]
}
]
}
