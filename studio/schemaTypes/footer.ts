import {defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Rodapé',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Nome da Marca',
      type: 'string',
      initialValue: 'LandingCraft',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandHighlight',
      title: 'Destaque no Nome',
      type: 'string',
      initialValue: 'Craft',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      initialValue: 'Transformamos visitantes em clientes com landing pages de alta conversão.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Rede Social',
          fields: [
            {
              name: 'platform',
              title: 'Plataforma',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Portfolio', value: 'portfolio'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    },
    {
      name: 'columns',
      title: 'Colunas de Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'column',
          title: 'Coluna',
          fields: [
            {
              name: 'title',
              title: 'Título da Coluna',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'link',
                  title: 'Link',
                  fields: [
                    {
                      name: 'text',
                      title: 'Texto',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'url',
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'links.length',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle: `${subtitle} links`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(4),
    },
    {
      name: 'ctaBox',
      title: 'Chamada para Ação',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Texto da CTA',
          type: 'string',
          initialValue: 'Pronto pra dar vida ao seu site?',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'buttonText',
          title: 'Texto do Botão',
          type: 'string',
          initialValue: 'Vamos conversar',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'buttonLink',
          title: 'Link do Botão',
          type: 'string',
          initialValue: '#contato',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'copyright',
      title: 'Texto de Copyright',
      type: 'string',
      initialValue: '© 2023 LandingCraft. Todos os direitos reservados.',
      validation: (Rule) => Rule.required(),
    },
  ],
})
