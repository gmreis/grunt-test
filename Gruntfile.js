module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        release: {
            options: {
                npm: false,
                npmtag: false,
                indentation: "    ",
                tagName: "v<%=version%>",
                commitMessage: "v<%=version%>",
                tagMessage: "v<%=version%>"
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-release');
};