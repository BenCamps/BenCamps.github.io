# Decap CMS Setup

This site now includes Decap CMS for easy content management. The CMS provides a user-friendly interface for creating and editing blog posts.

## Accessing the CMS

Once deployed, you can access the CMS admin interface at:
```
https://yourdomain.com/admin/
```

For local development:
```
http://localhost:3000/admin/index.html
```

## Features

- **Editorial Workflow**: Posts go through a review process before publishing
- **Rich Editor**: Markdown editor with preview capabilities
- **Media Management**: Upload and manage images
- **All Blog Fields Supported**: 
  - Title, Date, Summary
  - Tags, Authors, Layout
  - Draft status, Last modified date
  - Images, Bibliography, Canonical URL
  - Full markdown content

## Authentication Setup

To use the CMS in production, you'll need to set up authentication:

1. **Netlify Identity** (recommended for Netlify hosting):
   - Enable Netlify Identity in your Netlify dashboard
   - Configure Git Gateway in Netlify Identity settings

2. **GitHub Backend** (alternative):
   - Update `config.yml` backend to use GitHub
   - Set up OAuth app in GitHub settings

## Configuration

The CMS configuration is stored in `/public/admin/config.yml`. Key settings:

- **Backend**: Currently configured for git-gateway (Netlify)
- **Collections**: Blog posts from `data/blog/` directory
- **Media**: Images stored in `public/static/images/`
- **Editorial Workflow**: Enabled for content review process

## Content Structure

Blog posts are stored as MDX files in `data/blog/` with frontmatter:

```yaml
---
title: 'Your Post Title'
date: '2025-01-15'
summary: 'Brief description'
tags: ['tag1', 'tag2']
draft: false
---

Your markdown content here...
```

## Security

Content Security Policy has been updated to allow:
- `unpkg.com` for Decap CMS scripts
- `identity.netlify.com` for authentication

## Troubleshooting

- Ensure your site is deployed and accessible
- Check that authentication is properly configured
- Verify CSP settings allow necessary domains
- Check browser console for any script loading errors