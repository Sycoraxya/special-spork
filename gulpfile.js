var gulp   = require("gulp"),
    $      = require("gulp-load-plugins")(),
    argv   = require("yargs").argv,
    _      = require("lodash"),
    colors = require("colors"),
    moment = require("moment"),
	webpack = require("webpack"),
	webpackConfig = require("./webpack.config");

const config = {
	scroll: {
		styles: {
			src: ["./src/styles/global.scss"],
			dest: "./build/styles",
			srcDirectory: ["./src/styles/**/*.{scss,css}"],
			autoprefix: ["last 5 versions"],
			fileName: 'styles.css'
		},

		scripts: {
			src: ["./src/scripts/**/*.js", "!./src/scripts/{tmp,tmp/**,examples,examples/**,tasks,tasks/**}"],
			dest: "./build/scripts/",
			bundle: "app.js"
		}
	}
};

gulp.task("styles", devStyles);
gulp.task("scripts", devScripts);

gulp.task('check', checkIfExists);
gulp.task("watch", gulp.series("check", "styles", "scripts", devWatch));

gulp.task("build", gulp.series("check", "styles", "scripts"));


// WEBPACK
// gulp.task("webpack", function (callback) {
// 	var compiler = webpack(createDevConfig());
// 	compiler.run(function (err, stats) {
// 		if (err) {
// 			console.error(err);
// 			return;
// 		}
//
// 		console.log(stats.toString({
// 			colors: true,
// 			exclude: ["node_modules", "bower_components", "jam", "components"]
// 		}));
// 		callback();
// 	})
// });
// gulp.task("watch", gulp.series("check", "styles", "webpack", devWatch));

function getTemplateName(args) {
	var keys = [];
	for (var property in args) {
		if(args.hasOwnProperty(property)) {
			keys.push(property);
		}
	}
	return keys;
}
function checkIfExists (cb) {
	var templateName = getTemplateName(argv)[1];
	var err = undefined;
	if (config[templateName] === undefined) {
		err = ` Template ${templateName} does not exist or is not properly configured. `.error;
	} else {
		var time = `[${moment().format('HH:mm:ss').data}${']'.white}`.white;
		console.log(`${time} Template ${templateName} found.
           Style 
            Source: ${config[templateName].styles.src}
            Destination: ${config[templateName].styles.dest}/${config[templateName].styles.fileName}
            Autoprefixing: ${config[templateName].styles.autoprefix}
           Scripts
            Source: ${config[templateName].scripts.src}
            Destination: ${config[templateName].scripts.dest}${config[templateName].scripts.bundle}
            Using Babel: Yes
            Using Webpack: No, uncomment WEBPACK and replace script with webpack in "watch"
            also add "plugins": ["transform-es2015-modules-amd"] to .babelrc`.info);
	}
	cb(err);
}

function devWatch () {
	var templateName = getTemplateName(argv)[1];
	console.log(`[${moment().format('HH:mm:ss').data}${']'.white} ${colors.black.bgGreen(' Now watching for changes.. ')}`);
	gulp.watch(config[templateName].styles.srcDirectory, gulp.series("styles"))
	gulp.watch(config[templateName].scripts.src, gulp.series("scripts"));
}

function devStyles () {
	var templateName = getTemplateName(argv)[1];
	return gulp
		.src(config[templateName].styles.src)
		.pipe($.sourcemaps.init())
		.pipe($.sass({outputStyle: 'expanded'}).on("error", $.sass.logError))
		//.pipe($.concat('style.css'))      // For putting scss and css together
		.pipe($.autoprefixer({
			browsers: config[templateName].styles.autoprefix
		}))
		.pipe($.sourcemaps.write())
		.pipe($.rename(config[templateName].styles.fileName))
		.pipe(gulp.dest(config[templateName].styles.dest));
}

// function devScripts () {
// 	var templateName = getTemplateName(argv)[1];
// 	return gulp
// 		.src(config[templateName].scripts.src)
// 		.pipe($.sourcemaps.init())
// 		.pipe($.babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe($.concat('common.js'))
// 		.pipe($.sourcemaps.write())
// 		.pipe(gulp.dest(config[templateName].scripts.dest))
// }
function devScripts () {
	var templateName = getTemplateName(argv)[1];
	return gulp
		.src(config[templateName].scripts.src)
		.pipe($.sourcemaps.init())
		.pipe($.babel().on('error', function(err) {
			console.log(err);
			this.emit('end')
		}))
		.pipe($.concat(config[templateName].scripts.bundle))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(config[templateName].scripts.dest))
}


colors.setTheme({
	error: ['black', 'bgRed'],
	info: ['green'],
	data: ['grey'],
});

// TODO: pass the right templatename to this
function createDevConfig() {
	const config = webpackConfig.clone();

	return config;
}

/*=============================================================================
 MODULE CREATOR
=============================================================================*/

function getModuleName(args) {
	var keys = [];
	for (var property in args) {
		if(args.hasOwnProperty(property)) {
			keys.push(property);
		}
	}
	return keys;
}

// FIXME: build this out
gulp.task('moduleNoSub', function() {
	var moduleDisplayName= getModuleName(argv)[1],
		moduleName = moduleDisplayName.replace(/ /g, '');

var module = `class ${moduleName} extends Modules {
	constructor (element) {
		super(element);	
		
		// Set some default parameters for this module
		this.name        = '${moduleName}'; // Be careful when changing this
		this.displayName = '${moduleDisplayName}';
		this.element     = element;

		// Set the options object {content, types}
		this.options = this.getOptions;

		// Set the function that runs when a user clicks on the accept button
		this.contentFunc = this.moduleContent;

		// Applies the is-selected class to the right element
		super.selectModule(element);

		// Finally, run the options function that opens the option menu
		super.optionsHandler();
	}
	
	getOptions (values) {
		return [
			{type: 'text', name: 'title', displayName: 'Title', placeholder: "Title (leave blank if you don\'t want a title)", value: values.title},
			{type: 'textarea', name: 'body', displayName: 'Body', placeholder: 'Body Text', value: values.body}
		];
	}
	
	// Put option logic in here!
	moduleContent (values) { // THE HTML CONTENT THAT WILL BE OUTPUTTED TO THE PAGE GOES HERE
		return \`
			<section class="text bg-primary">
				<div class="container">
					<div class="content centered">
						<h2>\${values.title}</h2>
						<hr />
						<p>\${values.body}</p>
					</div>
				</div>
			</section>\`;
	}
	
	static get previewContent () {
		return \`
			<span class="cb-header center"></span>
			<span class="cb-paragraph full"></span>
			<span class="cb-paragraph full"></span>
			<span class="cb-paragraph half"></span>
			<span class="horizontal-divider"></span>
			<span class="cb-paragraph full"></span>
			<span class="cb-paragraph half"></span>
		\`;
	}
	
	static register () {
		const name           = "${moduleName}",
		      displayName    = "${moduleDisplayName}",
		      previewContent = this.previewContent,
		      mainModule     = true,
		      hasSubModules  = false,
		      subModules     = [];

		new Register(previewContent, name, displayName, mainModule, hasSubModules, subModules)
	}
}`;
	console.log(`[${moment().format('HH:mm:ss').data}${']'.white} ${colors.black.bgGreen(` Module ${moduleName} created! `)}`);
	console.log(`[${moment().format('HH:mm:ss').data}${']'.white} ${colors.black.bgYellow(` Don't forget to add '${moduleName}' to the modules array in Setup.js! `)}`);
	return $.file(moduleName+'.js', module, {src: true})
		.pipe(gulp.dest('./clients/scripts/crossblocks/modules/'))
});
