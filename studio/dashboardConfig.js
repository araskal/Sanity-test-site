export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f5b08284d69d7e4740e0911',
                  title: 'Sanity Studio',
                  name: 'sanity-test-site-studio-frh5p33e',
                  apiId: '1fe709ed-d7bc-425b-b762-56a65e18b4d7'
                },
                {
                  buildHookId: '5f5b08282cf866d99cc244cc',
                  title: 'Landing pages Website',
                  name: 'sanity-test-site-web',
                  apiId: '8e212a37-5adf-487b-bc43-f9b70fe1969f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/araskal/Sanity-test-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-site-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
