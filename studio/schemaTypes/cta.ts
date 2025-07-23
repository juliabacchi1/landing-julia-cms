import {defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Seção CTA (Contato)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Pronto para aumentar suas conversões?',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue:
        'Preencha o formulário abaixo e entraremos em contato para discutir seu projeto de landing page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'formFields',
      title: 'Campos do Formulário',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'formField',
          title: 'Campo',
          fields: [
            {
              name: 'label',
              title: 'Rótulo',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Nome do Campo',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  {title: 'Texto', value: 'text'},
                  {title: 'E-mail', value: 'email'},
                  {title: 'Telefone', value: 'tel'},
                  {title: 'Seleção', value: 'select'},
                  {title: 'Área de Texto', value: 'textarea'},
                  {title: 'Checkbox', value: 'checkbox'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'required',
              title: 'Obrigatório?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'placeholder',
              title: 'Texto de Exemplo',
              type: 'string',
            },
            {
              name: 'options',
              title: 'Opções (para seleção)',
              type: 'array',
              of: [{type: 'string'}],
              hidden: ({parent}) => parent?.type !== 'select',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'name',
              media: 'type',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'submitText',
      title: 'Texto do Botão de Envio',
      type: 'string',
      initialValue: 'Solicitar Orçamento',
      validation: (Rule) => Rule.required(),
    },
  ],
})
