import {defineType} from 'sanity'

export default defineType({
  name: 'benefits',
  title: 'Seção de Benefícios',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Por que escolher nossas Landing Pages?',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue:
        'Criamos landing pages que não apenas impressionam visualmente, mas também são estrategicamente projetadas para maximizar suas conversões.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'benefits',
      title: 'Benefícios',
      type: 'array',
      of: [
        {
          name: 'benefit',
          title: 'Benefício',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título do Benefício',
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
            {
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  {title: 'Alta Conversão', value: 'conversion'},
                  {title: 'Design Exclusivo', value: 'design'},
                  {title: 'Entrega Rápida', value: 'fast'},
                  {title: 'Análise de Dados', value: 'analytics'},
                  {title: '100% Responsivas', value: 'mobile'},
                  {title: 'Hospedagem Incluída', value: 'hosting'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
  ],
})
