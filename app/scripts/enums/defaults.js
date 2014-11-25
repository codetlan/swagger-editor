'use strict';

PhonicsApp.config(function ($provide) {
    $provide.constant('defaults',

                      // BEGIN-DEFAULTS-JSON
                      {
                          codegen: {
                              servers: 'http://generator.wordnik.com/online/api/gen/servers',
                              clients: 'http://generator.wordnik.com/online/api/gen/clients',
                              server: 'http://generator.wordnik.com/online/api/gen/servers/{language}',
                              client: 'http://generator.wordnik.com/online/api/gen/clients/{language}'
                          },
                          disableCodeGen: true,

                          examplesFolder: '/spec-files/',
                          exampleFiles: [
                              'sessions.yaml',
                              'users.yaml',
                              'challenges.yaml',
                              'comments.yaml',
                              'proposals.yaml',
                              'ideas.yaml',
                              'interests.yaml',
                              'categories.yaml',
                              'groups.yaml',
                              'configurations.yaml',
                              'files.yaml'
                          ],
                          
                          // See keyword-map.js for object format
                          autocompleteExtension: {},

                          backendEndpoint: '/editor/spec',
                          useBackendForStorage: false,
                          backendHelathCheckTimeout: 5000,
                          useYamlBackend: false,

                          disableFileMenu: false,
                          headerBranding: false,
                          enableTryIt: true,
                          brandingCssClass: '',
                          schemaUrl: '/schema/swagger.json'
                      }
                      // END-DEFAULTS-JSON

                     );
});
