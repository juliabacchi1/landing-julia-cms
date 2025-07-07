import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Seção de Projetos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.min(1).unique(),
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Descrição para acessibilidade e SEO',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'link',
      title: 'Link do projeto',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
})
