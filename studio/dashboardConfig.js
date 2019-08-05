export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d48521a256d8135447dbf1e',
                  title: 'Sanity Studio',
                  name: '2020-portfolio-studio',
                  apiId: 'a9187361-7941-44bc-b43b-b9a8d0ff976e'
                },
                {
                  buildHookId: '5d48521a75698767831d3b52',
                  title: 'Portfolio Website',
                  name: '2020-portfolio',
                  apiId: 'ffa2b695-b125-469b-8626-7de4fb376e9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ebonertz/2020-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://2020-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
