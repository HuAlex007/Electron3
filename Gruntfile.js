var grunt=require('grunt');

//配置
grunt.config.init({
    pkg: grunt.file.readJSON('gruntPackage.json'),
    'create-windows-installer': {
        x64:{
            version:'3.0.2',
            authors:'AlexHu',
            projectUrl:'',
            appDirectory:'./project/Electron3-win32-x64',//要打包的输入目录
            outputDirectory:'./OutPut',//grunt打包后的输出目录
            exe:'Electron3.exe',
            description:'Electron3',
            setupIcon:"./my.ico",
            noMsi:true
        }
    }
});

//加载任务
grunt.loadNpmTasks('grunt-electron-installer');

//设置为默认
grunt.registerTask('default', ['create-windows-installer']);