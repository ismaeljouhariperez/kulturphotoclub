import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: {type: 'author'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: "Important pour l'accessibilité et le SEO",
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: {type: 'category'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      description: "Court résumé affiché sur la page d'accueil",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (rule) => rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de lecture (en minutes)',
      type: 'number',
      description: 'Estimation du temps de lecture',
      validation: (rule) => rule.min(1).max(60),
    }),
    defineField({
      name: 'body',
      title: "Corps de l'article",
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: "Galerie d'images",
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Titre Meta (SEO)',
          type: 'string',
          validation: (rule) => rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Description Meta',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.max(160),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category.title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {author, category, publishedAt} = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('fr-FR') : ''
      return {
        ...selection,
        subtitle: `${category} • ${author} • ${date}`,
      }
    },
  },

  orderings: [
    {
      title: 'Date de publication (récent)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Date de publication (ancien)',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})
