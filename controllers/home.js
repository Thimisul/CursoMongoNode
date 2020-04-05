//home.js
module.exports = {
	index: (req, res) => {
		const viewModel = {
            image: {
                uniqueId:       1,
                title:          'Teste 1',
                description:    'É apenas um teste.',
                filename:       'sample1.jpg',
                views:          0,
                likes:          0,
                timestamp:      Date.now()
            },
            comments: [
                {
                    image_id:   1,
                    email:      'teste@teste.com.br',
                    name:       'Test Tester',
                    gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                    comment:    'Um comentário...',
                    timestamp:  Date.now()
                },{
                    image_id:   1,
                    email:      'teste@teste.com.br',
                    name:       'Test Tester',
                    gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                    comment:    'Um outro um comentário...',
                    timestamp:  Date.now()
                }
            ]
        };
		sidebar(viewModel, (viewModel) => {
			res.render('index', viewModel);
			});
	}
};