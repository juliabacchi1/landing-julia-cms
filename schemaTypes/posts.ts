import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Resumo curto para pré-visualização',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge / Destaque',
      type: 'string',
      description: "Ex: 'Em alta', 'Novo', 'Destaque' (opcional)",
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'letter',
      title: 'Letra do Autor',
      type: 'string',
      description: "Letra para o avatar do autor (ex: 'J')",
      validation: (Rule) =>
        Rule.required()
          .length(1)
          .custom((val) => {
            if (typeof val !== 'string') return 'Deve ser uma letra'
            return /^[A-Z]$/i.test(val) || 'Deve ser uma letra'
          }),
    }),
    defineField({
      name: 'tagColor',
      title: 'Cor da Tag',
      type: 'string',
      options: {
        list: [
          {title: 'Primária', value: 'primary'},
          {title: 'Secundária', value: 'secondary'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'string',
      options: {
        list: [
          {title: 'Flame', value: 'flame'},
          {title: 'Users', value: 'users'},
          {title: 'Code', value: 'code'},
          {title: 'Camera', value: 'camera'},
          {title: 'Heart', value: 'heart'},
          {title: 'Star', value: 'star'},
          {title: 'Coffee', value: 'coffee'},
          {title: 'Book', value: 'book'},
          {title: 'Bell', value: 'bell'},
          {title: 'Zap', value: 'zap'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
