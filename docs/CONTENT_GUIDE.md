# Content Management Guide - Kultur Photo Club

## Overview

This guide explains how to create and manage content for Kultur Photo Club using Sanity Studio. The CMS is designed specifically for editorial photography content with three main article categories.

## Getting Started with Sanity Studio

### Accessing the Studio

1. Start the Sanity Studio: `cd studio && npm run dev`
2. Open [http://localhost:3333](http://localhost:3333)
3. Sign in with your Sanity account

### Interface Overview

The Sanity Studio interface includes:

- **Content Navigator**: Browse all content types
- **Document Editor**: Edit individual pieces of content
- **Vision Tool**: Test GROQ queries
- **Structure Tool**: Organize content structure

## Content Types

### 1. Posts (Articles)

Posts are the main content type, representing articles in your photography magazine.

#### Creating a New Post

1. Click "Post" in the content navigator
2. Click "Create new Post"
3. Fill in the required fields:

**Essential Fields:**

- **Title**: Article headline (required)
- **Slug**: URL-friendly version (auto-generated)
- **Author**: Select from existing authors (required)
- **Category**: Choose from Long read, Recommandations, or Actualités
- **Main Image**: Featured image for the article

**Content Fields:**

- **Excerpt**: Brief description (appears on homepage)
- **Body**: Main article content using rich text editor
- **Gallery**: Additional images for the article
- **Reading Time**: Estimated reading time in minutes

**SEO Fields:**

- **Meta Title**: Custom title for search engines
- **Meta Description**: Custom description for search engines

#### Writing Article Content

The **Body** field uses Sanity's rich text editor (PortableText) with these features:

**Text Formatting:**

- Normal paragraphs
- Headings (H2, H3, H4)
- Bold and italic text
- Bullet and numbered lists
- Blockquotes for emphasis

**Media Blocks:**

- **Image**: Single image with optional caption
- **Carousel**: Multiple images in a gallery layout

**Best Practices:**

- Use H2 for main sections
- Add captions to images for context
- Keep paragraphs concise for readability
- Use blockquotes for important quotes

### 2. Categories

Three pre-configured categories define the content types:

#### Long read

- In-depth photography articles
- Analysis of photographic themes
- Historical or cultural perspectives
- Extended interviews

#### Recommandations

- Monthly photography book reviews
- Exhibition recommendations
- Equipment suggestions
- Photo book discoveries

#### Actualités

- Photography news and updates
- Industry announcements
- Event coverage
- Quick updates

### 3. Authors

Author profiles provide credibility and personality to articles.

#### Creating Author Profiles

1. Navigate to "Author" in the content navigator
2. Click "Create new Author"
3. Fill in the information:

**Required Fields:**

- **Name**: Author's full name
- **Slug**: URL-friendly version of name

**Optional Fields:**

- **Image**: Author portrait photo
- **Bio**: Brief biography or description

### 4. Pages

Static pages for site information (About, Contact, etc.).

#### Creating Static Pages

1. Navigate to "Page" in the content navigator
2. Click "Create new Page"
3. Complete the fields:

**Essential Fields:**

- **Title**: Page title
- **Slug**: URL path (e.g., "about", "contact")
- **Content**: Page content using rich text editor

## Editorial Workflow

### Planning Content

1. **Content Calendar**: Plan articles by category
2. **Author Assignment**: Assign authors to articles
3. **Image Preparation**: Gather high-quality images
4. **SEO Planning**: Prepare meta titles and descriptions

### Creating Content

1. **Draft Creation**: Create article draft in Sanity
2. **Content Writing**: Write article using rich text editor
3. **Image Upload**: Add main image and gallery images
4. **Metadata**: Add excerpt and SEO information
5. **Review**: Preview content before publishing

### Publishing Process

1. **Final Review**: Check all content and formatting
2. **SEO Check**: Ensure meta tags are optimized
3. **Image Optimization**: Verify images load properly
4. **Publish**: Save the document (automatically published)

## Image Management

### Image Guidelines

**Recommended Specifications:**

- **Main Images**: 1200x675px (16:9 aspect ratio)
- **Gallery Images**: 800x600px minimum
- **Author Photos**: 400x400px (square)
- **File Format**: JPEG or PNG
- **File Size**: Under 2MB for optimal loading

### Uploading Images

1. **Single Images**: Drag and drop or click to browse
2. **Multiple Images**: Use the gallery field for collections
3. **Alt Text**: Always add descriptive alt text
4. **Captions**: Add captions for context

### Image SEO Best Practices

- Use descriptive filenames before uploading
- Add meaningful alt text for accessibility
- Include captions that add editorial value
- Consider image placement in article flow

## SEO Optimization

### Meta Tags

**Title Tags:**

- Keep under 60 characters
- Include main keyword
- Make it compelling for clicks

**Meta Descriptions:**

- Keep under 160 characters
- Summarize article content
- Include call-to-action when appropriate

### Content SEO

**Headings:**

- Use logical heading structure (H1 → H2 → H3)
- Include keywords naturally
- Make headings descriptive

**Content Structure:**

- Write scannable content
- Use bullet points and lists
- Include relevant keywords naturally
- Add internal links when relevant

## Content Best Practices

### Photography Focus

- Prioritize visual storytelling
- Balance text and images effectively
- Use high-quality, relevant images
- Credit photographers and sources

### Editorial Voice

- Maintain consistent tone across articles
- Write for photography enthusiasts
- Balance accessibility with expertise
- Include personal perspectives when appropriate

### Technical Writing

- Explain technical concepts clearly
- Define photography terminology
- Use examples to illustrate points
- Provide actionable insights

## Content Maintenance

### Regular Updates

- Review and update older articles
- Check for broken links or outdated information
- Update author bios and information
- Refresh images when necessary

### Content Organization

- Use consistent categorization
- Maintain author profiles
- Organize images in logical folders
- Archive outdated content appropriately

## Quality Checklist

Before publishing any content, ensure:

**Content Quality:**

- [ ] Article provides value to readers
- [ ] Grammar and spelling are correct
- [ ] Information is accurate and current
- [ ] Tone matches brand voice

**Technical Requirements:**

- [ ] Title and slug are optimized
- [ ] Main image is high-quality and relevant
- [ ] Alt text is added to all images
- [ ] Author is assigned
- [ ] Category is selected

**SEO Optimization:**

- [ ] Meta title is compelling and under 60 characters
- [ ] Meta description summarizes content under 160 characters
- [ ] Headings follow logical structure
- [ ] Content includes relevant keywords naturally

**User Experience:**

- [ ] Article is scannable with good formatting
- [ ] Images enhance the reading experience
- [ ] Content flows logically
- [ ] Article length matches content type (long read vs. news)

## Troubleshooting

### Common Issues

**Images not appearing:**

- Check file format and size
- Ensure images are properly uploaded
- Verify alt text is added

**Content not updating on site:**

- Save changes in Sanity Studio
- Check for any validation errors
- Refresh the frontend site

**SEO issues:**

- Verify meta tags are filled out
- Check title and description length
- Ensure content is published, not draft

### Getting Help

- **Sanity Documentation**: [sanity.io/docs](https://sanity.io/docs)
- **Studio Help**: Use the help icon in Sanity Studio
- **Technical Issues**: Check the development team's documentation
