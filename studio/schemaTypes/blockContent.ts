import {defineType, defineArrayMember} from 'sanity'

/**
 * Schéma pour le contenu riche des articles du blog photo
 */
export default defineType({
  title: 'Contenu riche',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Titre H2', value: 'h2'},
        {title: 'Titre H3', value: 'h3'},
        {title: 'Titre H4', value: 'h4'},
        {title: 'Citation', value: 'blockquote'},
        {title: 'Légende photo', value: 'caption'},
      ],
      lists: [
        {title: 'Liste à puces', value: 'bullet'},
        {title: 'Liste numérotée', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Gras', value: 'strong'},
          {title: 'Italique', value: 'em'},
          {title: 'Souligné', value: 'underline'},
        ],
        annotations: [
          {
            title: 'Lien',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (rule) => rule.required(),
              },
              {
                title: 'Ouvrir dans un nouvel onglet',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
    // Image individuelle
    defineArrayMember({
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: "Important pour l'accessibilité et le SEO",
          validation: (rule) => rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Légende',
        },
        {
          name: 'size',
          type: 'string',
          title: "Taille d'affichage",
          options: {
            list: [
              {title: 'Petite', value: 'small'},
              {title: 'Moyenne', value: 'medium'},
              {title: 'Grande', value: 'large'},
              {title: 'Pleine largeur', value: 'full'},
            ],
          },
          initialValue: 'large',
        },
      ],
    }),
    // Carousel d'images
    defineArrayMember({
      type: 'object',
      name: 'carousel',
      title: "Carousel d'images",
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          validation: (rule) => rule.required().min(2).max(10),
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Texte alternatif',
                  validation: (rule) => rule.required(),
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Légende',
                },
              ],
            },
          ],
        },
        {
          name: 'title',
          title: 'Titre du carousel',
          type: 'string',
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'images.0',
        },
        prepare(selection) {
          const {title, media} = selection
          return {
            title: title || "Carousel d'images",
            media,
          }
        },
      },
    }),
  ],
})
