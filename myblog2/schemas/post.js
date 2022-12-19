export default {
  name: 'post',
  type: 'document',
  title: 'Post 1',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body content',
      validation: (Rule) => Rule.required(),
      group: 'content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
