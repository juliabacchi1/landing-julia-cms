import {defineType} from 'sanity'

export default defineType({
  name: 'brands',
  title: 'Seção de Marcas/Clientes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      description: 'Ex: "Empresas que confiam em nosso trabalho"',
      initialValue: 'Empresas que confiam em nosso trabalho',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brands',
      title: 'Marcas/Clientes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'brand',
          title: 'Marca',
          fields: [
            {
              name: 'name',
              title: 'Nome da Marca',
              type: 'string',
              validation: (Rule) => Rule.required().min(3),
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Texto alternativo',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL (opcional)',
              type: 'url',
              description: 'Link para o site da empresa',
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
  ],
})
