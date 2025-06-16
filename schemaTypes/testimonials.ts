import {defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Seção de Depoimentos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'O que nossos clientes dizem',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue:
        'Veja como nossas landing pages têm ajudado empresas a aumentar suas conversões e alcançar seus objetivos.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testimonials',
      title: 'Depoimentos',
      type: 'array',
      of: [
        {
          name: 'testimonial',
          title: 'Depoimento',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nome do Cliente',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'initials',
              title: 'Iniciais (para avatar)',
              type: 'string',
              validation: (Rule) => Rule.required().max(2),
            },
            {
              name: 'role',
              title: 'Cargo/Posição',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Conteúdo do Depoimento',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'rating',
              title: 'Avaliação (1-5)',
              type: 'number',
              initialValue: 5,
              validation: (Rule) => Rule.required().min(1).max(5),
            },
            {
              name: 'color',
              title: 'Cor do Avatar',
              type: 'string',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                  {title: 'Accent', value: 'accent'},
                ],
              },
              initialValue: 'primary',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
  ],
})
