module.exports =function(grunt){
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		eslint:{
			target:['js/*.js']
		},
		watch:{
			build:{
				files:['js/*.js'],
				tasks:['eslint'],
				options:{spawn:false}
			}
		}

	});

	
	grunt.registerTask('default',['eslint','watch']);
};