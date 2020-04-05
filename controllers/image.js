//image.js
sidebar = require('../helpers/sidebar');
const faker = require('faker');
//faker.locale = "pt-BR";

const fs = require('fs');
const path = require('path');

const viewModel = {
	image: {
		uniqueId: 1,
		title: faker.name.title(),
		description: faker.company.catchPhraseDescriptor(),
		filename: faker.image.imageUrl,
		views: faker.random.number(),
		likes: faker.random.number(),
		timestamp: Date.now()
	},
	comments: [
		{
			image_id: 1,
			email: faker.internet.email(),
			name: faker.name.firstName(),
			gravatar: faker.image.avatar(),
			comment: faker.lorem.sentence(),
			timestamp: Date.now()
		},{
			image_id: 1,
			email: faker.internet.email(),
			name: faker.name.firstName(),
			gravatar: faker.image.avatar(),
			comment: faker.lorem.sentence(),
			timestamp: Date.now()
		},{
			image_id: 1,
			email: faker.internet.email(),
			name: faker.name.firstName(),
			gravatar: faker.image.avatar(),
			comment: faker.lorem.sentence(),
			timestamp: Date.now()
		}
	]
}

module.exports = {
	index: (req, res)=> {
		sidebar(viewModel, (viewModel) => {
			res.render('image', viewModel);
			});
	},
	create(req, res) {
		var saveImage = ()=>{
			let possible = 'abcdefghijlkmnopqrstuvxz0123456789',
			imgUrl = '';
			
			for(var i=0; i<6; i+=1){
				imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			const tempPath = req.files.file.path,
			ext = path.extname(req.files.file.name).toLowerCase(),
			targetPath = path.resolve(`./public/upload/${imgUrl}${ext}`);

			if(ext === '.png' || ext === '.jpeg' || ext ==='.gif'){
				fs.rename(tempPath, targetPath, (err)=>{
					if(err) throw err;
					
					res.redirect(`/images/${imgUrl}`);
				});
			}else {
				fs.unlink(tempPath, ()=>{
					if(err) throw err;

					res.json(500, {error: 'Apenas imagens são aceitas!'});
				});;
			}
		}
		saveImage();
	},
	like(req, res) {
		res.json({ likes: 1 });
	},
	comment(req, res) {
		res.send('The image:comment POST controller');
	}
};