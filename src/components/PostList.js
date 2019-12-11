import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Alessandra Vaz',
          avatar: 'https://i.pravatar.cc/150?img=30'
        },
        date: '04 Jun 2019',
        content: 'Gente estou ficando fera em usar media query no css, já estou até pensando em montar o meu próprio curso na Udemy! Quem apoia?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Lucas Nero Leitão',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            date: '04 Jun 2019',
            content:
              'Super apoio! Vou ser o primeiro aluno \\o\/'
          },
          {
            id: 2,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=43'
            },
            date: '04 Jun 2019',
            content:
              'Quando saí o cupom de desconto? :D'
          },
        ]
      },
      {
        id: 3,
        author: {
          name: 'Marco Toledo Cruz',
          avatar: 'https://i.pravatar.cc/150?img=55'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=43'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Vitor Braz Junior',
              avatar: 'https://i.pravatar.cc/150?img=60'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;