import {defineType} from 'sanity'

export default defineType({
  name: 'process',
  title: 'Seção de Processo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Como funciona nosso processo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue:
        'Criamos sua landing page em apenas 4 etapas simples, garantindo um resultado final que supera suas expectativas.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      title: 'Etapas do Processo',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Etapa',
          fields: [
            {
              name: 'number',
              title: 'Número da Etapa',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'title',
              title: 'Título da Etapa',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'number',
            },
            prepare({title, subtitle, number}) {
              return {
                title: `${number}. ${title}`,
                subtitle,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(6),
    },
    {
      name: 'ctaText',
      title: 'Texto do Botão CTA',
      type: 'string',
      initialValue: 'Quero minha Landing Page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaLink',
      title: 'Link do Botão CTA',
      type: 'string',
      initialValue: '#planos',
      validation: (Rule) => Rule.required(),
    },
  ],
})