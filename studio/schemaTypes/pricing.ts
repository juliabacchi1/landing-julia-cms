import {defineType} from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Seção de Planos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Planos que cabem no seu orçamento',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue:
        'Escolha o plano ideal para o seu negócio e comece a aumentar suas conversões hoje mesmo.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'plans',
      title: 'Planos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'plan',
          title: 'Plano',
          fields: [
            {
              name: 'name',
              title: 'Nome do Plano',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Preço',
              type: 'string',
              description: 'Ex: R$497',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'priceDescription',
              title: 'Descrição do Preço',
              type: 'string',
              initialValue: '/ único',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição do Plano',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'features',
              title: 'Recursos',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'feature',
                  title: 'Recurso',
                  fields: [
                    {
                      name: 'text',
                      title: 'Texto',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'included',
                      title: 'Incluído?',
                      type: 'boolean',
                      initialValue: true,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'included',
                    },
                    prepare({title, subtitle}) {
                      return {
                        title,
                        subtitle: subtitle ? 'Incluído' : 'Não incluído',
                      }
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.required().min(3),
            },
            {
              name: 'ctaText',
              title: 'Texto do Botão',
              type: 'string',
              initialValue: 'Selecionar Plano',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'highlight',
              title: 'Destaque?',
              type: 'boolean',
              description: 'Marcar como plano mais popular',
              initialValue: false,
            },
            {
              name: 'highlightText',
              title: 'Texto de Destaque',
              type: 'string',
              initialValue: 'Mais Popular',
              hidden: ({parent}) => !parent?.highlight,
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
              highlight: 'highlight',
            },
            prepare({title, subtitle, highlight}) {
              return {
                title,
                subtitle: `${subtitle} ${highlight ? '(Popular)' : ''}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(4),
    },
  ],
})
