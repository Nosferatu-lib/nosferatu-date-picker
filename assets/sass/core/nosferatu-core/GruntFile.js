module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterAll(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.task.renameTask('release', 'git-release');

    grunt.initConfig({
        scsslint: {
            all: [
                'src'
            ],
            options: {
                config: 'scss-lint.yml',
                reporterOutput: null
            }
        },
        'git-release': {
            options: {
                file: 'bower.json',
                npm: false,
                additionalFiles: ['package.json']
            }
        }
    });

    grunt.registerTask('validate', ['scsslint']);
    grunt.registerTask('release', function (type) {
        var releaseTarget = type ? ':' + type : '';
        grunt.task.run(['validate', 'git-release' + releaseTarget]);
    });
};