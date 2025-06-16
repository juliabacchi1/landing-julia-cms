import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título principal',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto do botão',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link do botão',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'ctaTextTwo',
      title: 'Texto do botão',
      type: 'string',
    }),
    defineField({
      name: 'ctaLinkTwo',
      title: 'Link do botão',
      type: 'string',
      description:
        'Pode ser uma âncora (#features), uma URL externa (https://...) ou um link interno (/cases)',
      validation: (Rule) =>
        Rule.custom((link) => {
          if (!link) return true // deixa opcional
          const value = String(link)
          const isValid =
            value.startsWith('#') ||
            value.startsWith('/') ||
            value.startsWith('http') ||
            value.startsWith('mailto:') ||
            value.startsWith('tel:')

          return isValid || 'O link deve começar com #, /, http(s), mailto: ou tel:'
        }),
    }),
    defineField({
      name: 'image',
      title: 'Imagem de destaque',
      type: 'image',
      options: {hotspot: true},
      // @ts-expect-error - TypeScript não reconhece "fields" em image, mas funciona no Sanity
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Descrição da imagem para acessibilidade e SEO',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
