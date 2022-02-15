export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620b603874da097c0aa8023b',
                  title: 'Sanity Studio',
                  name: 'sanityblogstarter-studio',
                  apiId: 'fcaaef5c-08d1-48f4-994a-ee6c917fb213'
                },
                {
                  buildHookId: '620b60382591d36f1d725fe5',
                  title: 'Blog Website',
                  name: 'sanityblogstarter',
                  apiId: 'd0eb0202-f92b-444d-8ae5-304c45ce21da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanben/sanityblogstarter',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanityblogstarter.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
