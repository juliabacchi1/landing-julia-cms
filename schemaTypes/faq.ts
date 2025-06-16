import {defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Seção de FAQ',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Perguntas Frequentes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue: 'Tire suas dúvidas sobre nossos serviços de criação de landing pages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'questions',
      title: 'Perguntas e Respostas',
      type: 'array',
      of: [
        {
          name: 'faqItem',
          title: 'Item do FAQ',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Pergunta',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Resposta',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle: subtitle
                  ? subtitle.slice(0, 40) + (subtitle.length > 40 ? '...' : '')
                  : '',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
  ],
})
