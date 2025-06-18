export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {name: 'title', title: 'Título', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'description', title: 'Descrição', type: 'text'},
    {name: 'category', title: 'Categoria', type: 'string'},
    {name: 'badge', title: 'Destaque/Badge', type: 'string'},
    {name: 'author', title: 'Autor', type: 'string'},
    {name: 'letter', title: 'Letra do autor', type: 'string'},
    {name: 'tagColor', title: 'Cor da tag', type: 'string'},
    {name: 'icon', title: 'Ícone (SVG ou imagem)', type: 'image'}, // ou string, dependendo do seu uso
    {name: 'content', title: 'Conteúdo', type: 'array', of: [{type: 'block'}]},
  ],
}
